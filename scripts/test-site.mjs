import { access, readdir, readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', 'dist/client');
const files = await readdir(root, { recursive: true });
const htmlFiles = files.filter(file => extname(file) === '.html');
const failures = [];
const exists = async path =>
  access(path).then(
    () => true,
    () => false,
  );
const localTarget = value => {
  const path = value.split(/[?#]/)[0];
  if (!path || !path.startsWith('/')) return;
  const relative = path.startsWith('/website/') ? path.slice('/website/'.length) : path.slice(1);
  return extname(relative) ? join(root, relative) : join(root, relative, 'index.html');
};

for (const file of htmlFiles) {
  const html = await readFile(join(root, file), 'utf8');
  if (!html.includes('<main')) failures.push(`${file}: <main> fehlt`);
  if (html.includes('/_next/') || html.includes('__next_f')) failures.push(`${file}: enthält Next.js-Ausgabe`);
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]);
  for (const reference of references) {
    const target = localTarget(reference);
    if (target && !(await exists(target))) failures.push(`${file}: Ziel fehlt: ${reference}`);
  }
}

if (htmlFiles.length !== 21) failures.push(`Erwartet: 21 HTML-Seiten, gefunden: ${htmlFiles.length}`);
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Geprüft: ${htmlFiles.length} HTML-Seiten, alle lokalen Links und Assets vorhanden.`);
