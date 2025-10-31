'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'BOOKS', href: '/books' },
    { label: 'FASHION', href: '/fashion' },
    { label: 'ABOUT', href: '/about' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--header-footer-bg))', color: 'hsl(var(--header-footer-text))', borderColor: 'hsl(var(--header-footer-border))' }}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-all duration-300">
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

          {/* Navigation */}
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
          <button className="md:hidden hover:opacity-70 transition-opacity" style={{ color: 'hsl(var(--header-footer-text))' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
