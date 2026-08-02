/* Generic uploader: uploads every non-junk file under a course folder to R2,
   preserving the folder's relative path as the key (prefixed with the given
   key prefix). Skips macOS AppleDouble junk ("._*") and .DS_Store.
   Usage: node upload-course-generic.js "<absolute course dir>" "<r2 key prefix>" */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env;

const [, , COURSE_DIR, KEY_PREFIX] = process.argv;
if (!COURSE_DIR || !KEY_PREFIX) {
  console.error('Usage: node upload-course-generic.js "<absolute course dir>" "<r2 key prefix>"');
  process.exit(1);
}

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

const CONTENT_TYPES = {
  ".mp4": "video/mp4", ".mkv": "video/x-matroska", ".mov": "video/quicktime", ".m4v": "video/x-m4v",
  ".txt": "text/plain", ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".csv": "text/csv", ".zip": "application/zip",
  ".pagefly": "application/octet-stream",
};
if (process.env.INCLUDE_IMAGES === "1") {
  Object.assign(CONTENT_TYPES, {
    ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".gif": "image/gif", ".webp": "image/webp",
  });
}

function isJunk(name) {
  return name.startsWith("._") || name === ".DS_Store" || name === "Thumbs.db";
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (isJunk(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(full));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONTENT_TYPES[ext]) out.push(full);
    }
  }
  return out;
}

function humanSize(bytes) {
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}

async function alreadyUploaded(key, localSize) {
  try {
    const head = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    return head.ContentLength === localSize;
  } catch (e) {
    return false;
  }
}

async function uploadFile(filePath, key, index, total, runningTotals) {
  const size = fs.statSync(filePath).size;
  if (await alreadyUploaded(key, size)) {
    runningTotals.uploadedBytes += size;
    console.log(`[${index}/${total}] SKIP (already uploaded) ${key}`);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const upload = new Upload({
    client: s3,
    params: {
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(filePath),
      ContentType: CONTENT_TYPES[ext] || "application/octet-stream",
    },
    queueSize: 4,
    partSize: 50 * 1024 * 1024,
  });

  let lastPct = -1;
  upload.on("httpUploadProgress", (p) => {
    if (!p.total) return;
    const pct = Math.floor((p.loaded / p.total) * 100);
    if (pct !== lastPct && pct % 20 === 0) {
      lastPct = pct;
      process.stdout.write(`  ${key} — ${pct}%\r`);
    }
  });

  await upload.done();
  runningTotals.uploadedBytes += size;
  const overallPct = ((runningTotals.uploadedBytes / runningTotals.totalBytes) * 100).toFixed(1);
  console.log(
    `[${index}/${total}] OK  ${key}  (${humanSize(size)})  — overall ${overallPct}% of ${humanSize(runningTotals.totalBytes)}`
  );
}

async function main() {
  const allFiles = walkFiles(COURSE_DIR);
  const totalBytes = allFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0);
  console.log(`Found ${allFiles.length} files, ${humanSize(totalBytes)} total.\n`);

  const runningTotals = { uploadedBytes: 0, totalBytes };

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const rel = path.relative(COURSE_DIR, filePath).split(path.sep).join("/");
    const key = KEY_PREFIX + "/" + rel;
    try {
      await uploadFile(filePath, key, i + 1, allFiles.length, runningTotals);
    } catch (e) {
      console.error(`[${i + 1}/${allFiles.length}] FAILED ${key}:`, e.message);
    }
  }

  console.log("\nDone.");
}

main();
