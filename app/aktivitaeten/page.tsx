import type { Metadata } from 'next';
import Image from 'next/image';
import { activities } from './data';

export const metadata: Metadata = {
  title: 'Alle Aktivitäten | Freizeitstätte Lübars',
  description: 'Alle Gruppen und Angebote der Freizeitstätte Lübars im Überblick.',
};

const ActivitiesPage = () => (
  <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Freizeitstätte Lübars – Startseite">
        <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
      </a>
      <nav aria-label="Hauptnavigation">
        <a href="/#wochenplan">Wochenplan</a>
        <a href="/#ueber-uns">Über uns</a>
        <a className="nav-contact" href="/#kontakt">Kontakt</a>
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
          <a className="activity-card" href={`/aktivitaeten/${slug}`} key={slug}>
            <span className={`activity-mark ${tone}`} aria-hidden="true">{short}</span>
            <small className="activity-category">{category}</small>
            <h2>{title}</h2>
            <p>{summary}</p>
            <span className="activity-link">Mehr erfahren <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </main>
    <footer className="subpage-footer"><span>© 2026 Freizeitstätte Lübars</span><span><a href="/dokumente">Dokumente</a> · <a href="/impressum">Impressum</a> · <a href="/">Zur Startseite</a></span></footer>
  </>
);

export default ActivitiesPage;
