import React from 'react';
import Link from 'next/link';
import { SERVICES, TAGLINE, CONTACT_EMAIL } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 pt-89 pb-89">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-black font-heading text-2xl tracking-tight leading-none"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d4ff, #9d4edd, #ff006e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                }}
              >
                Opti
              </span>
              <span style={{ color: '#ffffff', display: 'inline' }}>Flow</span>
            </Link>
            <p className="text-white/60 font-medium">{TAGLINE}</p>
            <div className="mt-4">
              <p className="text-sm text-white/50 mb-2">Founders:</p>
              <p className="text-sm text-white/80 font-medium">Arafath Al Adnan</p>
              <p className="text-sm text-white/80 font-medium">Imran Rony</p>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.id} href={s.path} className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                {s.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Company</h4>
            <Link href="/portfolio" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">Portfolio</Link>
            <Link href="/team" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">Team</Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">About</Link>
            <Link href="/blog" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">Blog</Link>
            <Link href="/faq" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">FAQ</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Contact</h4>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4 mt-4">
              {/* Social Icons Placeholder */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066ff] hover:text-white transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-89 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} OptiFlow. All rights reserved.</p>
          <div className="flex items-center gap-21">
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">Terms</Link>
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
