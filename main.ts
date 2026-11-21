import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const inputPath = join(__dirname, "entry.png");
if (!existsSync(inputPath)) {
  throw new Error(`entry.png not found at ${inputPath}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(inputPath, join(outputDir, "entry.png"));
