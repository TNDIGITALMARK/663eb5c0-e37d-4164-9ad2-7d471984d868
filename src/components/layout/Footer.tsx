'use client';

import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border-[1.5px] border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
                <span className="font-serif text-sm font-light">AS</span>
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-light">
                AURORA & SAGE
              </span>
            </div>
            <p className="text-sm opacity-90 max-w-md leading-relaxed mb-6">
              Where storytelling meets style. Discover literary works and fashion designs from a unified creative vision.
            </p>
            <div className="w-16 h-px bg-white/30"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-semibold mb-6 uppercase opacity-90">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/books" className="opacity-85 hover:opacity-100 transition-all duration-300 inline-block hover:translate-x-1">Books</Link></li>
              <li><Link href="/fashion" className="opacity-85 hover:opacity-100 transition-all duration-300 inline-block hover:translate-x-1">Fashion</Link></li>
              <li><Link href="/about" className="opacity-85 hover:opacity-100 transition-all duration-300 inline-block hover:translate-x-1">About</Link></li>
              <li><Link href="/blog" className="opacity-85 hover:opacity-100 transition-all duration-300 inline-block hover:translate-x-1">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-semibold mb-6 uppercase opacity-90">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Instagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Twitter size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Facebook size={22} />
              </a>
            </div>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border border-white/30 px-4 py-2.5 text-sm focus:border-white transition-all duration-300 focus:bg-white/5"
              />
              <button type="submit" className="btn-primary bg-white text-black hover:bg-white/90 border-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-80">
          <p>&copy; {new Date().getFullYear()} Aurora & Sage. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
