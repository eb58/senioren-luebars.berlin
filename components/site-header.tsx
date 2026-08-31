'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export type SiteHeaderLink = {
  href: string;
  label: string;
  contact?: boolean;
};

type SiteHeaderProps = {
  brandHref?: string;
  links: readonly SiteHeaderLink[];
};

const SiteHeader = ({ brandHref = '/', links }: SiteHeaderProps) => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <Link className="brand" href={brandHref} aria-label="Freizeitstätte Lübars – Startseite">
        <Image src="/logo.jpg" alt="Freizeitstätte Lübars" width={436} height={68} priority />
      </Link>
      <button
        className={open ? 'menu-toggle is-open' : 'menu-toggle'}
        type="button"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(value => !value)}
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>
      <nav
        className={open ? 'main-navigation is-open' : 'main-navigation'}
        id="main-navigation"
        aria-label="Hauptnavigation"
      >
        {links.map(({ href, label, contact }) => (
          <Link className={contact ? 'nav-contact' : undefined} href={href} onClick={() => setOpen(false)} key={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
