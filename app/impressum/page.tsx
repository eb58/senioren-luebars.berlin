import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Impressum | Freizeitstätte Lübars',
  description: 'Impressum und rechtliche Hinweise der Freizeitstätte Lübars.',
};

const ImpressumPage = () => (
  <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <SiteHeader links={[
      { href: '/aktivitaeten', label: 'Aktivitäten' },
      { href: '/dokumente', label: 'Dokumente' },
      { href: '/#kontakt', label: 'Kontakt', contact: true },
    ]} />

    <main className="legal-page" id="main">
      <section className="legal-hero">
        <Link className="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</Link>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Impressum</h1>
        <p>Informationen über den Anbieter dieser Website und die inhaltliche Verantwortung.</p>
      </section>

      <div className="legal-grid">
        <section className="legal-section legal-contact-card">
          <p className="eyebrow">Angaben gemäß § 5 DDG</p>
          <h2>Senioren-Freizeitclub Lübars</h2>
          <address>Am Vierrutenberg 2<br />13469 Berlin</address>
          <p>Verein ohne Rechtspersönlichkeit (nicht eingetragener Verein)</p>
          <dl>
            <div><dt>Telefon</dt><dd><a href="tel:+49304024485">(030) 402 44 85</a></dd></div>
            <div><dt>Telefax</dt><dd>(030) 402 08 826</dd></div>
            <div><dt>E-Mail</dt><dd><a href="mailto:vorstand@senioren-luebars.berlin">vorstand@senioren-luebars.berlin</a></dd></div>
          </dl>
        </section>

        <section className="legal-section legal-responsibility">
          <p className="eyebrow">Verantwortlich nach § 18 Abs. 2 MStV</p>
          <h2>Vorstand</h2>
          <address>Am Vierrutenberg 2<br />13469 Berlin</address>
          <p>Datenschutz: siehe <Link className="text-link" href="/datenschutz">Datenschutzerklärung</Link>.</p>
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
      <span><Link href="/datenschutz">Datenschutz</Link> · <Link href="/dokumente">Dokumente</Link> · <Link href="/">Zur Startseite</Link></span>
    </footer>
  </>
);

export default ImpressumPage;
