import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import { activities, getActivity } from '../data';

type ActivityPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => activities.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: ActivityPageProps): Promise<Metadata> => {
  const activity = getActivity((await params).slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | Freizeitstätte Lübars`,
    description: activity.summary,
    openGraph: { title: `${activity.title} | Freizeitstätte Lübars`, description: activity.summary, images: [] },
    twitter: { title: `${activity.title} | Freizeitstätte Lübars`, description: activity.summary, images: [] },
  };
};

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const activity = getActivity((await params).slug);
  if (!activity) notFound();
  const index = activities.findIndex(({ slug }) => slug === activity.slug);
  const next = activities[(index + 1) % activities.length];

  return (
    <>
      <SiteHeader links={[
        { href: '/aktivitaeten', label: 'Alle Aktivitäten' },
        { href: '/#wochenplan', label: 'Wochenplan' },
        { href: '/dokumente', label: 'Dokumente' },
        { href: '/#kontakt', label: 'Kontakt', contact: true },
      ]} />
      <main className="activity-detail">
        <section className={`detail-hero detail-${activity.tone}`}>
          <div>
            <Link className="back-link" href="/aktivitaeten"><span aria-hidden="true">←</span> Alle Aktivitäten</Link>
            <p className="eyebrow">{activity.category}</p>
            <h1>{activity.title}</h1>
            <p>{activity.intro}</p>
          </div>
          <span className={`detail-mark ${activity.tone}`} aria-hidden="true">{activity.icon}</span>
        </section>
        <section className="detail-content">
          <div className="detail-copy">
            <p className="eyebrow">Über die Gruppe</p>
            <h2>Gemeinsam macht es mehr Freude.</h2>
            {activity.details.map(text => <p key={text}>{text}</p>)}
            <h3>Das erwartet Sie</h3>
            <ul className="topic-list">{activity.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          </div>
          <aside className="meeting-card">
            <p className="eyebrow">Termin</p>
            <dl className="meeting-times">
              {activity.meeting.map(([label, time]) => <div key={label}><dt>{label}</dt><dd>{time}</dd></div>)}
            </dl>
            {activity.leader && <p><span>Gruppenleitung</span><strong>{activity.leader}</strong></p>}
            <p><span>Ort</span><strong>Am Vierrutenberg 2<br />13469 Berlin</strong></p>
            <Link className="button button-primary" href="/#kontakt">Interesse anmelden <span aria-hidden="true">↗</span></Link>
            <small>Bitte fragen Sie vor dem ersten Besuch kurz nach, ob der Termin wie geplant stattfindet.</small>
          </aside>
        </section>
        <Link className="next-activity" href={`/aktivitaeten/${next.slug}`}>
          <span>Nächste Gruppe</span><strong>{next.title}</strong><span aria-hidden="true">→</span>
        </Link>
      </main>
      <footer className="subpage-footer"><span>© 2026 Freizeitstätte Lübars</span><span><Link href="/dokumente">Dokumente</Link> · <Link href="/impressum">Impressum</Link> · <Link href="/">Zur Startseite</Link></span></footer>
    </>
  );
};

export default ActivityPage;
