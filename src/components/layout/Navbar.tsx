'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 font-black font-heading text-2xl md:text-3xl tracking-tight leading-none"
          style={{ display: 'inline-flex', alignItems: 'center' }}
          onClick={() => setIsMobileMenuOpen(false)}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-21">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname === '/' ? 'text-white' : 'text-white/70'}`}>Home</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname.includes('/services') ? 'text-white' : 'text-white/70'}`}>
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {/* Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 w-[240px] ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-[#0a0e27] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                {SERVICES.map((service) => (
                  <Link 
                    key={service.id} 
                    href={service.path}
                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname.includes('/portfolio') ? 'text-white' : 'text-white/70'}`}>Portfolio</Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname.includes('/about') ? 'text-white' : 'text-white/70'}`}>About</Link>
          <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname.includes('/blog') ? 'text-white' : 'text-white/70'}`}>Blog</Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${pathname.includes('/contact') ? 'text-white' : 'text-white/70'}`}>Contact</Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Button href="/get-started" size="sm" variant="primary">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-[100%] left-0 right-0 bg-[#0a0e27] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}>
        <div className="px-6 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium text-white/50">Services</span>
            <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
              {SERVICES.map((s) => (
                <Link key={s.id} href={s.path} className="text-white/80" onClick={() => setIsMobileMenuOpen(false)}>{s.name}</Link>
              ))}
            </div>
          </div>

          <Link href="/portfolio" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/blog" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="pt-89 border-t border-white/10">
            <Button href="/get-started" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
