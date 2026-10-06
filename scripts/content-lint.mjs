#!/usr/bin/env node
// Content lint: scans blog article and FAQ content only. Runs from "prebuild".
// Exceptions live in content-lint.allow.json: {file, pattern, contains, reason}.
// "pattern" is the rule id (e.g. "price"); "contains" is an exact substring of the allowed line.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILES = ["src/lib/blog.ts", "src/lib/faq.ts"];

const RULES = [
  { id: "self-claim", re: /verified (dealer|provider|listing|directory)s?/i },
  { id: "self-claim", re: /\bwe (verify|vet|screen)\b/i },
  { id: "self-claim", re: /\bvetted\b/i },
  { id: "self-claim", re: /\b(trusted|top-rated) (dealer|provider|shop|specialist)s?/i },
  { id: "directory-below", re: /directory below/i },
  { id: "table", re: /^\s*\|.*\|\s*$/ },
  { id: "link-emphasis", re: /\[[^\]]*[*_][^\]]*\]\(/ },
  // Price figures: blog content only. Allowlist verified, dated ones with a reason.
  {
    id: "price",
    re: /\$\d[\d,]*(\s*[–-]\s*\$?\d[\d,]*)?\s*(\/|per )?(month|mo|year|yr|hour)\b/i,
    only: ["src/lib/blog.ts"],
  },
];

const allowPath = join(root, "content-lint.allow.json");
const allow = existsSync(allowPath) ? JSON.parse(readFileSync(allowPath, "utf8")) : [];
for (const a of allow) {
  if (!a.file || !a.pattern || !a.contains || !a.reason) {
    console.error(`content-lint: invalid allowlist entry (needs file, pattern, contains, reason): ${JSON.stringify(a)}`);
    process.exit(1);
  }
}

const used = new Set();
const hits = [];
for (const file of FILES) {
  const lines = readFileSync(join(root, file), "utf8").split("\n");
  lines.forEach((text, i) => {
    for (const rule of RULES) {
      if (rule.only && !rule.only.includes(file)) continue;
      if (!rule.re.test(text)) continue;
      const idx = allow.findIndex((a) => a.file === file && a.pattern === rule.id && text.includes(a.contains));
      if (idx >= 0) {
        used.add(idx);
        continue;
      }
      hits.push(`${file}:${i + 1}  [${rule.id}]  ${text.trim().slice(0, 200)}`);
    }
  });
}

allow.forEach((a, i) => {
  if (!used.has(i)) console.warn(`content-lint: unused allowlist entry (${a.file} / ${a.pattern}): "${a.contains}"`);
});

if (hits.length) {
  console.error(`content-lint: ${hits.length} hit(s)\n` + hits.join("\n"));
  process.exit(1);
}
console.log("content-lint: clean");
