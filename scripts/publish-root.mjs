/**
 * Copies production build from /docs to repo root so GitHub Pages "branch main / (root)" works.
 * After build, commit root index.html + assets/. Run `npm run dev` (uses index.dev.html) for local dev.
 */
import { copyFileSync, rmSync, cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docs = resolve(root, 'docs');

if (!existsSync(resolve(docs, 'index.html'))) {
  console.error('docs/index.html missing — run vite build first');
  process.exit(1);
}

copyFileSync(resolve(docs, 'index.html'), resolve(root, 'index.html'));

const assetsOut = resolve(root, 'assets');
if (existsSync(assetsOut)) rmSync(assetsOut, { recursive: true });
cpSync(resolve(docs, 'assets'), assetsOut, { recursive: true });

for (const f of ['favicon.svg', 'vite.svg', 'resume.pdf', '.nojekyll']) {
  const p = resolve(docs, f);
  if (existsSync(p)) copyFileSync(p, resolve(root, f));
}

console.log('publish-root: copied docs/ → root index.html + assets/ (ready to commit for Pages root)');
