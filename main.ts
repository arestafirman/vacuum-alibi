import { mkdirSync, writeFileSync } from "node:fs";

// The Vacuum's Alibi — one line, 200 characters max.
// First-person robot voice, deadpan and a little smug about its own sensors:
// the LiDAR map is law, even when the map is wrong.
// Output contract (RULES.txt): one UTF-8 line, 1-200 chars, no trailing
// newline — the file is the entry itself, nothing else is read.
const entry =
  "My LiDAR classified the ketchup stain as a load-bearing wall, so I vacuumed around it for three weeks out of respect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
