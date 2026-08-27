# Freizeitstätte Lübars

Die Website der Freizeitstätte Lübars als Next-/Vinext-Projekt.

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

Vor einer Veröffentlichung:

```bash
npm run lint
npm run build
```

Eine ausführliche Anleitung für die Veröffentlichung auf STRATO steht in
[STRATO_DEPLOYMENT.md](./STRATO_DEPLOYMENT.md).

Alternativ kann die Website weiterhin über Sites veröffentlicht werden.
