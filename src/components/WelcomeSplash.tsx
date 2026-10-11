"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface WelcomeSplashProps {
  onEnterSite?: () => void;
  isStandalone?: boolean;
}

export default function WelcomeSplash({
  onEnterSite,
  isStandalone = false,
}: WelcomeSplashProps) {
  const { language, toggleLanguage } = useLanguage();
  const isBn = language === "bn";
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (isStandalone) return;
    setIsExiting(true);
    setTimeout(() => {
      onEnterSite?.();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] h-[100dvh] w-full flex flex-col justify-between bg-dark text-white overflow-hidden transition-all duration-500 ease-out select-none ${
        isExiting
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Decorative Angled Shapes & Topography Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle topographic river contour pattern */}
        <div
          className="absolute inset-0 bg-topography-dark opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle radial center ambient brand glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/20 rounded-full blur-3xl" />

        {/* Diagonal geometric brand accent bands on right side */}
        <div className="absolute -top-20 -right-20 w-80 sm:w-[480px] h-[150%] bg-gradient-to-b from-brand/35 via-brand-hover/20 to-transparent transform -skew-x-[18deg]" />
        <div className="absolute -top-20 right-28 sm:right-60 w-32 sm:w-56 h-[150%] bg-gradient-to-b from-brand-accent/25 via-brand-accent-light/10 to-transparent transform -skew-x-[18deg]" />
      </div>

      {/* Top Bar with Language Switcher */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4 pb-1 flex items-center justify-end shrink-0">
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white/90 hover:text-white text-xs font-semibold backdrop-blur-md transition-all shadow-sm active:scale-95 cursor-pointer hover:border-brand-accent-light/50"
          aria-label="Toggle language"
        >
          <Globe className="w-3.5 h-3.5 text-brand-accent-light" />
          <span>{isBn ? "English" : "বাংলা"}</span>
        </button>
      </header>

      {/* Main Hero Content (Centered & Compact so it fits any screen without scrolling) */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center text-center my-auto min-h-0">
        {/* Brand Logo from Navbar (Prominent, cleanly inverted for dark backdrop without card/side-text) */}
        <div className="mb-2 sm:mb-3.5 animate-fade-in shrink-0 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Startup Kushtia"
            width={240}
            height={78}
            priority
            className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_14px_rgba(255,255,255,0.35)]"
          />
        </div>

        {/* Big Bold Headline with Line Break & Vertical Padding to prevent glyph clipping */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight py-2.5 sm:py-3.5 mb-2 sm:mb-3 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] shrink-0 flex flex-col items-center gap-2 sm:gap-3">
          {/* Line 1: Startup Kushtia with generous top & bottom padding */}
          <span className="block leading-snug pt-1 pb-1.5 px-3">
            {isBn ? "স্টার্টআপ কুষ্টিয়া" : "Startup Kushtia"}
          </span>
          {/* Line 2: Official Launch Badge */}
          <span className="inline-block bg-brand text-white px-4 py-1 sm:px-6 sm:py-1.5 rounded-2xl font-black shadow-[0_0_28px_rgba(217,38,86,0.65)] text-xl sm:text-3xl md:text-4xl leading-normal">
            {isBn ? "অফিসিয়াল লঞ্চ" : "Official Launch"}
          </span>
        </h1>

        {/* Subtitle / Community Motto */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed mb-3 sm:mb-5 font-medium shrink-0">
          {isBn
            ? "কুষ্টিয়ার উদ্যোক্তা ও উদ্ভাবনী কমিউনিটি। Learn. Lead. Connect. Impact."
            : "Kushtia's Entrepreneurship & Innovation Community. Learn. Lead. Connect. Impact."}
        </p>

        {/* "We Are Now Live!" Glowing Callout */}
        <div className="mb-4 sm:mb-6 shrink-0">
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-brand-accent-light tracking-wide drop-shadow-[0_0_18px_rgba(251,113,133,0.7)] animate-pulse inline-block">
            {isBn ? "আমরা এখন লাইভ!" : "We Are Now Live!"}
          </span>
        </div>

        {/* Action Buttons (Styled in Startup Kushtia Brand Theme) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xl shrink-0">
          {/* Button 1: Enter Site */}
          {isStandalone ? (
            <Link
              href="/"
              className="flex-1 min-w-[140px] sm:min-w-0 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-black text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(217,38,86,0.4)] hover:shadow-[0_6px_25px_rgba(217,38,86,0.6)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{isBn ? "সাইটে প্রবেশ করুন" : "Enter Website"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleEnter}
              className="flex-1 min-w-[140px] sm:min-w-0 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-black text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(217,38,86,0.4)] hover:shadow-[0_6px_25px_rgba(217,38,86,0.6)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isBn ? "সাইটে প্রবেশ করুন" : "Enter Website"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {/* Button 2: WhatsApp Channel */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] sm:min-w-0 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-black text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(217,38,86,0.4)] hover:shadow-[0_6px_25px_rgba(217,38,86,0.6)] active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.08 7.41 8.84 7.67C8.6 7.93 7.92 8.57 7.92 9.87C7.92 11.17 8.87 12.43 9 12.6C9.13 12.77 10.87 15.46 13.53 16.61C14.16 16.88 14.66 17.05 15.04 17.17C15.68 17.37 16.26 17.34 16.72 17.27C17.23 17.2 18.29 16.63 18.51 16.01C18.73 15.39 18.73 14.86 18.66 14.75C18.6 14.63 18.42 14.56 18.16 14.43C17.9 14.3 16.62 13.67 16.38 13.58C16.15 13.5 15.98 13.45 15.81 13.71C15.15 14.56 15 14.73C14.85 14.9 14.7 14.92 14.44 14.79C14.18 14.66 13.34 14.39 12.35 13.5C11.58 12.81 11.06 11.96 10.91 11.7C10.76 11.44 10.89 11.3 11.02 11.17C11.14 11.05 11.28 10.86 11.41 10.71C11.54 10.56 11.58 10.45 11.67 10.28C11.76 10.11 11.71 9.96 11.65 9.83C11.58 9.7 11.09 8.5 10.89 8C10.69 7.53 10.48 7.59 10.33 7.58C10.19 7.58 10.02 7.57 9.85 7.57L9.53 7.35Z" />
            </svg>
            <span>{isBn ? "WhatsApp চ্যানেল" : "WhatsApp"}</span>
          </a>

          {/* Button 3: Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-dark-surface hover:bg-white/10 border border-white/20 hover:border-brand-accent-light/60 text-white font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0 text-[#1877F2]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </main>

      {/* Bottom Footer Email */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 text-center shrink-0">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="text-xs text-slate-400 hover:text-brand-accent-light transition-colors tracking-wide font-medium"
        >
          {SITE_CONFIG.email}
        </a>
      </footer>
    </div>
  );
}
