# Website auf STRATO veröffentlichen

Die Website benötigt im aktuellen Umfang keine Datenbank und keinen dauerhaft
laufenden Node.js-Server. Sie kann deshalb als statische Website gebaut und auf
ein normales STRATO-Webhosting-Paket hochgeladen werden.

## Voraussetzungen

- Node.js 22.13 oder neuer
- ein STRATO-Webhosting-Paket mit SFTP-Zugang
- ein SFTP-Programm, zum Beispiel [FileZilla](https://filezilla-project.org/)

Die SFTP-Zugangsdaten stehen im STRATO-Kundenbereich unter:

`Ihr Paket → Datenbanken und Webspace → SFTP & SSH`

STRATO beschreibt die Einrichtung in der
[offiziellen SFTP-Anleitung](https://www.strato.de/faq/hosting/dateien-per-sftp-hochladen-welche-einstellungen-sind-noetig/).

## 1. Statischer Export

Der statische Export ist in `next.config.ts` bereits eingerichtet:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
```

Die Optionen haben folgende Aufgaben:

- `output: 'export'` erzeugt HTML-Dateien statt einer Server-Anwendung.
- `images.unoptimized: true` bindet Bilder ohne den sonst erforderlichen
  Next.js-Bildserver ein.

Nach dem Vinext-Build erzeugt `scripts/prepare-strato.js` automatisch die für
klassisches Webhosting benötigten `index.html`-Dateien in den Verzeichnissen der
Unterseiten. Der Befehl ist bereits in `npm run build` eingebunden.

> Hinweis: Das Projekt enthält auch eine Konfiguration für OpenAI Sites. Vor
> einem späteren Sites-Deployment sollte geprüft werden, ob der statische
> Export dort weiterhin gewünscht ist.

## 2. Website prüfen und bauen

PowerShell oder das integrierte Terminal in VS Code öffnen:

```powershell
cd C:\Users\erich\Projects\senioren-luebars.berlin
npm install
npm run lint
npm run build
```

Wenn der Build erfolgreich beendet wurde, liegt die fertige Website in:

```text
C:\Users\erich\Projects\senioren-luebars.berlin\dist\client
```

Nur der **Inhalt** dieses Ordners wird hochgeladen. Der Quellcode, `app`,
`node_modules` und andere Projektdateien gehören nicht auf den Webserver.

## 3. Verbindung zu STRATO herstellen

In FileZilla eine neue SFTP-Verbindung mit diesen Daten anlegen:

| Einstellung | Wert |
| --- | --- |
| Protokoll | SFTP |
| Server | der im STRATO-Kundenbereich angezeigte Server |
| Port | `22` |
| Benutzer | der angezeigte SFTP-Benutzername |
| Passwort | das für den SFTP-Zugang vergebene Passwort |

Auf dem STRATO-Webspace einen eigenen Zielordner anlegen, zum Beispiel:

```text
senioren-luebars
```

Danach alle Dateien und Unterordner aus `dist\client` in diesen Zielordner
hochladen. Die Datei `index.html` muss anschließend direkt im Zielordner liegen.

## 4. Domain mit dem Ordner verbinden

Im STRATO-Kundenbereich:

1. `Domains verwalten` öffnen.
2. Die gewünschte Domain auswählen.
3. Eine interne Weiterleitung einrichten.
4. Als Ziel den zuvor angelegten Ordner `senioren-luebars` auswählen.

Auf der neuen STRATO-Plattform muss eine Domain in der Regel auf ein
Unterverzeichnis zeigen. Details stehen in der
[STRATO-Anleitung zur Domainumleitung](https://www.strato.de/faq/domains/alles-zur-domainumleitung/).

## 5. Veröffentlichung testen

Nach dem Upload diese Seiten im Browser aufrufen:

- `/`
- `/aktivitaeten/`
- `/dokumente/`
- `/impressum/`
- mindestens eine einzelne Aktivität
- ein PDF unter `/dokumente/`

Zusätzlich prüfen, ob Bilder angezeigt werden und die Seite sowohl mit als
auch ohne `www` über HTTPS erreichbar ist.

## Spätere Aktualisierungen

Nach jeder inhaltlichen oder gestalterischen Änderung:

```powershell
cd C:\Users\erich\Projects\senioren-luebars.berlin
npm run lint
npm run build
```

Danach den Inhalt von `dist\client` erneut in den STRATO-Zielordner hochladen
und vorhandene Dateien ersetzen. Dateien, die im neuen Build nicht mehr
enthalten sind, sollten auch auf dem Webspace entfernt werden.

## Häufige Probleme

### Es erscheint noch die alte Website

Die Seite mit `Strg+F5` neu laden. Falls weiterhin die alte Version erscheint,
prüfen, ob die Dateien in den Ordner hochgeladen wurden, auf den die Domain
tatsächlich zeigt. STRATO erläutert außerdem die
[Reihenfolge von Index-Dateien](https://www.strato.de/faq/hosting/ich-habe-neue-seiten-hochgeladen-sehe-aber-immer-noch-die-vorherige-version-woran-kann-das-liegen/).

### Die Startseite funktioniert, Unterseiten liefern aber Fehler 404

Prüfen, ob alle Verzeichnisse und HTML-Dateien aus `dist\client` vollständig
hochgeladen wurden. In jedem Verzeichnis einer Unterseite muss eine
`index.html` liegen.

### Bilder oder PDF-Dateien fehlen

Den Inhalt von `dist\client` vollständig hochladen. Nicht nur die HTML-Dateien,
sondern auch `_next`, Bilder, Dokumente und alle weiteren Unterordner werden
benötigt.

### Der Build bricht ab

Zuerst die installierte Node.js-Version prüfen:

```powershell
node --version
```

Sie muss mindestens `v22.13.0` sein. Danach die Abhängigkeiten aktualisieren
und den Build erneut ausführen:

```powershell
npm install
npm run build
```
