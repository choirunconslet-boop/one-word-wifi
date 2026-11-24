// One Word for Your Wi-Fi — entry program.
//
// The word: "Gaslighting"
// Full bars, nothing loads. The Wi-Fi insists everything is fine while
// nothing works — it makes you doubt your own connection. Funny at once,
// true of every home network, and it works as a network name.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Gaslighting";

// Self-check against the published gate before writing: UTF-8 text of
// 1 to 20 characters, not only white space, exactly one word. A bad word
// must fail loudly here instead of shipping an invalid entry.
if (
  WORD.length < 1 ||
  WORD.length > 20 ||
  !WORD.trim() ||
  WORD.trim().split(/\s+/).length !== 1
) {
  throw new Error(`Word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
