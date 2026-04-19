'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image
            src="/logo.png"
            alt="Kinekt"
            width={40}
            height={40}
            className="navbar-logo-img"
          />
          <div>
            <div className="navbar-logo-text">Kinekt Research</div>
            <div className="navbar-logo-sub">Free Finance Learning</div>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? '\u2715' : '\u2630'}
        </button>

        <ul id="primary-navigation" className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link href="/library" onClick={() => setIsMenuOpen(false)}>Library</Link></li>
          <li><Link href="/path/fundamental" onClick={() => setIsMenuOpen(false)}>Paths</Link></li>
        </ul>
      </div>
    </nav>
  );
}
