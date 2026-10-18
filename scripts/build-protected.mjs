import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';

const root = path.resolve(import.meta.dirname, '..');
const siteRoot = path.resolve(root, process.argv[2] || 'public');
if (siteRoot !== root && !siteRoot.startsWith(root + path.sep)) throw new Error('The site directory must be inside the project.');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.ico': 'image/x-icon' };
const assets = {};
async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.') || (directory === siteRoot && ['node_modules', 'worker', 'scripts', 'dist', 'content'].includes(entry.name))) continue;
    const filename = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Do not package symlinked assets.');
    if (entry.isDirectory()) await collect(filename);
    else if (entry.isFile()) {
      const relative = '/' + path.relative(siteRoot, filename).split(path.sep).join('/');
      const data = await readFile(filename);
      assets[relative] = [types[path.extname(filename)] || 'application/octet-stream', data.toString('base64'), createHash('sha256').update(data).digest('hex')];
    }
  }
}
await collect(siteRoot);
const template = await readFile(path.join(root, 'worker/index.js'), 'utf8');
if (!template.includes('/* SAPIENS_ASSETS */ {}')) throw new Error('Missing asset insertion point.');
const source = template.replace('/* SAPIENS_ASSETS */ {}', JSON.stringify(assets));
const compressed = gzipSync(source).length;
if (compressed > 9.8 * 1024 * 1024) throw new Error('Protected Worker exceeds the deployment size budget.');
await mkdir(path.join(root, 'dist/server'), { recursive: true });
await mkdir(path.join(root, 'dist/.openai'), { recursive: true });
await writeFile(path.join(root, 'dist/server/index.js'), source);
await writeFile(path.join(root, 'dist/.openai/hosting.json'), await readFile(path.join(root, '.openai/hosting.json')));
console.log(`Built protected Worker with ${Object.keys(assets).length} assets; gzip ${(compressed / 1024 / 1024).toFixed(2)} MiB.`);
