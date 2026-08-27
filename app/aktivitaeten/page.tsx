import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { activities } from './data';

export const metadata: Metadata = {
  title: 'Alle Aktivitäten | Freizeitstätte Lübars',
  description: 'Alle Gruppen und Angebote der Freizeitstätte Lübars im Überblick.',
};

const ActivitiesPage = () => (
  <>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Freizeitstätte Lübars – Startseite">
        <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
      </Link>
      <nav aria-label="Hauptnavigation">
        <Link href="/#wochenplan">Wochenplan</Link>
        <Link href="/#ueber-uns">Über uns</Link>
        <Link className="nav-contact" href="/#kontakt">Kontakt</Link>
      </nav>
    </header>
    <main className="activity-overview">
      <div className="subpage-title">
        <p className="eyebrow">Alle Gruppen im Überblick</p>
        <h1>Gemeinsam entdecken,<br />lernen und aktiv bleiben.</h1>
        <p>Wählen Sie eine Gruppe aus, um Termine und weitere Informationen zu sehen.</p>
      </div>
      <div className="activity-grid all-activities">
        {activities.map(({ slug, short, title, summary, tone, category }) => (
          <Link className="activity-card" href={`/aktivitaeten/${slug}`} key={slug}>
            <span className={`activity-mark ${tone}`} aria-hidden="true">{short}</span>
            <small className="activity-category">{category}</small>
            <h2>{title}</h2>
            <p>{summary}</p>
            <span className="activity-link">Mehr erfahren <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
    </main>
    <footer className="subpage-footer"><span>© 2026 Freizeitstätte Lübars</span><span><Link href="/dokumente">Dokumente</Link> · <Link href="/impressum">Impressum</Link> · <Link href="/">Zur Startseite</Link></span></footer>
  </>
);

export default ActivitiesPage;
