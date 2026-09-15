import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Ausflug nach Warnemünde | Freizeitstätte Lübars',
  description: 'Bericht und Fotos vom gemeinsamen Busausflug nach Warnemünde am 8. September 2026.',
  openGraph: { title: 'Ausflug nach Warnemünde | Freizeitstätte Lübars', description: 'Bericht und Fotos vom gemeinsamen Busausflug nach Warnemünde am 8. September 2026.', images: [{ url: '/ausfluege/warnemuende-2026/01.jpg', alt: 'Gruppe beim Stadtrundgang in Warnemünde' }] },
};

const photos = [
  { file: '01.jpg', alt: 'Im Reisebus auf der Fahrt nach Warnemünde' },
  { file: '02.jpg', alt: 'Vor dem Heimatmuseum in Warnemünde' },
  { file: '03.jpg', alt: 'Die Entenskulptur am Alten Strom' },
  { file: '04.jpg', alt: 'Ein Teil der Gruppe beim Stadtrundgang' },
  { file: '05.jpg', alt: 'Die größere Gruppe beim Stadtrundgang' },
  { file: '06.jpg', alt: 'Vor dem Edvard-Munch-Haus' },
  { file: '07.jpg', alt: 'Die Gruppe an der Straßenecke am Alten Strom' },
  { file: '08.jpg', alt: 'Ein Sandskulpturen-Künstler bei der Arbeit' },
  { file: '09.jpg', alt: 'Der Alte Strom mit Liebesschlössern und Kreuzfahrtschiff im Hintergrund' },
  { file: '10.jpg', alt: 'Blick auf das Hafenbecken mit Kreuzfahrtschiff' },
  { file: '11.jpg', alt: 'Das Kreuzfahrtschiff aus der Nähe' },
  { file: '12.jpg', alt: 'Fischkutter und Ausflugsboote am Alten Strom' },
  { file: '13.jpg', alt: 'Das Restaurant Herberts am Alten Strom' },
  { file: '14.jpg', alt: 'Die Gruppe vor dem Restaurant Herberts' },
  { file: '15.jpg', alt: 'Die Gruppe vor dem Restaurant Herberts, weitere Ansicht' },
  { file: '16.jpg', alt: 'Zander mit Kartoffelstampf, serviert im Restaurant Herberts' },
  { file: '17.jpg', alt: 'Spaziergang durch die Gassen von Warnemünde' },
  { file: '18.jpg', alt: 'Gemeinsames Foto in der Fußgängerzone' },
  { file: '19.jpg', alt: 'Auf dem Weg zum Leuchtturm' },
  { file: '20.jpg', alt: 'Der Leuchtturm von Warnemünde' },
  { file: '21.jpg', alt: 'Das Teepott-Gebäude am Strand von Warnemünde' },
];

const WarnemuendePage = () => (
  <>
    <SiteHeader links={[
      { href: '/#aktuelles', label: 'Aktuelles' },
      { href: '/#wochenplan', label: 'Wochenplan' },
      { href: '/dokumente', label: 'Dokumente' },
      { href: '/#kontakt', label: 'Kontakt', contact: true },
    ]} />
    <main className="trip-report">
      <section className="legal-hero">
        <Link className="back-link" href="/#aktuelles"><span aria-hidden="true">←</span> Zurück zur Startseite</Link>
        <p className="eyebrow">Rückblick · Gemeinsam unterwegs</p>
        <h1>Unser Ausflug nach Warnemünde</h1>
        <p>Am Dienstag, 8. September 2026, waren wir mit dem Busunternehmen Mein Reisebus gemeinsam an der Ostsee unterwegs.</p>
      </section>

      <section className="trip-report-text">
        <h2>Ankunft und Stadtrundgang</h2>
        <p>Um 8 Uhr morgens starteten wir frohen Mutes und trafen gegen 11.15 Uhr in Warnemünde ein. Vor Ort teilten wir uns für einen Stadtrundgang in zwei Gruppen zu jeweils etwa 25 Personen auf – eine Gruppe wählte die kürzere, die andere die etwas längere Strecke. So bekam jeder die Gelegenheit, die Schönheiten der Stadt in seinem eigenen Tempo zu genießen.</p>

        <h2>Mittagessen bei Herberts</h2>
        <p>Zum Mittagessen kehrten wir im Lokal Herberts ein. Auf der Karte standen unter anderem leckerer Zander und Rindsroulade, und auch das vegetarische Gericht kam sehr gut an – alle waren mit ihrem Essen zufrieden.</p>

        <h2>Freie Zeit am Alten Strom</h2>
        <p>Anschließend blieben rund zwei Stunden Freizeit, die jeder nach eigenem Wunsch verbringen konnte. Manche nutzten die Zeit für einen weiteren Stadtspaziergang, andere beobachteten die ein- und auslaufenden Schiffe im Hafen, und wer mochte, konnte einen schönen Spaziergang am Strand unternehmen.</p>

        <h2>Kaffee und Kuchen im Hotel Neptun</h2>
        <p>Zum Abschluss des Tages ging es noch einmal ins Hotel Neptun zu Kaffee und Kuchen. Dabei gab es zunächst ein kleines Missverständnis: Wir gingen davon aus, einen reservierten Platz im Aussichtsrestaurant im 19. Stock zu haben, und fuhren geschlossen dorthin – dort stellte sich jedoch heraus, dass für uns kein Tisch vorgesehen war. Nach Klärung mit dem Hotelmanager zeigte sich, dass unsere Reservierung tatsächlich für ein Lokal im ersten Stock galt. Auch von dort hatten wir aber einen schönen Blick aufs Meer und verbrachten eine gemütliche Kaffeezeit. Bei der Bezahlung gab es zudem kurzzeitig Unklarheiten aufgrund von Kommunikationsproblemen zwischen dem Hotel und dem Busunternehmen, die aber vor Ort mit dem Busunternehmen geklärt werden konnten.</p>
      </section>

      <section className="trip-gallery-section">
        <div className="section-intro">
          <p className="eyebrow">Impressionen</p>
          <h2>Der Tag in Bildern</h2>
        </div>
        <div className="trip-gallery">
          {photos.map(({ file, alt }) => (
            <figure className="trip-gallery-item" key={file}>
              <Image src={`/ausfluege/warnemuende-2026/${file}`} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
      </section>
    </main>
    <footer className="subpage-footer"><span>© 2026 Freizeitstätte Lübars</span><span><Link href="/dokumente">Dokumente</Link> · <Link href="/impressum">Impressum</Link> · <Link href="/datenschutz">Datenschutz</Link> · <Link href="/">Zur Startseite</Link></span></footer>
  </>
);

export default WarnemuendePage;
