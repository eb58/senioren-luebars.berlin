# Freizeitstätte Lübars

Die Website der Freizeitstätte Lübars als Next-/Vinext-Projekt.

## Veröffentlichte Website

Die Website ist erreichbar unter:
[senioren-luebars.berlin](https://senioren-luebars.berlin)

## In VS Code öffnen

Öffne in VS Code genau diesen Ordner:

`C:\Users\erich\Projects\senioren-luebars.berlin`

Voraussetzung ist Node.js 22.13 oder neuer.

## Lokal starten

Im integrierten Terminal:

```bash
npm install
npm run dev
```

Danach ist die Vorschau unter http://localhost:3000 erreichbar.

## Wichtige Dateien

- `app/page.tsx` – Startseite, Wochenplan und Footer
- `app/aktivitaeten/data.ts` – alle Gruppen und deren Inhalte
- `app/aktivitaeten/[slug]/page.tsx` – Vorlagen für Gruppen-Unterseiten
- `app/impressum/page.tsx` – Impressum
- `app/dokumente/page.tsx` – Dokumentenübersicht
- `app/globals.css` – Gestaltung und responsive Layouts
- `public/` – Bilder, Logo und PDF-Dokumente
- `BILDNACHWEISE.md` – Quellen und Lizenzen der verwendeten Stockbilder
- `deploy.ps1` – Veröffentlichung nach `Seniorenclub/website` auf STRATO

Vor einer Veröffentlichung:

```bash
npm run lint
npm run build
```

## Auf STRATO veröffentlichen

Voraussetzungen sind Node.js 22.13 oder neuer sowie ein eingerichteter
OpenSSH-Zugang für `stu512072182@56759440.ssh.w1.strato.hosting`.
Der folgende Befehl baut die Website und lädt sie nach
`Seniorenclub/website` hoch:

```bash
.\deploy.ps1
```
