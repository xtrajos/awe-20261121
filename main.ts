import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(here, "entry.txt");

if (!existsSync(entryPath)) {
  throw new Error("entry.txt not found next to main.ts");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
