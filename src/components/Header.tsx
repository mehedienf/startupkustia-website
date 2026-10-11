"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  onOpenJoin: () => void;
  onOpenContact: () => void;
}

export default function Header({ onOpenJoin, onOpenContact }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollYRef = useRef(0);

  const isBn = language === "bn";

  useEffect(() => {
    prevScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = prevScrollYRef.current;
      const diff = currentScrollY - prevScrollY;
      if (mobileMenuOpen) return;

      // Update shadow/scrolled state
      setIsScrolled(currentScrollY > 20);

      // Always show when near the top of the page
      if (currentScrollY < 40) {
        setIsVisible(true);
        prevScrollYRef.current = currentScrollY;
        return;
      }

      // Ignore micro-jitters
      if (Math.abs(diff) < 8) return;

      if (diff > 0) {
        // User scrolled down -> HIDE navbar
        setIsVisible(false);
      } else {
        // User scrolled up -> SHOW navbar
        setIsVisible(true);
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Top subtle notification ribbon - visible only at the top */}
      {!isScrolled && (
        <div className="bg-[#000A3C] text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#0A1A55] transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="sk-status-dot"></span>
              <span className="font-semibold text-white tracking-wide">
                {isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-slate-300 text-[11px] hidden sm:inline">
                {isBn
                  ? "কুষ্টিয়ার উদ্যোক্তাদের ঐক্যবদ্ধ প্ল্যাটফর্ম"
                  : "Kushtia’s Unified Platform for Founders & Innovators"}
              </span>
            </div>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#48E2E7] hover:text-white transition-colors text-[11px] font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>{isBn ? "হোয়াটসঅ্যাপে যোগাযোগ" : "WhatsApp Us"}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo.png"
              alt="Startup Kushtia"
              width={160}
              height={52}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Items - Clean, uncluttered, nicely spaced */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-[#334155]">
            <a
              href="#audience"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "পরিচিতি" : "About"}
            </a>
            <a
              href="#pillars"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "প্রোগ্রাম" : "Programs"}
            </a>
            <a
              href="#directory"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "ডিরেক্টরি" : "Directory"}
            </a>
            <a
              href="#ambassadors"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Ambassadors"}
            </a>
            <a
              href="#team"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "টিম" : "Team"}
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 rounded-lg hover:text-[#0C4DEB] hover:bg-slate-100/70 transition-all"
            >
              {isBn ? "প্রশ্নোত্তর" : "FAQ"}
            </a>
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Minimal Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  isBn
                    ? "bg-white text-[#000A3C] shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  !isBn
                    ? "bg-white text-[#000A3C] shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Contact Link */}
            <button
              type="button"
              onClick={onOpenContact}
              className="text-xs font-bold text-slate-600 hover:text-[#0C4DEB] px-2.5 py-1.5 rounded-lg transition-colors"
            >
              {isBn ? "যোগাযোগ" : "Contact"}
            </button>

            {/* Primary CTA Button */}
            <button
              type="button"
              onClick={onOpenJoin}
              className="px-4 py-2 rounded-xl bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold text-xs sm:text-sm btn-hard flex items-center gap-1.5 shadow-sm"
            >
              <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={() => setLanguage(isBn ? "en" : "bn")}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-[#000A3C] font-bold text-xs border border-slate-200"
            >
              {isBn ? "EN" : "বাং"}
            </button>

            <button
              type="button"
              onClick={onOpenJoin}
              className="px-3 py-1.5 rounded-lg bg-[#0C4DEB] text-white font-bold text-xs btn-hard sm:hidden"
            >
              {isBn ? "যুক্ত হোন" : "Join"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#000A3C] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-3 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-[#000A3C]">
              <a
                href="#audience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "পরিচিতি" : "About"}
              </a>
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "প্রোগ্রাম ও উদ্যোগ" : "Programs"}
              </a>
              <a
                href="#directory"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "কুষ্টিয়ার ডিরেক্টরি" : "Directory"}
              </a>
              <a
                href="#ambassadors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassadors"}
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "টিম" : "Team"}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C4DEB] transition-colors"
              >
                {isBn ? "প্রশ্নোত্তর" : "FAQ"}
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-2.5 rounded-xl bg-[#0C4DEB] text-white font-bold text-center btn-hard flex items-center justify-center gap-1.5 text-sm"
              >
                <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2 rounded-xl border border-slate-300 text-[#000A3C] font-semibold text-center text-xs hover:bg-slate-50"
              >
                {isBn ? "যোগাযোগ করুন" : "Contact Us"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
