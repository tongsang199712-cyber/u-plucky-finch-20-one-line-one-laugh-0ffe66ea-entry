// One Line, One Laugh — make.fun bounty u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single funny line (1-200 chars, one line, no trailing newline)
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a parrot, trained with love, betrays its owner for the smart
// speaker. Setup and twist in one breath, 77 characters, all ASCII so the
// byte count equals the character count.
const LINE =
  "I taught my parrot to say 'I love you,' and now it only says it to the Alexa.";

mkdirSync("/output", { recursive: true });

// Gate: 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
