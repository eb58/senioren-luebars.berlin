import { spawn } from 'node:child_process';
import { existsSync, watch } from 'node:fs';
import { join } from 'node:path';

const watched = ['app', 'public', 'scripts', 'next.config.ts', 'vite.config.ts', 'tsconfig.json', 'package.json'];
const ignored = /(^|[\/])(\.|node_modules|dist|\.next|\.wrangler)/;
const debounceMs = 300;

const npmExecPath = process.env.npm_execpath;
const startBuild = () => npmExecPath
  ? spawn(process.execPath, [npmExecPath, 'run', 'build'], { stdio: 'inherit' })
  : spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: process.platform === 'win32' });

let child = null;
let pending = false;
let retried = false;
let timer = null;

const build = () => {
  // Läuft noch ein Build, wird der Neustart nach dessen Ende nachgeholt.
  if (child) return void (pending = true);
  console.log(`\n[watch] Build gestartet - ${new Date().toLocaleTimeString('de-DE')}`);
  child = startBuild();
  child.on('exit', code => {
    child = null;
    if (pending) { pending = false; retried = false; return build(); }
    if (code !== 0 && !retried) {
      // Windows gibt Handles auf `dist` verzögert frei; der Aufräumschritt von
      // `vinext build` scheitert dadurch gelegentlich einmalig mit EPERM.
      retried = true;
      console.log('[watch] Build fehlgeschlagen. Wiederhole in 3 Sekunden ...');
      return void setTimeout(build, 3000);
    }
    retried = false;
    console.log(code === 0 ? '[watch] Build fertig. Warte auf Änderungen ...' : `[watch] Build fehlgeschlagen (Code ${code}). Warte auf Änderungen ...`);
  });
};

const schedule = file => {
  if (file && ignored.test(file)) return;
  retried = false;
  clearTimeout(timer);
  timer = setTimeout(build, debounceMs);
};

watched.filter(path => existsSync(join(process.cwd(), path))).forEach(path => {
  watch(join(process.cwd(), path), { recursive: true }, (_event, file) => schedule(file));
  console.log(`[watch] Beobachte ${path}`);
});

process.on('SIGINT', () => { child?.kill(); process.exit(0); });

build();
