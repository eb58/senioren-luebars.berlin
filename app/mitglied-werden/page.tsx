import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mitglied werden | Freizeitstätte Lübars',
  description: 'So werden Sie Mitglied im Seniorenclub Lübars: Ablauf, Beiträge und der Antrag auf Mitgliedschaft zum Herunterladen.',
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const steps = [
  { title: 'Vorbeikommen und kennenlernen', text: 'Schauen Sie unverbindlich in einer Gruppe oder beim Clubabend am Donnerstag ab 16:30 Uhr vorbei. Gäste sind jederzeit herzlich willkommen.' },
  { title: 'Antrag herunterladen und ausfüllen', text: 'Füllen Sie den Antrag auf Mitgliedschaft gut leserlich in Druckschrift aus und kreuzen Sie die Gruppen an, die Sie besuchen möchten. Für die Mitgliedskarte genügt ein einfaches Foto – ein Passbild ist nicht nötig.' },
  { title: 'Antrag abgeben', text: 'Geben Sie den unterschriebenen Antrag persönlich in der Freizeitstätte ab oder senden Sie ihn per Post an: Seniorenclub Lübars, Am Vierrutenberg 2, 13469 Berlin.' },
  { title: 'Beitrag überweisen', text: 'Nach Eingang des Jahresbeitrags erhalten Sie Ihre gültige Mitgliedskarte. Die Karte wird jedes Jahr nach der Beitragszahlung neu ausgestellt.' },
];

const fees = [
  ['Mitgliedsbeitrag', '30,00 € / Jahr'],
  ['Computerbeitrag (nur für Computergruppen)', '20,00 € / Jahr'],
];

