"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenJoin: () => void;
}

export default function Hero({ onOpenJoin }: HeroProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="relative w-full overflow-hidden bg-dark text-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/10">
      {/* Background Image of Shilaidaha Kuthibari spanning exact 100% laptop screen width with 0% horizontal crop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div
          className="hero-bg-image absolute inset-0 w-full h-full opacity-88 transition-opacity"
          style={{
            backgroundImage: "url('/images/hero_image1.jpg')",
          }}
        />
        {/* Soft balanced dark overlay: preserves full visibility of Shilaidaha Kuthibari while keeping text crisp */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(25, 10, 15, 0.45) 0%, rgba(0, 0, 0, 0.20) 20%, rgba(25, 10, 15, 0.60) 65%, var(--sk-dark) 95%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center z-10">
        {/* Floating Accent Pill - Left (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute left-4 top-1/4 px-4 py-2 rounded-2xl bg-dark/85 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-white animate-bounce [animation-duration:5s]">
          <span className="w-2 h-2 rounded-full bg-brand"></span>
          <span>
            {isBn ? "💡 আইডিয়া থেকে স্টার্টআপ" : "💡 Idea to Startup"}
          </span>
        </div>

        {/* Floating Accent Pill - Right (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute right-4 top-1/3 px-4 py-2 rounded-2xl bg-dark/85 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-white animate-bounce [animation-duration:6s]">
          <span className="w-2 h-2 rounded-full bg-brand-accent-light"></span>
          <span>
            {isBn ? "🚀 ক্যাম্পাস ইনোভেশন হাব" : "🚀 Campus Innovation Hub"}
          </span>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-accent-light text-xs font-bold mb-6 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-light ring-4 ring-brand-accent-light/25 animate-pulse"></span>
          <span>{isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}</span>
          <span className="text-white/30">|</span>
          <span className="text-white/90 font-medium">
            {isBn ? "উদ্যোক্তা প্ল্যাটফর্ম" : "Entrepreneurship Platform"}
          </span>
        </div>

        {/* Main H1 Headline - Highly Legible & Bold White with Text Shadow */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.25] text-white font-display mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          {isBn ? (
            <>
              আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার{" "}
              <span className="text-brand-accent-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                লঞ্চপ্যাড
              </span>
              ।
            </>
          ) : (
            <>
              Kushtia&apos;s Launchpad for Ideas &amp;{" "}
              <span className="text-brand-accent-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Businesses
              </span>
              .
            </>
          )}
        </h1>

        {/* Subtitle / Lead Paragraph - High Contrast Crisp White Text */}
        <p className="text-base sm:text-xl text-white max-w-2xl leading-relaxed mb-10 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          {isBn ? SITE_CONFIG.heroSubtitleBn : SITE_CONFIG.heroSubtitleEn}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-base btn-hard flex items-center justify-center gap-2.5 group shadow-lg"
          >
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#directory"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white font-bold text-base backdrop-blur-md border border-white/25 transition-all text-center shadow-md"
          >
            {isBn ? "ডিরেক্টরি দেখুন" : "Explore Directory"}
          </a>
        </div>
      </div>
    </section>
  );
}
