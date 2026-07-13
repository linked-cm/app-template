// Ensure a local `.env` exists for standalone dev by copying `.env.example` on
// first run. Runs from the `prestart` / `prebuild` npm hooks.
//
// `.env` is gitignored; in production the host replaces it or injects real env
// vars instead. No-op when `.env` already exists (e.g. the CLI wrote it on
// create, or the developer has customised it). CommonJS (.cjs) so it runs
// regardless of the package's "type": "module".
const fs = require('fs');
if (!fs.existsSync('.env') && fs.existsSync('.env.example')) {
  fs.copyFileSync('.env.example', '.env');
  console.log('Created .env from .env.example — edit it for local dev.');
}
