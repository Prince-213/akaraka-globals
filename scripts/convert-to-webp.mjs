import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, dirname, extname } from "path";
import { existsSync } from "fs";

const IMG_DIR = join(process.cwd(), "public", "assets", "img");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name) && !entry.name.includes(".webp")) {
      yield full;
    }
  }
}

async function convert(filePath) {
  const ext = extname(filePath);
  const webpPath = filePath.replace(ext, ".webp");
  const size = (await stat(filePath)).size;

  if (existsSync(webpPath)) {
    const webpSize = (await stat(webpPath)).size;
    if (webpSize > 0 && webpSize < size) {
      return { file: filePath, action: "skipped", savings: 0 };
    }
  }

  try {
    let pipeline = sharp(filePath).webp({ quality: 80, effort: 4 });
    await pipeline.toFile(webpPath);
    const newSize = (await stat(webpPath)).size;
    const savings = size - newSize;
    const pct = Math.round((savings / size) * 100);
    return { file: filePath, action: `converted (${pct}% smaller, saved ${Math.round(savings / 1024)} KB)`, savings };
  } catch (err) {
    return { file: filePath, action: `error: ${err.message}`, savings: 0 };
  }
}

async function main() {
  console.log("Converting images to WebP...\n");
  let totalSavings = 0;
  let converted = 0;
  let skipped = 0;
  let errors = 0;

  const promises = [];
  for await (const file of walk(IMG_DIR)) {
    promises.push(convert(file));
  }

  const results = await Promise.all(promises);
  for (const r of results.sort((a, b) => b.savings - a.savings)) {
    if (r.action === "skipped") {
      skipped++;
      continue;
    }
    if (r.action.startsWith("error")) {
      errors++;
      console.log(`  ERROR: ${r.file} - ${r.action}`);
      continue;
    }
    converted++;
    totalSavings += r.savings;
    const shortFile = r.file.replace(process.cwd() + "\\public\\assets\\img\\", "");
    console.log(`  ${shortFile}: ${r.action}`);
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${errors} errors`);
  console.log(`Total savings: ${Math.round(totalSavings / 1024 / 1024)} MB`);
}

main().catch(console.error);
