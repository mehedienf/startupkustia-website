"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenJoin: () => void;
}

export default function Hero({ onOpenJoin }: HeroProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="relative w-full overflow-hidden bg-[#061C14] text-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/10">
      {/* Background Image of Shilaidaha Kuthibari spanning full screen width */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/hero_image1.jpg"
          alt="শিলাইদহ কুঠিবাড়ি, কুষ্টিয়া - Shilaidaha Kuthibari, Kushtia"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft balanced dark overlay: preserves full visibility of Shilaidaha Kuthibari while keeping text crisp */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6, 28, 20, 0.55) 0%, rgba(0, 0, 0, 0.30) 25%, rgba(0, 0, 0, 0.35) 70%, rgba(6, 28, 20, 0.72) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center z-10">
        {/* Floating Accent Pill - Left (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute left-4 top-1/4 px-4 py-2 rounded-2xl bg-[#061C14]/85 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-white animate-bounce [animation-duration:5s]">
          <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
          <span>
            {isBn ? "💡 আইডিয়া থেকে স্টার্টআপ" : "💡 Idea to Startup"}
          </span>
        </div>

        {/* Floating Accent Pill - Right (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute right-4 top-1/3 px-4 py-2 rounded-2xl bg-[#061C14]/85 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-white animate-bounce [animation-duration:6s]">
          <span className="w-2 h-2 rounded-full bg-[#A3E635]"></span>
          <span>
            {isBn ? "🚀 ক্যাম্পাস ইনোভেশন হাব" : "🚀 Campus Innovation Hub"}
          </span>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-[#A3E635] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#A3E635] ring-4 ring-[#A3E635]/30 animate-pulse"></span>
          <span>{isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}</span>
          <span className="text-white/30">|</span>
          <span className="text-white/90 font-medium normal-case">
            {isBn ? "উদ্যোক্তা প্ল্যাটফর্ম" : "Entrepreneurship Platform"}
          </span>
        </div>

        {/* Main H1 Headline - Highly Legible & Bold White with Text Shadow */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.25] text-white font-display mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          {isBn ? (
            <>
              আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার{" "}
              <span className="text-[#A3E635] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                লঞ্চপ্যাড
              </span>
              ।
            </>
          ) : (
            <>
              Kushtia&apos;s Launchpad for Ideas &amp;{" "}
              <span className="text-[#A3E635] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          <button
            type="button"
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold text-base btn-hard flex items-center justify-center gap-2.5 group shadow-lg"
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

        {/* Metrics Bar - High Quality Dark Glassmorphic Card (Borderless) */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-[#061C14]/85 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="text-center p-2 sm:p-3 border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-display">
              {isBn ? "৫০০+" : "500+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {isBn ? "কমিউনিটি মেম্বার" : "Community Members"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3 md:border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-display">
              {isBn ? "৫০+" : "50+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {isBn ? "স্টার্টআপ ও ব্যবসা" : "Startups & Ventures"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3 border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-display">
              {isBn ? "১২+" : "12+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {isBn ? "ক্যাম্পাস পার্টনার" : "Campus Partners"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-display">
              {isBn ? "২০+" : "20+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {isBn ? "মেন্টর ও বিশেষজ্ঞ" : "Mentors & Advisors"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
