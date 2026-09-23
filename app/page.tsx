import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import { activities } from './aktivitaeten/data';

const schedule = [
  {
    day: 'Montag',
    events: [
      ['09:00–13:00', 'Tischtennis I'],
      ['09:30–10:30', 'Gymnastik'],
      ['11:00–13:00', 'Computer: Excel'],
      ['14:00–17:00', 'Kartenspiel'],
    ],
  },
  {
    day: 'Dienstag',
    events: [
      ['09:30–12:00', 'Computer: Videoschnitt'],
      ['11:00–16:00', 'Tischtennis II'],
      ['12:00–14:00', 'Gesprächskreis Aktuelles (1. + 3. Di.)'],
      ['12:30–15:30', 'Gesprächskreis Smartphone (2. + 4. Di.)'],
      ['16:00–18:00', 'Computer: Linux'],
    ],
  },
  {
    day: 'Mittwoch',
    events: [
      ['09:00–12:00', 'Tischtennis III'],
      ['10:00–12:00', 'Englisch'],
      ['12:00–14:00', 'Computer I: Windows & Software'],
      ['14:00–16:00', 'Computer II: PC-Probleme'],
    ],
  },
  {
    day: 'Donnerstag',
    events: [
      ['09:00–13:00', 'Tischtennis I'],
      ['10:00–12:00', 'Computer: Publisher (2. + 4. Do.)'],
      ['13:30–16:00', 'Kreativgruppe'],
      ['16:30–19:00', 'Clubabend'],
    ],
  },
  {
    day: 'Freitag',
    events: [
      ['10:00–12:00', 'Computer: Grundlagen'],
      ['13:30–17:00', 'Wandergruppe (außen)'],
      ['14:30–18:00', 'Schach'],
    ],
  },
  {
    day: 'Samstag',
    events: [
      ['10:00–12:45', 'Gesprächskreis iPhone/iPad (1. Sa.)'],
      ['10:00–16:00', 'Skatturnier (2. Sa.)'],
      ['14:00–16:00', 'Treffen der Zeitlosen (3. Sa.)'],
    ],
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

const navigation = [
  { href: '#aktuelles', label: 'Aktuelles' },
  { href: '#aktivitaeten', label: 'Aktivitäten' },
  { href: '#wochenplan', label: 'Wochenplan' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '/dokumente', label: 'Dokumente' },
  { href: '#kontakt', label: 'Kontakt', contact: true },
] as const;

const SectionIntro = ({ label, title, text }: { label: string; title: string; text?: string }) => (
  <div className="section-intro">
    <p className="eyebrow">{label}</p>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <SiteHeader brandHref="#start" links={navigation} />

      <main id="main">
        <section className="hero" id="start">
          <div className="hero-copy">
            <p className="eyebrow">Freizeitstätte Lübars · seit 1975</p>
            <h1>Gemeinsam aktiv.<br />Mitten in Lübars.</h1>
            <p className="hero-lead">Der Treffpunkt für alle ab 55, die Neues entdecken, aktiv bleiben und eine lebendige Gemeinschaft erleben möchten.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#wochenplan">Wochenplan ansehen <Arrow /></a>
              <a className="button button-ghost" href="#aktivitaeten">Aktivitäten entdecken</a>
            </div>
            <div className="hero-fact"><span className="status-dot" /> Clubabend jeden Donnerstag ab 16:30 Uhr</div>
          </div>
          <div className="hero-image">
            <Image src="/clubhaus.jpg" alt="Das Clubhaus der Freizeitstätte Lübars am Vierrutenberg" fill sizes="(max-width: 800px) 100vw, 48vw" priority />
            <div className="hero-card"><strong>Einfach vorbeikommen</strong><span>Gäste sind herzlich willkommen.</span></div>
          </div>
        </section>

        <section className="quick-links" aria-label="Schnellzugriff">
          <a href="#wochenplan"><span className="quick-icon" aria-hidden="true">🗓</span><span><strong>Was ist heute los?</strong><small>Zum aktuellen Wochenplan</small></span><Arrow /></a>
          <a href="#kontakt"><span className="quick-icon" aria-hidden="true">⌖</span><span><strong>So finden Sie uns</strong><small>Am Vierrutenberg 2</small></span><Arrow /></a>
          <a href="tel:+49304024485"><span className="quick-icon" aria-hidden="true">☎</span><span><strong>Direkt anrufen</strong><small>(030) 402 44 85</small></span><Arrow /></a>
        </section>

        <section className="section news-section" id="aktuelles" aria-labelledby="aktuelles-title">
          <div className="section-intro">
            <p className="eyebrow">Neuigkeiten & Termine</p>
            <h2 id="aktuelles-title">Aktuelles</h2>
            <p>Besondere Angebote und gemeinsame Unternehmungen in unserer Freizeitstätte.</p>
          </div>
          <div className="news-list">
            <article className="trip-announcement trip-recap" aria-labelledby="warnemuende-recap-title">
              <div className="trip-recap-image">
                <Image src="/ausfluege/warnemuende-2026/18.jpg" alt="Gruppenfoto beim Ausflug nach Warnemünde" fill sizes="(max-width: 850px) 260px, 190px" />
              </div>
              <div className="trip-copy">
                <p className="eyebrow">Rückblick · Gemeinsam unterwegs</p>
                <h3 id="warnemuende-recap-title">Unser Ausflug nach Warnemünde</h3>
                <p>Am 8. September waren wir mit dem Bus an der Ostsee unterwegs. Lesen Sie den Bericht und sehen Sie alle Fotos vom Tag.</p>
              </div>
              <div className="news-actions">
                <Link className="button button-primary" href="/ausfluege/warnemuende">Bericht & Fotos ansehen <Arrow /></Link>
              </div>
            </article>
            <article className="trip-announcement" aria-labelledby="eisbeinessen-title">
              <time className="trip-date" dateTime="2026-10-14T16:00">Mittwoch<strong>14. Oktober</strong>2026</time>
              <div className="trip-copy">
                <p className="eyebrow">Gemeinsam genießen</p>
                <h3 id="eisbeinessen-title">Eisbeinessen in der Freizeitstätte</h3>
                <p>Am Mittwoch, 14. Oktober, um 16:00 Uhr laden wir zum gemeinsamen Eisbeinessen ein.</p>
                <p>Mischke aus Pankow liefert uns das Essen.</p>
              </div>
              <div className="news-actions">
                <a className="button button-primary" href="tel:+49304024485">Weitere Informationen <Arrow /></a>
              </div>
            </article>
            <article className="trip-announcement" aria-labelledby="smartphone-title">
              <time className="trip-date" dateTime="2026-11-02">Montag<strong>2. November</strong>2026</time>
              <div className="trip-copy">
                <p className="eyebrow">Eine Stunde für Ihr Anliegen</p>
                <h3 id="smartphone-title">Smartphone-Sprechstunde</h3>
                <p>Fragen zum Smartphone? Wir nehmen uns Zeit für Sie. Gemeinsam schauen wir uns in Ruhe an, wo es hakt, und analysieren die Probleme.</p>
                <p>Bitte buchen Sie Ihren Termin vorab – am besten direkt im Büro der Freizeitstätte oder telefonisch unter (030) 402 44 85.</p>
              </div>
              <div className="news-actions">
                <a className="button button-primary" href="tel:+49304024485">Termin telefonisch buchen <Arrow /></a>
                <a className="button button-ghost" href="/dokumente/smartphone-sprechstunde.pdf" target="_blank" rel="noreferrer">Flyer öffnen (PDF) <Arrow /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="section activities" id="aktivitaeten">
          <SectionIntro label="Vielseitig & gesellig" title="Für jeden ist etwas dabei." text="Bewegung, Technik, Kreativität oder einfach gute Gespräche – unsere Gruppen freuen sich über bekannte und neue Gesichter." />
          <div className="activity-grid">
            {activities.map(({ slug, icon, title, imageAlt, summary, tone, category }) => (
              <Link className="activity-card" href={`/aktivitaeten/${slug}`} key={slug}>
                <span className="activity-card-image">
                  <Image src={`/activities/${slug}.jpg`} alt={imageAlt} fill sizes="(max-width: 520px) 100vw, (max-width: 850px) 50vw, 33vw" />
                  <span className={`activity-mark ${tone}`} aria-hidden="true">{icon}</span>
                </span>
                <div className="activity-card-copy">
                  <small className="activity-category">{category}</small>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <span className="activity-link">Mehr erfahren <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
          <Link className="all-groups-link" href="/aktivitaeten">Alle Gruppen auf einer Seite <Arrow /></Link>
        </section>

        <section className="feature-band">
          <div className="feature-image">
            <Image src="/bus.jpg" alt="Reisebus für einen gemeinsamen Ausflug" fill sizes="(max-width: 850px) 100vw, 50vw" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow light">Gemeinsam unterwegs</p>
            <h2>Raus aus dem Alltag, rein ins Erlebnis.</h2>
            <p>Unsere Tagesfahrten, Wanderungen und Fahrradtouren bringen Abwechslung und neue Eindrücke – am liebsten in guter Gesellschaft.</p>
            <Link className="text-link" href="/ausfluege/warnemuende">Rückblick: Ausflug nach Warnemünde <Arrow /></Link>
          </div>
        </section>

        <section className="section schedule-section" id="wochenplan">
          <SectionIntro label="Unser Wochenplan" title="Was ist wann?" text="Ein fester Rhythmus gibt Orientierung. Bei Interesse genügt ein kurzer Anruf – oder Sie schauen einfach vorbei." />
          <div className="schedule-meta">
            <span>Stand: 25. Februar 2026</span>
            <a href="/wochenplan.jpg" target="_blank">Originalplan öffnen <Arrow /></a>
          </div>
          <div className="schedule-grid">
            {schedule.map(({ day, events }) => (
              <article className="day-card" key={day}>
                <h3>{day}</h3>
                <ul>
                  {events.map(([time, title]) => (
                    <li key={`${time}-${title}`}><time>{time}</time><span>{title}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="club-callout">
            <span className="callout-day">Donnerstag</span>
            <div><strong>Clubabend · 16:30 Uhr</strong><p>Austausch, Vorträge, Reiseberichte und ein gutes Miteinander. Gäste und neue Mitglieder sind willkommen.</p></div>
            <a className="button button-light" href="#kontakt">Dabei sein</a>
          </div>
        </section>

        <section className="story" id="ueber-uns">
          <div className="story-copy">
            <SectionIntro label="Über uns" title="Ein kleiner Ort mit viel Gemeinschaft." />
            <p>Seit 1975 gibt es unsere Freizeitstätte in Berlin-Lübars. Unser Seniorencomputerclub – einer der ersten in Berlin – wurde 1995 ins Leben gerufen.</p>
            <p>In unseren gemütlichen Clubräumen gehen Menschen im Seniorenalter gemeinsamen Interessen nach, lernen Neues oder genießen einfach Gesellschaft. Was zählt, sind Neugier, gegenseitige Unterstützung und Freude am Miteinander.</p>
            <figure className="club-sign">
              <Image src="/treffpunkt.jpg" alt="Schild „Treffpunkt für die ältere Generation – Freizeitclub Lübars“" width={599} height={324} />
            </figure>
            <dl className="facts">
              <div><dt>1975</dt><dd>Freizeitstätte gegründet</dd></div>
              <div><dt>1995</dt><dd>Computerclub gestartet</dd></div>
              <div><dt>55+</dt><dd>offen für Junggebliebene</dd></div>
            </dl>
          </div>
          <figure className="story-image">
            <Image src="/kaffee-kuchen.jpg" alt="Heißgetränk mit Sahne und Gebäck auf einem Cafétisch" fill sizes="(max-width: 850px) 100vw, 48vw" />
            <figcaption>Kaffee und Kuchen in gemütlicher Runde</figcaption>
          </figure>
        </section>

        <section className="section first-visit" id="erster-besuch">
          <SectionIntro label="Zum ersten Mal bei uns?" title="Kommen Sie uns kennenlernen." text="Sie müssen noch niemanden kennen. Ob Sie eine Gruppe ausprobieren oder beim Clubabend ins Gespräch kommen möchten: Gäste sind herzlich willkommen." />
          <div className="first-visit-grid">
            <div>
              <h3>Muss ich mich vorher anmelden?</h3>
              <p>Zum Clubabend am Donnerstag ab 16:30 Uhr können Sie einfach vorbeikommen. Wenn Sie eine bestimmte Gruppe kennenlernen möchten, rufen Sie uns am besten vorher kurz an.</p>
            </div>
            <div>
              <h3>Kann ich auch allein kommen?</h3>
              <p>Natürlich. Kommen Sie gern allein und lernen Sie die anderen in Ruhe kennen. Sie brauchen niemanden mitzubringen.</p>
            </div>
            <div>
              <h3>An wen wende ich mich vor Ort?</h3>
              <p>Sagen Sie bei Ihrer Ankunft einfach, dass Sie zum ersten Mal da sind. Wir helfen Ihnen, die passende Gruppe und Ihre Ansprechperson zu finden.</p>
            </div>
            <div>
              <h3>Was kostet das Kennenlernen?</h3>
              <p>Sie können uns zunächst kostenlos und unverbindlich kennenlernen. Wenn es Ihnen bei uns gefällt, erfahren Sie auf der Seite „Mitglied werden“ alles zu den Beiträgen.</p>
            </div>
          </div>
          <div className="first-visit-actions">
            <a className="button button-primary" href="tel:+49304024485">Anrufen: (030) 402 44 85 <Arrow /></a>
            <Link className="button button-ghost" href="/mitglied-werden">Mehr zur Mitgliedschaft <Arrow /></Link>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div>
            <p className="eyebrow light">Kontakt & Anfahrt</p>
            <h2>Wir freuen uns auf Sie.</h2>
            <p>Rufen Sie uns an, schreiben Sie eine E-Mail oder kommen Sie zu einer passenden Gruppe vorbei.</p>
          </div>
          <div className="contact-grid">
            <a href="https://www.google.com/maps/search/?api=1&query=Am+Vierrutenberg+2%2C+13469+Berlin" target="_blank" rel="noreferrer">
              <span>Adresse</span><strong>Am Vierrutenberg 2<br />13469 Berlin</strong><small>Bus 222 · Haltestelle vor der Tür</small><Arrow />
            </a>
            <a href="tel:+49304024485"><span>Telefon</span><strong>(030) 402 44 85</strong><small>Rufen Sie uns gerne an</small><Arrow /></a>
            <a href="mailto:vorstand@senioren-luebars.berlin"><span>E-Mail</span><strong>vorstand@<br />senioren-luebars.berlin</strong><small>Nachricht schreiben</small><Arrow /></a>
          </div>
          <Link className="contact-cta" href="/mitglied-werden">
            <span><strong>Mitglied werden</strong><small>Ablauf, Beiträge und der Antrag auf Mitgliedschaft zum Herunterladen.</small></span>
            <span className="button button-light">So geht&rsquo;s <Arrow /></span>
          </Link>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Image src="/logo-hq.jpg" alt="Freizeitstätte Lübars" width={1059} height={165} />
          <p>Der Treffpunkt für alle ab 55 in Berlin-Lübars.</p>
        </div>
        <div><strong>Besuchen</strong><a href="#aktivitaeten">Aktivitäten</a><a href="#wochenplan">Wochenplan</a><a href="#ueber-uns">Über uns</a><Link href="/dokumente">Dokumente</Link></div>
        <div><strong>Kontakt</strong><Link href="/mitglied-werden">Mitglied werden</Link><a href="tel:+49304024485">(030) 402 44 85</a><a href="mailto:vorstand@senioren-luebars.berlin">E-Mail schreiben</a><Link href="/impressum">Impressum</Link></div>
        <div className="footer-bottom">
          <span>© 2026 Freizeitstätte Lübars</span>
          <span>Verantwortlich: Vorstand · Am Vierrutenberg 2 · 13469 Berlin</span>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </footer>
    </>
  );
}
