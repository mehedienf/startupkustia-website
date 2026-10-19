"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Facebook, Whatsapp } from "react-bootstrap-icons";

interface HeaderProps {
  onOpenJoin?: () => void;
}

export default function Header({ onOpenJoin }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollYRef = useRef(0);

  const pathname = usePathname();
  const router = useRouter();

  const isBn = language === "bn";

  const handleHomeClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 85;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("sk_scroll_target", sectionId);
      }
      router.push("/");
    }
  };

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
        <div className="bg-dark/90 backdrop-blur-md text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-[var(--sk-dark-border)] transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="sk-status-dot"></span>
              <span className="text-slate-200 text-xs font-medium">
                {isBn
                  ? "কুষ্টিয়ার উদ্যোক্তাদের ঐক্যবদ্ধ প্ল্যাটফর্ম"
                  : "Kushtia’s Unified Platform for Founders & Innovators"}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href={SITE_CONFIG.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors text-xs font-medium"
                title={isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
                aria-label="WhatsApp Channel"
              >
                <Whatsapp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">
                  {isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
                </span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#1877F2] transition-colors text-xs font-medium"
                title={isBn ? "ফেসবুক পেজ" : "Facebook Page"}
                aria-label="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2] shrink-0" />
                <span className="hidden sm:inline">
                  {isBn ? "ফেসবুক পেজ" : "Facebook Page"}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar - Crisper White with Frosted Glass Backdrop */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3 sm:py-3.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3.5 sm:py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 group shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Startup Kushtia"
              width={180}
              height={58}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Items - Clean, uncluttered, nicely spaced */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-[15px] font-semibold text-[#334155]">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer"
            >
              {isBn ? "হোম" : "Home"}
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "audience")}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer text-left"
            >
              {isBn ? "পরিচিতি" : "About"}
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "events")}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer text-left"
            >
              {isBn ? "ইভেন্টস" : "Events"}
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer text-left"
            >
              {isBn ? "লঞ্চপ্যাড" : "Launchpad"}
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "ambassadors")}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer text-left"
            >
              {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Ambassadors"}
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "team")}
              className="px-3.5 py-2 rounded-xl hover:text-brand hover:bg-slate-100/70 transition-all cursor-pointer text-left"
            >
              {isBn ? "টিম" : "Team"}
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Minimal Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-1">
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all ${
                  isBn
                    ? "bg-white text-heading shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all ${
                  !isBn
                    ? "bg-white text-heading shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA Button - Redirects directly to Connect Hub */}
            <Link
              href="/connect"
              onClick={onOpenJoin}
              className="px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm sm:text-[15px] btn-hard flex items-center gap-2 shadow-sm"
            >
              <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={() => setLanguage(isBn ? "en" : "bn")}
              className="px-3 py-1.5 rounded-full bg-slate-100 text-heading font-bold text-xs border border-slate-200"
            >
              {isBn ? "EN" : "বাং"}
            </button>

            <Link
              href="/connect"
              onClick={() => {
                if (onOpenJoin) onOpenJoin();
              }}
              className="px-3.5 py-2 rounded-full bg-brand text-white font-bold text-xs sm:text-sm btn-hard sm:hidden"
            >
              {isBn ? "যুক্ত হোন" : "Join"}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-heading hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-3 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-heading">
              <Link
                href="/"
                onClick={handleHomeClick}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "হোম" : "Home"}
              </Link>
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "audience")}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "পরিচিতি" : "About"}
              </Link>
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "events")}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "ইভেন্টস" : "Events"}
              </Link>
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "portfolio")}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "লঞ্চপ্যাড" : "Launchpad"}
              </Link>
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "ambassadors")}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassadors"}
              </Link>
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "team")}
                className="py-1.5 hover:text-brand transition-colors text-left"
              >
                {isBn ? "টিম" : "Team"}
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/connect"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenJoin) onOpenJoin();
                }}
                className="w-full py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-center btn-hard flex items-center justify-center gap-1.5 text-sm"
              >
                <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
