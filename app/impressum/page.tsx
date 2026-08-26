import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Impressum | Freizeitstätte Lübars',
  description: 'Impressum und rechtliche Hinweise der Freizeitstätte Lübars.',
};

const ImpressumPage = () => (
  <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Freizeitstätte Lübars – Startseite">
        <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
      </a>
      <nav aria-label="Hauptnavigation">
        <a href="/aktivitaeten">Aktivitäten</a>
        <a href="/dokumente">Dokumente</a>
        <a className="nav-contact" href="/#kontakt">Kontakt</a>
      </nav>
    </header>

    <main className="legal-page" id="main">
      <section className="legal-hero">
        <a className="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</a>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Impressum</h1>
        <p>Informationen über den Anbieter dieser Website und die inhaltliche Verantwortung.</p>
      </section>

      <div className="legal-grid">
        <section className="legal-section legal-contact-card">
          <p className="eyebrow">Angaben gemäß § 5 DDG</p>
          <h2>Freizeitstätte Lübars</h2>
          <address>Am Vierrutenberg 2<br />13469 Berlin</address>
          <dl>
            <div><dt>Telefon</dt><dd><a href="tel:+49304024485">(030) 402 44 85</a></dd></div>
            <div><dt>Telefax</dt><dd>(030) 402 08 826</dd></div>
            <div><dt>E-Mail</dt><dd><a href="mailto:vorstand@senioren-luebars.berlin">vorstand@senioren-luebars.berlin</a></dd></div>
          </dl>
        </section>

        <section className="legal-section legal-responsibility">
          <p className="eyebrow">Inhaltlich verantwortlich</p>
          <h2>Der Vorstand</h2>
          <address>Am Vierrutenberg 2<br />13469 Berlin</address>
        </section>

        <section className="legal-section legal-wide">
          <h2>Haftung für Inhalte</h2>
          <p>Wir erstellen die Inhalte dieser Website mit großer Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität können wir dennoch keine Gewähr übernehmen. Gesetzliche Verpflichtungen zur Entfernung oder Sperrung von Informationen bleiben unberührt. Sobald uns eine konkrete Rechtsverletzung bekannt wird, entfernen wir die betreffenden Inhalte.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Haftung für Links</h2>
          <p>Diese Website kann Links zu externen Angeboten enthalten. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist der jeweilige Anbieter. Bei Bekanntwerden einer Rechtsverletzung entfernen wir den betreffenden Link.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Urheberrecht</h2>
          <p>Die von uns erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der gesetzlichen Grenzen bedarf der Zustimmung des jeweiligen Rechteinhabers. Hinweise auf mögliche Rechtsverletzungen nehmen wir gerne per E-Mail entgegen.</p>
        </section>
      </div>
    </main>

    <footer className="subpage-footer">
      <span>© 2026 Freizeitstätte Lübars</span>
      <span><a href="/dokumente">Dokumente</a> · <a href="/">Zur Startseite</a></span>
    </footer>
  </>
);

export default ImpressumPage;
