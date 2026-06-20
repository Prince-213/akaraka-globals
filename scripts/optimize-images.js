const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sectionsDir = path.join(__dirname, "..", "public", "assets", "img", "sections");
const files = fs.readdirSync(sectionsDir).filter(f => /\.(jpe?g|png)$/i.test(f));

(async () => {
  for (const file of files) {
    const input = path.join(sectionsDir, file);
    const name = path.parse(file).name;
    const output = path.join(sectionsDir, `${name}.webp`);

    if (fs.existsSync(output)) {
      console.log(`Skipping (exists): ${name}.webp`);
      continue;
    }

    await sharp(input)
      .resize(960, 600, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);

    const origSize = fs.statSync(input).size;
    const newSize = fs.statSync(output).size;
    const pct = ((1 - newSize / origSize) * 100).toFixed(1);
    console.log(`${name}.webp — ${(origSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${pct}% smaller)`);
  }
  console.log("Done.");
})();
