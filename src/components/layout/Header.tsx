'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'BOOKS', href: '/books' },
    { label: 'FASHION', href: '/fashion' },
    { label: 'ABOUT', href: '/about' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--header-footer-bg))', color: 'hsl(var(--header-footer-text))', borderColor: 'hsl(var(--header-footer-border))' }}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-all duration-300 relative z-[60]">
              <div className="flex items-center">
                {/* Monogram Icon - Simple AS design */}
                <div className="w-9 h-9 border-[1.5px] flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white" style={{ borderColor: 'hsl(var(--header-footer-text))' }}>
                  <span className="font-serif text-sm font-light">AS</span>
                </div>
                <span className="ml-3 font-serif text-lg tracking-[0.2em] font-light">
                  AURORA & SAGE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-xs tracking-[0.2em] font-medium transition-all duration-300 relative
                    hover:opacity-100
                    ${pathname === link.href ? 'opacity-100' : 'opacity-70'}
                    before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[1px] before:bg-[hsl(var(--header-footer-text))]
                    before:transition-all before:duration-300
                    hover:before:w-full
                    ${pathname === link.href ? 'before:w-full' : ''}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:opacity-70 transition-opacity relative z-[60]"
              style={{ color: 'hsl(var(--header-footer-text))' }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: 'hsl(var(--header-footer-bg))',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Mobile Navigation */}
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-2xl font-serif tracking-[0.15em] font-light transition-all duration-300 relative
                hover:opacity-100
                ${pathname === link.href ? 'opacity-100' : 'opacity-70'}
                ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{
                color: 'hsl(var(--header-footer-text))',
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-[1px]" style={{ backgroundColor: 'hsl(var(--header-footer-text))' }} />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
