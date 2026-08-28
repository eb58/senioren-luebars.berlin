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
          <p className="section-note">Bankverbindung: Senioren-Freizeitclub Lübars · IBAN DE73 1008 0000 0734 7923 01</p>

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
