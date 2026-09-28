import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";
const LINK_PATTERN =
  /(?:href|action)\s*=\s*["']([^"']+)["']|href\s*:\s*["']([^"']+)["']/g;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const links = new Set();

for (const file of walk("src")) {
  if (!/\.(ts|tsx)$/.test(file)) continue;
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(LINK_PATTERN)) {
    const link = match[1] ?? match[2];
    if (link?.startsWith("/") && !link.startsWith("/_next")) links.add(link);
  }
}

const broken = [];

for (const link of [...links].sort()) {
  try {
    const response = await fetch(SITE_URL + link, { redirect: "manual" });
    if (response.status >= 400) broken.push(`${link} -> ${response.status}`);
  } catch {
    broken.push(`${link} -> unreachable (${SITE_URL})`);
  }
}

if (broken.some((entry) => entry.includes("unreachable"))) {
  console.error(`Could not reach ${SITE_URL}. Start the app first, e.g. "npm run dev".`);
  process.exit(1);
}

if (broken.length > 0) {
  console.error(`Found ${broken.length} broken link(s):\n`);
  for (const entry of broken) console.error(`  ${entry}`);
  process.exit(1);
}

console.log(`Checked ${links.size} internal links against ${SITE_URL} — all resolve.`);
