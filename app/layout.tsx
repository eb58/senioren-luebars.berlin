import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://senioren-luebars.berlin'),
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  title: 'Freizeitstätte Lübars | Gemeinsam aktiv ab 55',
  description: 'Die Freizeitstätte Lübars ist der Treffpunkt für alle ab 55: mit Sport, Computergruppen, Kreativangeboten, Ausflügen und Clubabenden.',
  openGraph: {
    title: 'Freizeitstätte Lübars | Gemeinsam aktiv ab 55',
    description: 'Der Treffpunkt für alle ab 55 in Berlin-Lübars – aktiv, vielseitig und in guter Gemeinschaft.',
    url: '/',
    siteName: 'Freizeitstätte Lübars',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Freizeitstätte Lübars – Gemeinsam aktiv ab 55' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freizeitstätte Lübars | Gemeinsam aktiv ab 55',
    description: 'Der Treffpunkt für alle ab 55 in Berlin-Lübars.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
