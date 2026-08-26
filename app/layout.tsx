import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freizeitstätte Lübars | Gemeinsam aktiv ab 55',
  description: 'Die Freizeitstätte Lübars ist der Treffpunkt für alle ab 55: mit Sport, Computergruppen, Kreativangeboten, Ausflügen und Clubabenden.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
