import Image from 'next/image';

const activities = [
  { short: 'KR', title: 'Kreativ', text: 'Gemeinsam gestalten, handarbeiten und neue Ideen ausprobieren.', tone: 'coral' },
  { short: 'SP', title: 'Sport & Bewegung', text: 'Gymnastik, Tischtennis, Wandern und Fahrradtouren.', tone: 'green' },
  { short: 'PC', title: 'Computer & Smartphone', text: 'Von Grundlagen über Excel bis Linux, Video und iPhone.', tone: 'blue' },
  { short: 'KA', title: 'Karten & Schach', text: 'In geselliger Runde spielen, lernen und mitfiebern.', tone: 'gold' },
  { short: 'EN', title: 'Englisch', text: 'Sprachkenntnisse auffrischen und gemeinsam üben.', tone: 'violet' },
  { short: 'GE', title: 'Gesprächskreise', text: 'Aktuelles austauschen und Technikfragen miteinander lösen.', tone: 'mint' },
];

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
      ['13:30–16:00', 'Kreativ-, Handarbeits- & Bastelgruppe'],
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
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Freizeitstätte Lübars – Startseite">
          <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#aktivitaeten">Aktivitäten</a>
          <a href="#wochenplan">Wochenplan</a>
          <a href="#ueber-uns">Über uns</a>
          <a className="nav-contact" href="#kontakt">Kontakt</a>
        </nav>
      </header>

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
            <Image src="/kaffee-kuchen.jpg" alt="Kaffee und Kuchen beim gemütlichen Beisammensein" fill sizes="(max-width: 800px) 100vw, 48vw" priority />
            <div className="hero-card"><strong>Einfach vorbeikommen</strong><span>Gäste sind herzlich willkommen.</span></div>
          </div>
        </section>

        <section className="quick-links" aria-label="Schnellzugriff">
          <a href="#wochenplan"><span className="quick-icon" aria-hidden="true">🗓</span><span><strong>Was ist heute los?</strong><small>Zum aktuellen Wochenplan</small></span><Arrow /></a>
          <a href="#kontakt"><span className="quick-icon" aria-hidden="true">⌖</span><span><strong>So finden Sie uns</strong><small>Am Vierrutenberg 2</small></span><Arrow /></a>
          <a href="tel:+49304024485"><span className="quick-icon" aria-hidden="true">☎</span><span><strong>Direkt anrufen</strong><small>(030) 402 44 85</small></span><Arrow /></a>
        </section>

        <section className="section activities" id="aktivitaeten">
          <SectionIntro label="Vielseitig & gesellig" title="Für jeden ist etwas dabei." text="Bewegung, Technik, Kreativität oder einfach gute Gespräche – unsere Gruppen freuen sich über bekannte und neue Gesichter." />
          <div className="activity-grid">
            {activities.map(({ short, title, text, tone }) => (
              <article className="activity-card" key={title}>
                <span className={`activity-mark ${tone}`} aria-hidden="true">{short}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="section-note">Noch mehr bei uns: Videogruppe, Radtouren, Smartphone-Treff und gemeinsame Ausflüge.</p>
        </section>

        <section className="feature-band">
          <div className="feature-image">
            <Image src="/bus.jpg" alt="Reisebus für einen gemeinsamen Ausflug" fill sizes="(max-width: 850px) 100vw, 50vw" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow light">Gemeinsam unterwegs</p>
            <h2>Raus aus dem Alltag, rein ins Erlebnis.</h2>
            <p>Unsere Tagesfahrten, Wanderungen und Fahrradtouren bringen Abwechslung und neue Eindrücke – am liebsten in guter Gesellschaft.</p>
            <a className="text-link" href="#kontakt">Nach dem nächsten Ausflug fragen <Arrow /></a>
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
            <dl className="facts">
              <div><dt>1975</dt><dd>Freizeitstätte gegründet</dd></div>
              <div><dt>1995</dt><dd>Computerclub gestartet</dd></div>
              <div><dt>55+</dt><dd>offen für Junggebliebene</dd></div>
            </dl>
          </div>
          <figure className="story-image">
            <Image src="/clubhaus.png" alt="Das Clubhaus der Freizeitstätte Lübars am Vierrutenberg" fill sizes="(max-width: 850px) 100vw, 48vw" />
            <figcaption>Unser Treffpunkt am Vierrutenberg</figcaption>
          </figure>
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
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} />
          <p>Der Treffpunkt für alle ab 55 in Berlin-Lübars.</p>
        </div>
        <div><strong>Besuchen</strong><a href="#aktivitaeten">Aktivitäten</a><a href="#wochenplan">Wochenplan</a><a href="#ueber-uns">Über uns</a></div>
        <div><strong>Kontakt</strong><a href="tel:+49304024485">(030) 402 44 85</a><a href="mailto:vorstand@senioren-luebars.berlin">E-Mail schreiben</a><a href="#impressum">Impressum</a></div>
        <div className="footer-bottom" id="impressum">
          <span>© 2026 Freizeitstätte Lübars</span>
          <span>Verantwortlich: Vorstand · Am Vierrutenberg 2 · 13469 Berlin</span>
          <a href="https://senioren-luebars.berlin/datenschutzerklaerung/" target="_blank" rel="noreferrer">Datenschutz <Arrow /></a>
        </div>
      </footer>
    </>
  );
}
