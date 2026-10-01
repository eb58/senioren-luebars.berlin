import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const output = resolve(dist, 'client');
const read = path => readFile(resolve(root, path), 'utf8');
const escapeHtml = value =>
  String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const write = async (path, content) => {
  const target = resolve(output, path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content);
};

const activities = JSON.parse(await read('src/data/activities.json'));
const basePath = '/website';
const htmlRoutes = new Set([
  '/aktivitaeten',
  '/ausfluege/warnemuende',
  '/datenschutz',
  '/dokumente',
  '/impressum',
  '/mitglied-werden',
  ...activities.map(({ slug }) => `/aktivitaeten/${slug}`),
]);
const publicUrl = value => {
  const [path, suffix = ''] = value.split(/(?=[?#])/);
  if (path === '/') return `${basePath}/${suffix}`;
  return `${basePath}${path}${htmlRoutes.has(path) ? '.html' : ''}${suffix}`;
};
const rewritePublicUrls = html =>
  html.replace(/(href|src)="(\/[^\"]*)"/g, (_, attribute, value) => `${attribute}="${publicUrl(value)}"`);
const arrow = '<span aria-hidden="true">↗</span>';
const defaultLinks = [
  ['/#aktuelles', 'Aktuelles'],
  ['/#aktivitaeten', 'Aktivitäten'],
  ['/#wochenplan', 'Wochenplan'],
  ['/#ueber-uns', 'Über uns'],
  ['/dokumente', 'Dokumente'],
  ['/#kontakt', 'Kontakt', true],
];

const header = (links = defaultLinks, brandHref = '/') => `
<header class="site-header">
  <a class="brand" href="${brandHref}" aria-label="Freizeitstätte Lübars – Startseite"><img src="/logo-hq.jpg" alt="Freizeitstätte Lübars" width="1059" height="165"></a>
  <button class="menu-toggle" type="button" aria-label="Menü öffnen" aria-expanded="false" aria-controls="main-navigation"><span class="menu-toggle-bar"></span><span class="menu-toggle-bar"></span><span class="menu-toggle-bar"></span></button>
  <nav class="main-navigation" id="main-navigation" aria-label="Hauptnavigation">${links.map(([href, label, contact]) => `<a${contact ? ' class="nav-contact"' : ''} href="${href}">${label}</a>`).join('')}</nav>
</header>`;
const subpageFooter = () =>
  '<footer class="subpage-footer"><span>© 2026 Freizeitstätte Lübars</span><span><a href="/dokumente">Dokumente</a> · <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="/">Zur Startseite</a></span></footer>';
const homeFooter = () =>
  `<footer><div class="footer-brand"><img src="/logo-hq.jpg" alt="Freizeitstätte Lübars" width="1059" height="165"><p>Der Treffpunkt für alle ab 55 in Berlin-Lübars.</p></div><div><strong>Besuchen</strong><a href="#aktivitaeten">Aktivitäten</a><a href="#wochenplan">Wochenplan</a><a href="#ueber-uns">Über uns</a><a href="/dokumente">Dokumente</a></div><div><strong>Kontakt</strong><a href="/mitglied-werden">Mitglied werden</a><a href="tel:+49304024485">(030) 402 44 85</a><a href="mailto:vorstand@senioren-luebars.berlin">E-Mail schreiben</a><a href="/impressum">Impressum</a></div><div class="footer-bottom"><span>© 2026 Freizeitstätte Lübars</span><a href="/datenschutz">Datenschutz</a></div></footer>`;

const document = ({ title, description, body, image = '/og.png' }) => rewritePublicUrls(`<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
<meta property="og:type" content="website"><meta property="og:locale" content="de_DE"><meta property="og:site_name" content="Freizeitstätte Lübars">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:image" content="https://senioren-luebars.berlin${publicUrl(image)}">
<meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/styles.css"><script src="/menu.js" defer></script>
</head><body>${body}</body></html>`);

const activityOverview = () => `<main id="main" class="activity-overview">
  <div class="subpage-title"><a class="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</a><p class="eyebrow">Unser Programm</p><h1>Alle Aktivitäten</h1><p>Entdecken Sie unsere Gruppen und finden Sie das Angebot, das zu Ihnen passt.</p></div>
  <div class="activity-grid all-activities">${activities
    .map(
      activity => `
    <a class="activity-card" href="/aktivitaeten/${activity.slug}">
      <div class="activity-card-image"><img src="/activities/${activity.slug}.jpg" alt="${escapeHtml(activity.imageAlt)}" loading="lazy"><span class="activity-mark ${activity.tone}" aria-hidden="true">${activity.icon}</span></div>
      <div class="activity-card-copy"><span>${escapeHtml(activity.category)}</span><h2>${escapeHtml(activity.title)}</h2><p>${escapeHtml(activity.summary)}</p><strong>Mehr erfahren ${arrow}</strong></div>
    </a>`,
    )
    .join('')}</div>
</main>`;

const pages = [
  {
    path: 'index.html',
    source: 'home',
    title: 'Freizeitstätte Lübars | Gemeinsam aktiv ab 55',
    description:
      'Die Freizeitstätte Lübars ist der Treffpunkt für alle ab 55: mit Sport, Computergruppen, Kreativangeboten, Ausflügen und Clubabenden.',
    links: [
      ['#aktuelles', 'Aktuelles'],
      ['#aktivitaeten', 'Aktivitäten'],
      ['#wochenplan', 'Wochenplan'],
      ['#ueber-uns', 'Über uns'],
      ['/dokumente', 'Dokumente'],
      ['#kontakt', 'Kontakt', true],
    ],
    brandHref: '#start',
    footer: homeFooter,
  },
  {
    path: 'mitglied-werden.html',
    source: 'membership',
    title: 'Mitglied werden | Freizeitstätte Lübars',
    description: 'So werden Sie Mitglied in der Freizeitstätte Lübars.',
    footer: subpageFooter,
  },
  {
    path: 'dokumente.html',
    source: 'documents',
    title: 'Dokumente | Freizeitstätte Lübars',
    description: 'Wichtige Dokumente der Freizeitstätte Lübars als PDF.',
    footer: subpageFooter,
  },
  {
    path: 'impressum.html',
    source: 'imprint',
    title: 'Impressum | Freizeitstätte Lübars',
    description: 'Impressum und rechtliche Hinweise der Freizeitstätte Lübars.',
    footer: subpageFooter,
  },
  {
    path: 'datenschutz.html',
    source: 'privacy',
    title: 'Datenschutz | Freizeitstätte Lübars',
    description: 'Datenschutzerklärung der Freizeitstätte Lübars.',
    footer: subpageFooter,
  },
  {
    path: 'ausfluege/warnemuende.html',
    source: 'tripWarnemuende',
    title: 'Ausflug nach Warnemünde | Freizeitstätte Lübars',
    description: 'Bericht und Fotos vom gemeinsamen Busausflug nach Warnemünde am 8. September 2026.',
    image: '/ausfluege/warnemuende-2026/01.jpg',
    footer: subpageFooter,
  },
];

const build = async () => {
  await rm(dist, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(resolve(root, 'public'), output, { recursive: true });
  await cp(resolve(root, 'src/styles.css'), resolve(output, 'styles.css'));
  await cp(resolve(root, 'src/menu.js'), resolve(output, 'menu.js'));

  for (const page of pages) {
    const main = await read(`src/pages/${page.source}.html`);
    const body = `<a class="skip-link" href="#main">Zum Inhalt springen</a>${header(page.links, page.brandHref)}${main}${page.footer()}`;
    await write(page.path, document({ ...page, body }));
  }

  const activityLinks = [
    ['/aktivitaeten', 'Alle Aktivitäten'],
    ['/#wochenplan', 'Wochenplan'],
    ['/dokumente', 'Dokumente'],
    ['/#kontakt', 'Kontakt', true],
  ];
  const overviewBody = `<a class="skip-link" href="#main">Zum Inhalt springen</a>${header()}${activityOverview()}${subpageFooter()}`;
  await write(
  'aktivitaeten.html',
    document({
      title: 'Aktivitäten | Freizeitstätte Lübars',
      description: 'Alle Gruppen und Aktivitäten der Freizeitstätte Lübars im Überblick.',
      body: overviewBody,
    }),
  );

  for (const [index, activity] of activities.entries()) {
    const next = activities[(index + 1) % activities.length];
    const body = `<a class="skip-link" href="#main">Zum Inhalt springen</a>${header(activityLinks)}${activityDetail(activity, next)}${subpageFooter()}`;
    await write(
      `aktivitaeten/${activity.slug}.html`,
      document({
        title: `${activity.title} | Freizeitstätte Lübars`,
        description: activity.summary,
        image: `/activities/${activity.slug}.jpg`,
        body,
      }),
    );
  }

  const notFoundBody = `${header()}<main id="main" class="legal-page"><section class="legal-hero"><p class="eyebrow">Fehler 404</p><h1>Seite nicht gefunden</h1><p><a class="button button-primary" href="/">Zur Startseite</a></p></section></main>${subpageFooter()}`;
  await write(
    '404.html',
    document({
      title: 'Seite nicht gefunden | Freizeitstätte Lübars',
      description: 'Die angeforderte Seite wurde nicht gefunden.',
      body: notFoundBody,
    }),
  );
  console.log(`Statischer Build fertig: ${pages.length + activities.length + 2} HTML-Seiten in dist/client.`);
};

const activityDetail = (activity, next) => `<main id="main" class="activity-detail">
  <section class="detail-hero detail-${activity.tone}">
    <div><a class="back-link" href="/aktivitaeten"><span aria-hidden="true">←</span> Alle Aktivitäten</a><p class="eyebrow">${escapeHtml(activity.category)}</p><h1>${escapeHtml(activity.title)}</h1><p>${escapeHtml(activity.intro)}</p></div>
    <div class="detail-image"><img src="/activities/${activity.slug}.jpg" alt="${escapeHtml(activity.imageAlt)}"><span class="detail-image-mark ${activity.tone}" aria-hidden="true">${activity.icon}</span></div>
  </section>
  <section class="detail-content">
    <div class="detail-copy"><p class="eyebrow">Über die Gruppe</p><h2>Gemeinsam macht es mehr Freude.</h2>${activity.details.map(text => `<p>${escapeHtml(text)}</p>`).join('')}<h3>Das erwartet Sie</h3><ul class="topic-list">${activity.topics.map(topic => `<li>${escapeHtml(topic)}</li>`).join('')}</ul></div>
    <aside class="meeting-card"><p class="eyebrow">Termin</p><dl class="meeting-times">${activity.meeting.map(([label, time]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(time)}</dd></div>`).join('')}</dl>${activity.leader ? `<p><span>Gruppenleitung</span><strong>${escapeHtml(activity.leader)}</strong></p>` : ''}<p><span>Ort</span><strong>Am Vierrutenberg 2<br>13469 Berlin</strong></p><a class="button button-primary" href="/#kontakt">Interesse anmelden ${arrow}</a><small>Bitte fragen Sie vor dem ersten Besuch kurz nach, ob der Termin wie geplant stattfindet.</small></aside>
  </section>
  <a class="next-activity" href="/aktivitaeten/${next.slug}"><span>Nächste Gruppe</span><strong>${escapeHtml(next.title)}</strong><span aria-hidden="true">→</span></a>
</main>`;

await build();