const siblingClubs = [
  { name: 'Freizeitzentrum Adelheidallee', address: 'Adelheidallee 5–7, 13507 Berlin', phone: '(030) 433 40 03', tel: '+49304334003', offer: 'Tischtennis, Tanz, Malerei, Theater, Wanderungen, Restaurant', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105099.php' },
  { name: 'Hermsdorfer Seniorenfüchse', address: 'Berliner Straße 105–107, 13467 Berlin', phone: '(030) 404 40 28', tel: '+49304044028', offer: 'Skat, Bridge, Chor, Gymnastik, Wanderungen, Fahrradtouren', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105105.php' },
  { name: 'Freizeitclub Tegel', address: 'Alt-Tegel 43, 13507 Berlin', phone: '(030) 433 12 02', tel: '+49304331202', offer: 'Bingo, Rommé, Yoga, Handarbeit, Kegeln, Englisch, Tanz', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105110.php' },
  { name: 'Freizeitstätte Am Schäfersee', address: 'Stargardtstraße 3, 13407 Berlin', phone: '(030) 455 99 88', tel: '+49304559988', offer: 'Bingo, Englisch, Gedächtnistraining, Gymnastik, Schach, Ausflüge', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105144.php' },
  { name: 'Seniorenfreizeitstätte Heiligensee', address: 'Alt-Heiligensee 39, 13503 Berlin', phone: '(030) 431 29 39', tel: '+49304312939', offer: 'Kartenspiele, Computerkurse, Englisch, Line Dance, Walking, Basteln', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105149.php' },
  { name: 'Club der Lebensfrohen', address: 'Wilhelmsruher Damm 142 c, 13439 Berlin', phone: '(030) 902 94 38 68', tel: '+4930902943868', offer: 'Spiele- und Bastelgruppe, Gymnastik, Bingo, Tanz, Gedächtnistraining', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105181.php' },
  { name: 'Märkischer Seniorentreff', address: 'Senftenberger Ring 34 a, 13435 Berlin', phone: '(030) 31 95 31 44', tel: '+493031953144', offer: 'Kartenspiele, Gymnastik, Basteln, Bingo, Tanznachmittage, Tagesfahrten', url: 'https://www.berlin.de/ba-reinickendorf/service/einrichtungen/seniorenfreizeitstaetten/artikel.105189.php' },
  { name: 'Aussiedlerberatung Reinickendorf', address: 'Auguste-Viktoria-Allee 50 a, 13403 Berlin', phone: '(030) 41 20 25 97', tel: '+493041202597', offer: 'Chor, Tanzgruppen, Gymnastik, Billard, Herrenclub, Deutschkurse – Beratung und Gruppen auch auf Russisch', url: 'https://www.berlin.de/ba-reinickendorf/auf-einen-blick/fuer-seniorinnen/aussiedlerberatung/artikel.1502384.php' },
];

const MembershipPage = () => (
  <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Freizeitstätte Lübars – Startseite">
        <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
      </Link>
      <nav aria-label="Hauptnavigation">
        <Link href="/aktivitaeten">Aktivitäten</Link>
        <Link href="/dokumente">Dokumente</Link>
        <Link href="/impressum">Impressum</Link>
        <Link className="nav-contact" href="/#kontakt">Kontakt</Link>
      </nav>
    </header>

    <main className="legal-page" id="main">
      <section className="legal-hero">
        <Link className="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</Link>
        <p className="eyebrow">Teil der Gemeinschaft werden</p>
        <h1>Mitglied werden</h1>
        <p>Als Mitglied nutzen Sie alle Gruppen und Angebote der Freizeitstätte – vom Tischtennis über die Computerkurse bis zu Ausflügen und Clubabenden. In vier Schritten sind Sie dabei.</p>
      </section>

      <div className="detail-content">
        <div className="detail-copy">
          <h2>So einfach geht es.</h2>
          <ol className="step-list">
            {steps.map(({ title, text }, index) => (
              <li key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>

          <h3>Beiträge</h3>
          <dl className="fee-list">
            {fees.map(([label, amount]) => (
              <div key={label}><dt>{label}</dt><dd>{amount}</dd></div>
            ))}
          </dl>
          <h3>In ganz Reinickendorf willkommen</h3>
          <p>Ihre Mitgliedskarte gilt bezirksweit: Damit besuchen Sie auch die anderen Seniorenfreizeitstätten in Reinickendorf und deren Gruppen – ganz ohne zusätzlichen Beitrag. Rufen Sie dort am besten kurz vorher an.</p>
          <ul className="club-grid">
            {siblingClubs.map(({ name, address, phone, tel, offer, url }) => (
              <li key={name}>
                <strong><a href={url} target="_blank" rel="noreferrer">{name} <Arrow /></a></strong>
                <span>{address}</span>
                <span>{offer}</span>
                <a className="club-phone" href={`tel:${tel}`}>{phone}</a>
              </li>
            ))}
          </ul>

          <h3>Noch Fragen?</h3>
          <p>Rufen Sie uns einfach an unter <a className="text-link" href="tel:+49304024485">(030) 402 44 85</a> oder schreiben Sie an <a className="text-link" href="mailto:vorstand@senioren-luebars.berlin">vorstand@senioren-luebars.berlin</a>. Wir helfen auch gerne beim Ausfüllen des Antrags.</p>
        </div>

        <aside className="meeting-card">
          <p className="eyebrow light">Antrag auf Mitgliedschaft</p>
          <h2>Formular herunterladen</h2>
          <a className="button button-light" href="/dokumente/mitgliedsantrag.pdf" target="_blank" rel="noreferrer" download>Antrag als PDF <Arrow /></a>
          <small>Ausdrucken, ausfüllen, unterschreiben und bei uns abgeben. Ohne Drucker? Wir halten den Antrag auch in der Freizeitstätte für Sie bereit.</small>
          <p><span>Adresse</span><strong>Am Vierrutenberg 2<br />13469 Berlin</strong></p>
          <p><span>Telefon</span><strong>(030) 402 44 85</strong></p>
        </aside>
      </div>
    </main>

    <footer className="subpage-footer">
      <span>© 2026 Freizeitstätte Lübars</span>
      <span><Link href="/dokumente">Dokumente</Link> · <Link href="/">Zur Startseite</Link></span>
    </footer>
  </>
);

export default MembershipPage;
