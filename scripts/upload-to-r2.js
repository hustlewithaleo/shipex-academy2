/* ============================================================
   Uploads course video files to Cloudflare R2.
   ------------------------------------------------------------
   Run:  node scripts/upload-to-r2.js
   Safe to re-run — already-uploaded files (matching size) are skipped,
   so an interrupted run just picks back up where it left off.
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
  "AB Inner Circle",
];

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

function walkMp4s(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkMp4s(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".mp4")) {
      out.push(full);
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

  const upload = new Upload({
    client: s3,
    params: {
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(filePath),
      ContentType: "video/mp4",
    },
    queueSize: 4,
    partSize: 50 * 1024 * 1024, // 50MB parts
  });

  let lastPct = -1;
  upload.on("httpUploadProgress", (p) => {
    if (!p.total) return;
    const pct = Math.floor((p.loaded / p.total) * 100);
    if (pct !== lastPct && pct % 10 === 0) {
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
  const allFiles = [];
  for (const courseDir of COURSE_DIRS) {
    const full = path.join(PUBLIC_DIR, courseDir);
    if (!fs.existsSync(full)) {
      console.warn(`Course folder not found, skipping: ${courseDir}`);
      continue;
    }
    allFiles.push(...walkMp4s(full));
  }

  const totalBytes = allFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0);
  console.log(`Found ${allFiles.length} video files, ${humanSize(totalBytes)} total.\n`);

  const runningTotals = { uploadedBytes: 0, totalBytes };

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const key = path.relative(PUBLIC_DIR, filePath).split(path.sep).join("/");
    try {
      await uploadFile(filePath, key, i + 1, allFiles.length, runningTotals);
    } catch (e) {
      console.error(`[${i + 1}/${allFiles.length}] FAILED ${key}:`, e.message);
    }
  }

  console.log("\nDone.");
}

main();
