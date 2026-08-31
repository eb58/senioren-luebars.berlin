import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Dokumente | Freizeitstätte Lübars',
  description: 'Mitgliedsantrag, Wahlordnung, Hausordnung, Rahmensatzung und Leitfaden der Freizeitstätte Lübars.',
};

const documents = [
  { title: 'Mitgliedsantrag', description: 'Antrag auf Mitgliedschaft im Seniorenclub Lübars – so werden Sie Mitglied.', file: 'mitgliedsantrag.pdf' },
  { title: 'Wahlordnung', description: 'Regelungen zur Durchführung von Wahlen.', file: 'wahlordnung.pdf' },
  { title: 'Hausordnung', description: 'Regeln für ein gutes Miteinander in der Freizeitstätte.', file: 'hausordnung.pdf' },
  { title: 'Rahmensatzung', description: 'Grundlagen für Organisation und Zusammenarbeit.', file: 'rahmensatzung.pdf' },
  { title: 'Leitfaden für die Zusammenarbeit', description: 'Leitfaden für Gruppenleitungen und Vorstand.', file: 'leitfaden-zusammenarbeit.pdf' },
];

const DocumentsPage = () => (
  <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <SiteHeader links={[
      { href: '/aktivitaeten', label: 'Aktivitäten' },
      { href: '/impressum', label: 'Impressum' },
      { href: '/#kontakt', label: 'Kontakt', contact: true },
    ]} />

    <main className="documents-page" id="main">
      <section className="documents-hero">
        <Link className="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</Link>
        <p className="eyebrow">Zum Nachlesen</p>
        <h1>Dokumente</h1>
        <p>Hier finden Sie die wichtigsten Ordnungen und Grundlagen der Freizeitstätte als PDF. Wie Sie Mitglied werden, erfahren Sie auf der Seite <Link className="text-link" href="/mitglied-werden">Mitglied werden</Link>.</p>
      </section>

      <section className="document-list" aria-label="Dokumente zum Herunterladen">
        {documents.map(({ title, description, file }, index) => (
          <a className="document-card" href={`/dokumente/${file}`} target="_blank" rel="noreferrer" key={file}>
            <span className="document-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="document-copy"><strong>{title}</strong><small>{description}</small></span>
            <span className="document-type">PDF</span>
            <span className="document-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </section>
    </main>

    <footer className="subpage-footer">
      <span>© 2026 Freizeitstätte Lübars</span>
      <span><Link href="/impressum">Impressum</Link> · <Link href="/">Zur Startseite</Link></span>
    </footer>
  </>
);

export default DocumentsPage;
