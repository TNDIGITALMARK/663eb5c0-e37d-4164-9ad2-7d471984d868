'use client';

import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-white flex items-center justify-center">
                <span className="font-serif text-sm font-light">AS</span>
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-light">
                AURORA & SAGE
              </span>
            </div>
            <p className="text-sm opacity-70 max-w-md">
              Where storytelling meets style. Discover literary works and fashion designs from a unified creative vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/books" className="opacity-70 hover:opacity-100 transition-opacity">Books</Link></li>
              <li><Link href="/fashion" className="opacity-70 hover:opacity-100 transition-opacity">Fashion</Link></li>
              <li><Link href="/about" className="opacity-70 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 uppercase">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
            </div>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white/30 px-4 py-2 text-sm focus:border-white transition-colors"
              />
              <button type="submit" className="btn-primary bg-white text-black hover:bg-white/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>&copy; {new Date().getFullYear()} Aurora & Sage. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
