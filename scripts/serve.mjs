import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { createServer } from 'node:http';

const root = resolve(import.meta.dirname, '..', 'dist/client');
const port = Number(process.env.PORT || 3000);
const types = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
};
const resolveFile = async pathname => {
  const relative = normalize(decodeURIComponent(pathname))
    .replace(/^(\.\.[/\\])+/, '')
    .replace(/^[/\\]+/, '');
  const target = join(root, relative);
  const info = await stat(target).catch(() => undefined);
  if (info?.isDirectory()) return join(target, 'index.html');
  return info?.isFile() ? target : join(target, 'index.html');
};

createServer(async (request, response) => {
  const requestedPath = new URL(request.url, `http://localhost:${port}`).pathname;
  const pathname = requestedPath.startsWith('/website/') ? requestedPath.slice('/website'.length) : requestedPath;
  const file = await resolveFile(pathname);
  const info = await stat(file).catch(() => undefined);
  if (!info?.isFile()) {
    response.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    createReadStream(join(root, '404.html')).pipe(response);
    return;
  }
  response.writeHead(200, { 'content-type': `${types[extname(file)] || 'application/octet-stream'}; charset=utf-8` });
  createReadStream(file).pipe(response);
}).listen(port, () => console.log(`Vorschau: http://localhost:${port}`));
