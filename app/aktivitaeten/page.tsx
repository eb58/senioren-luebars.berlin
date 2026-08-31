import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import { activities } from './data';

export const metadata: Metadata = {
  title: 'Alle Aktivitäten | Freizeitstätte Lübars',
  description: 'Alle Gruppen und Angebote der Freizeitstätte Lübars im Überblick.',
};

const ActivitiesPage = () => (
  <>
    <SiteHeader links={[
      { href: '/#wochenplan', label: 'Wochenplan' },
      { href: '/#ueber-uns', label: 'Über uns' },
      { href: '/dokumente', label: 'Dokumente' },
      { href: '/#kontakt', label: 'Kontakt', contact: true },
    ]} />
    <main className="activity-overview">
      <div className="subpage-title">
        <p className="eyebrow">Alle Gruppen im Überblick</p>
        <h1>Gemeinsam entdecken,<br />lernen und aktiv bleiben.</h1>
        <p>Wählen Sie eine Gruppe aus, um Termine und weitere Informationen zu sehen.</p>
      </div>
      <div className="activity-grid all-activities">
        {activities.map(({ slug, icon, title, summary, tone, category }) => (
          <Link className="activity-card" href={`/aktivitaeten/${slug}`} key={slug}>
            <span className={`activity-mark ${tone}`} aria-hidden="true">{icon}</span>
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
