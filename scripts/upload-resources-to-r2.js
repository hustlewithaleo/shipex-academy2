/* ============================================================
   Uploads course resource files (PDFs, worksheets, etc.) to R2.
   ------------------------------------------------------------
   Run:  node scripts/upload-resources-to-r2.js
   Safe to re-run — already-uploaded files (matching size) are skipped.
   ============================================================ */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME,
} = process.env;

for (const [k, v] of Object.entries({ R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME })) {
  if (!v) {
    console.error(`Missing ${k} in .env`);
    process.exit(1);
  }
}

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const COURSE_DIRS = [
  "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]",
  "HighTicket E-Commerce Course",
  "Impact Team - VIP (High-Ticket Sales System)",
  "Evolve E-Commerce by Spencer Pawliw",
];

const VIDEO_EXT = new Set([".mp4", ".mov", ".m4v"]);
const CONTENT_TYPES = {
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".txt": "text/plain",
  ".png": "image/png",
};

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

function walkResources(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkResources(full));
    } else if (entry.isFile() && !VIDEO_EXT.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function humanSize(bytes) {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

async function alreadyUploaded(key, localSize) {
  try {
    const head = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    return head.ContentLength === localSize;
  } catch (e) {
    return false;
  }
}

async function uploadFile(filePath, key, index, total) {
  const size = fs.statSync(filePath).size;
  if (await alreadyUploaded(key, size)) {
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
  });
  await upload.done();
  console.log(`[${index}/${total}] OK  ${key}  (${humanSize(size)})`);
}

async function main() {
  const allFiles = [];
  for (const courseDir of COURSE_DIRS) {
    const full = path.join(PUBLIC_DIR, courseDir);
    if (!fs.existsSync(full)) continue;
    allFiles.push(...walkResources(full));
  }
  console.log(`Found ${allFiles.length} resource files.\n`);

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const key = path.relative(PUBLIC_DIR, filePath).split(path.sep).join("/");
    try {
      await uploadFile(filePath, key, i + 1, allFiles.length);
    } catch (e) {
      console.error(`[${i + 1}/${allFiles.length}] FAILED ${key}:`, e.message);
    }
  }
  console.log("\nDone.");
}

main();
