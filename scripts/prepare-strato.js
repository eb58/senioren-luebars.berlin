import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'client');

const findHtmlFiles = async directory => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? findHtmlFiles(path) : [path];
  }));

  return files.flat();
};

const htmlFiles = (await findHtmlFiles(outputDir)).filter(file =>
  file.endsWith('.html') && basename(file) !== 'index.html' && basename(file) !== '404.html'
);

await Promise.all(htmlFiles.map(async file => {
  const route = relative(outputDir, file).slice(0, -'.html'.length);
  const target = join(outputDir, route, 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await copyFile(file, target);
}));

console.log(`STRATO-Ausgabe vorbereitet: ${htmlFiles.length} Unterseiten.`);
