// Regenerates public/qr-signup.png from the SIGNUP_URL in lib/site.ts
// Usage: npm run qr
import QRCode from "qrcode";
import { readFileSync, mkdirSync } from "node:fs";

const src = readFileSync(new URL("../lib/site.ts", import.meta.url), "utf8");
const url = src.match(/SIGNUP_URL\s*=\s*["'`]([^"'`]+)["'`]/)?.[1];

if (!url || url.includes("REPLACE_ME")) {
  console.error("Set a real SIGNUP_URL in lib/site.ts first.");
  process.exit(1);
}

mkdirSync(new URL("../public/", import.meta.url), { recursive: true });
await QRCode.toFile(
  new URL("../public/qr-signup.png", import.meta.url).pathname,
  url,
  { width: 600, margin: 1, color: { dark: "#0a0a0a", light: "#ffffff" } }
);
console.log("Wrote public/qr-signup.png for", url);
