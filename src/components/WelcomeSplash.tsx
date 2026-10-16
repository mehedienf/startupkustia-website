"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Whatsapp } from "react-bootstrap-icons";

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
        {/* Brand Logo from Navbar (Large & Prominent) */}
        <div className="mb-3 sm:mb-4 animate-fade-in shrink-0 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Startup Kushtia"
            width={380}
            height={125}
            priority
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[85vw] object-contain brightness-0 invert drop-shadow-[0_4px_24px_rgba(255,255,255,0.35)]"
          />
        </div>

        {/* Official Launch Headline Badge (Crisper border radius) */}
        <h1 className="mb-3 sm:mb-4 shrink-0 flex justify-center">
          <span className="inline-block bg-brand text-white px-5 py-1.5 sm:px-7 sm:py-2 rounded-xl font-black shadow-[0_0_28px_rgba(217,38,86,0.65)] text-xl sm:text-2xl md:text-3xl tracking-wide leading-normal">
            {isBn ? "অফিসিয়াল লঞ্চ" : "Official Launch"}
          </span>
        </h1>

        {/* Subtitle / Community Motto (With line break before tagline) */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed mb-3 sm:mb-5 font-medium shrink-0">
          <span className="block">
            {isBn
              ? "কুষ্টিয়ার উদ্যোক্তা ও উদ্ভাবনী কমিউনিটি।"
              : "Kushtia's Entrepreneurship & Innovation Community."}
          </span>
          <span className="block text-slate-400 font-semibold tracking-wider text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
            Learn. Lead. Connect. Impact.
          </span>
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
            href={SITE_CONFIG.whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] sm:min-w-0 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-black text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(217,38,86,0.4)] hover:shadow-[0_6px_25px_rgba(217,38,86,0.6)] active:scale-95 flex items-center justify-center gap-2"
          >
            <Whatsapp className="w-4 h-4 shrink-0" />
            <span>{isBn ? "WhatsApp চ্যানেল" : "WhatsApp"}</span>
          </a>

          {/* Button 3: Facebook */}
          <a
            href={SITE_CONFIG.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-dark-surface hover:bg-white/10 border border-white/20 hover:border-brand-accent-light/60 text-white font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <Facebook className="w-4 h-4 shrink-0 text-[#1877F2]" />
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
