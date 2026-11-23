import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dest = join(outDir, "entry.png");

const buf = readFileSync(src);
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error("entry.png is not a PNG file");
}
if (buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
if (buf.readUInt32BE(8) !== 13) {
  throw new Error("entry.png has a malformed IHDR chunk");
}
if (buf.length < 12 || buf.toString("ascii", buf.length - 8, buf.length - 4) !== "IEND") {
  throw new Error("entry.png is truncated: missing IEND chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
const bitDepth = buf[24];
const colourType = buf[25];
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (buf.length > 1048576) {
  throw new Error(`entry.png must be at most 1 MiB, got ${buf.length} bytes`);
}
if (bitDepth !== 8 || colourType !== 2) {
  throw new Error(`entry.png must be 8-bit RGB, got bit depth ${bitDepth}, colour type ${colourType}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(dest, buf);
console.log(`wrote ${dest} (${buf.length} bytes, 1024x1024 RGB)`);
