import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Datenschutz | Freizeitstätte Lübars',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf der Website der Freizeitstätte Lübars.',
};

const DatenschutzPage = () => (
  <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <SiteHeader links={[
      { href: '/aktivitaeten', label: 'Aktivitäten' },
      { href: '/impressum', label: 'Impressum' },
      { href: '/#kontakt', label: 'Kontakt', contact: true },
    ]} />

    <main className="legal-page" id="main">
      <section className="legal-hero">
        <Link className="back-link" href="/"><span aria-hidden="true">←</span> Zur Startseite</Link>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Datenschutz</h1>
        <p>Wie wir mit personenbezogenen Daten umgehen, wenn Sie diese Website besuchen oder uns kontaktieren.</p>
      </section>

      <div className="legal-grid">
        <section className="legal-section legal-contact-card">
          <p className="eyebrow">Verantwortlicher im Sinne der DSGVO</p>
          <h2>Freizeitstätte Lübars</h2>
          <address>Erich Brandl<br />Am Vierrutenberg 2<br />13469 Berlin</address>
          <dl>
            <div><dt>Telefon</dt><dd><a href="tel:+49304024485">(030) 402 44 85</a></dd></div>
            <div><dt>E-Mail</dt><dd><a href="mailto:vorstand@senioren-luebars.berlin">vorstand@senioren-luebars.berlin</a></dd></div>
          </dl>
        </section>

        <section className="legal-section legal-responsibility">
          <p className="eyebrow">Kurz gesagt</p>
          <h2>Keine Tracker</h2>
          <p>Diese Website setzt keine Cookies, nutzt keine Analyse- oder Werbedienste, bindet keine externen Schriften ein und erstellt keine Nutzerprofile.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Aufruf der Website (Server-Logfiles)</h2>
          <p>Die Website wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. Beim Aufruf speichert der Server automatisch Daten in Logfiles: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Referrer sowie Browser- und Betriebssystemtyp. Das ist technisch nötig, um die Seite auszuliefern und den Betrieb sicher und stabil zu halten. Rechtsgrundlage ist unser berechtigtes Interesse an einem funktionsfähigen Internetauftritt (Art. 6 Abs. 1 lit. f DSGVO). Die Logdaten werden nach 7 Tagen gelöscht. Mit der STRATO GmbH besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO; STRATO setzt dabei die IONOS SE, Elgendorfer Str. 7, 56410 Montabaur, als Unterauftragsverarbeiter ein.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Kontaktaufnahme</h2>
          <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für Anschlussfragen dazu. Rechtsgrundlage ist unser berechtigtes Interesse an der Beantwortung (Art. 6 Abs. 1 lit. f DSGVO), bei Anliegen rund um eine Mitgliedschaft zusätzlich Art. 6 Abs. 1 lit. b DSGVO. Die Daten löschen wir, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Domain</h2>
          <p>Für die Registrierung der Domain senioren-luebars.berlin werden die Daten des Domaininhabers (Name, Anschrift, E-Mail-Adresse) an die zuständige Vergabestelle übermittelt und dort im Rahmen der gesetzlichen Vorgaben gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Externe Links</h2>
          <p>Die Website enthält Links zu externen Angeboten, etwa zu Google Maps für die Anfahrt oder zu Seiten des Bezirksamts Reinickendorf. Erst mit dem Klick auf einen solchen Link werden Daten an den jeweiligen Anbieter übertragen; dann gelten dessen Datenschutzbestimmungen. Auf diese Verarbeitung haben wir keinen Einfluss.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie auf Datenübertragbarkeit. Verarbeitungen, die auf unserem berechtigten Interesse beruhen, können Sie widersprechen. Wenden Sie sich dafür an die oben genannten Kontaktdaten. Außerdem können Sie sich bei einer Aufsichtsbehörde beschweren, etwa bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.</p>
        </section>

        <section className="legal-section legal-wide">
          <h2>Stand und Änderungen</h2>
          <p>Diese Datenschutzerklärung hat den Stand August 2026. Ändern sich Website oder Rechtslage, passen wir sie an.</p>
        </section>
      </div>
    </main>

    <footer className="subpage-footer">
      <span>© 2026 Freizeitstätte Lübars</span>
      <span><Link href="/impressum">Impressum</Link> · <Link href="/dokumente">Dokumente</Link> · <Link href="/">Zur Startseite</Link></span>
    </footer>
  </>
);

export default DatenschutzPage;
