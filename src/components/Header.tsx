'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, Menu, X, ArrowUpRight, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/data/content';

interface HeaderProps {
  onOpenJoin: () => void;
  onOpenContact: () => void;
}

export default function Header({ onOpenJoin, onOpenContact }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isBn = language === 'bn';

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Bar */}
      <div className="bg-[#000A3C] text-[#C9D2EA] text-xs py-2 px-4 sm:px-8 border-b border-[#0A1A55]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="sk-status-dot"></span>
              <span className="font-semibold text-white tracking-wide">
                {isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}
              </span>
            </div>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-gray-300">
              {isBn
                ? 'কুষ্টিয়ার উদ্যোক্তাদের ঐক্যবদ্ধ প্ল্যাটফর্ম'
                : 'Empowering Innovators & Founders across Kushtia'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#48E2E7] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#48E2E7] transition-colors text-[#48E2E7] font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isBn ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#0A1A55] border border-[#1e293b] rounded-full p-0.5 ml-1">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  isBn
                    ? 'bg-[#48E2E7] text-[#000A3C] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  !isBn
                    ? 'bg-[#48E2E7] text-[#000A3C] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b border-[#E2E7F1] transition-shadow ${
          isScrolled ? 'shadow-md py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#000A3C] flex items-center justify-center border-2 border-[#0C4DEB] shadow-md group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting dots logo mark */}
                <circle cx="9" cy="9" r="4" fill="#48E2E7" />
                <circle cx="23" cy="9" r="3.5" fill="#0C4DEB" />
                <circle cx="16" cy="23" r="4" fill="#48E2E7" />
                <line x1="9" y1="9" x2="23" y2="9" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="9" y1="9" x2="16" y2="23" stroke="#48E2E7" strokeWidth="2.2" />
                <line x1="23" y1="9" x2="16" y2="23" stroke="#0C4DEB" strokeWidth="2.2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#000A3C] font-display flex items-center gap-1.5 leading-none">
                Startup <span className="text-[#0C4DEB]">Kushtia</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#6B7591] font-semibold uppercase mt-0.5">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#444E69]">
            <a href="#audience" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'কাদের জন্য' : 'Who It’s For'}
            </a>
            <a href="#pillars" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'আমরা যা করি' : 'What We Do'}
            </a>
            <a href="#directory" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'ডিরেক্টরি' : 'Directory'}
            </a>
            <a href="#ambassadors" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'ক্যাম্পাস অ্যাম্বাসেডর' : 'Ambassadors'}
            </a>
            <a href="#values" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'মূল্যবোধ' : 'Values'}
            </a>
            <a href="#team" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'টিম' : 'Team'}
            </a>
            <a href="#faq" className="hover:text-[#0C4DEB] transition-colors">
              {isBn ? 'প্রশ্নোত্তর' : 'FAQ'}
            </a>

            {/* Pill Highlight Link */}
            <a
              href="#directory"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#48E2E7] text-[#000A3C] font-bold text-xs shadow-sm hover:translate-x-0.5 transition-transform"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{isBn ? 'কমিউনিটি' : 'Community'}</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-[#000A3C] border border-[#E2E7F1] hover:bg-[#F5F7FC] transition-colors"
            >
              {isBn ? 'যোগাযোগ' : 'Contact'}
            </button>
            <button
              type="button"
              onClick={onOpenJoin}
              className="px-5 py-2.5 rounded-xl bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold text-sm btn-hard flex items-center gap-1.5"
            >
              <span>{isBn ? 'কমিউনিটিতে যোগ দিন' : 'Join Community'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenJoin}
              className="px-3 py-1.5 rounded-lg bg-[#0C4DEB] text-white font-bold text-xs btn-hard sm:hidden"
            >
              {isBn ? 'যুক্ত হোন' : 'Join'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#000A3C] hover:bg-[#F5F7FC] rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2E7F1] bg-white px-6 py-6 space-y-4 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-3 text-base font-semibold text-[#000A3C]">
              <a
                href="#audience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'কাদের জন্য' : 'Who It’s For'}
              </a>
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'আমরা যা করি' : 'What We Do'}
              </a>
              <a
                href="#directory"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'ডিরেক্টরি ও ব্যবসা' : 'Directory & Businesses'}
              </a>
              <a
                href="#ambassadors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'ক্যাম্পাস অ্যাম্বাসেডর' : 'Campus Ambassadors'}
              </a>
              <a
                href="#values"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'আমাদের মূল্যবোধ' : 'Our Values'}
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'ফাউন্ডিং টিম' : 'Founding Team'}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? 'সচরাচর জিজ্ঞাসা' : 'FAQ'}
              </a>
            </div>

            <div className="pt-4 border-t border-[#E2E7F1] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-3 rounded-xl bg-[#0C4DEB] text-white font-bold text-center btn-hard flex items-center justify-center gap-2"
              >
                <span>{isBn ? 'কমিউনিটিতে যোগ দিন' : 'Join Community'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl border-2 border-[#000A3C] text-[#000A3C] font-semibold text-center hover:bg-[#F5F7FC]"
              >
                {isBn ? 'যোগাযোগ করুন' : 'Contact Us'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
