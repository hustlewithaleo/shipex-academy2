/* One-off upload of the "Intro Videos" folder to R2. Mirrors the same
   key-naming pattern as upload-to-r2.js (path relative to public/). */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env;

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const DIR = path.join(PUBLIC_DIR, "Intro Videos");

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

function humanSize(bytes) {
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

async function alreadyUploaded(key, localSize) {
  try {
    const head = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    return head.ContentLength === localSize;
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith(".mp4"));
  console.log(`Found ${files.length} files in Intro Videos/\n`);

  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(DIR, files[i]);
    const key = "Intro Videos/" + files[i];
    const size = fs.statSync(filePath).size;

    if (await alreadyUploaded(key, size)) {
      console.log(`[${i + 1}/${files.length}] SKIP (already uploaded) ${key}`);
      continue;
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
    console.log(`[${i + 1}/${files.length}] OK  ${key}  (${humanSize(size)})`);
  }

  console.log("\nDone.");
}

main().catch((e) => { console.error(e); process.exit(1); });
