# Freizeitstätte Lübars

Die Website wird als klassische statische Website aus HTML, CSS und wenig JavaScript erzeugt.

## Veröffentlichte Website

Die Website ist erreichbar unter:
[senioren-luebars.berlin](https://senioren-luebars.berlin)

## Voraussetzungen

Benötigt wird Node.js 22.13 oder neuer. Externe npm-Pakete gibt es nicht.

## Lokal starten

```bash
npm run dev
```

Danach ist die Vorschau unter http://localhost:3000 erreichbar.

## Build und Prüfung

```bash
npm run build
npm test
```

Der Build erzeugt 21 HTML-Seiten in `dist/client`. Der Test kontrolliert die
Anzahl der Seiten sowie alle lokalen Links, Bilder, Styles und PDF-Dateien.

## Wichtige Dateien

- `src/pages/*.html` – Inhalte der normalen Seiten
- `src/data/activities.json` – Inhalte aller Aktivitätsseiten
- `src/styles.css` – Gestaltung und responsive Layouts
- `src/menu.js` – mobile Navigation
- `scripts/build.mjs` – gemeinsame Seitenteile und Seitengenerator
- `public/` – Bilder, Logo und PDF-Dokumente
- `BILDNACHWEISE.md` – Quellen und Lizenzen der verwendeten Stockbilder
- `deploy.ps1` – Veröffentlichung nach `Seniorenclub/website` auf STRATO

## Auf STRATO veröffentlichen

Voraussetzungen sind Node.js 22.13 oder neuer sowie ein eingerichteter
OpenSSH-Zugang für `stu512072182@56759440.ssh.w1.strato.hosting`.
Der folgende Befehl baut die Website und lädt sie nach
`Seniorenclub/website` hoch:

```bash
.\deploy.ps1
```
