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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FEE7] via-[#ECFCCB]/50 to-[#F8FAFC] text-[#061C14] pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-200/70">
      {/* Background Image of Shilaidaha Kuthibari with Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <Image
          src="/images/hero_image1.jpg"
          alt="শিলাইদহ কুঠিবাড়ি, কুষ্টিয়া - Shilaidaha Kuthibari, Kushtia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105"
        />
        {/* Soft Multi-stop Lime Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FEE7]/90 via-[#ECFCCB]/80 to-[#F8FAFC]/95" />
        {/* Radial highlight for center text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,255,255,0.75) 0%, rgba(247,254,231,0.3) 60%, rgba(236,252,203,0.85) 100%)",
          }}
        />
      </div>

      {/* Soft Ambient Aurora Gradient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#A3E635]/25 via-[#84CC16]/20 to-[#BEF264]/25 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#A3E635]/20 rounded-full blur-[110px] pointer-events-none -z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#84CC16]/15 rounded-full blur-[110px] pointer-events-none -z-0"></div>

      {/* Subtle Dot Matrix with Soft Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#84CC16 0.75px, transparent 0.75px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 85%)",
        }}
      ></div>

      {/* Subtle "Connecting Dots" Constellation Graphic Lines in Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="15%"
          y1="20%"
          x2="35%"
          y2="40%"
          stroke="#84CC16"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="65%"
          y1="25%"
          x2="85%"
          y2="45%"
          stroke="#A3E635"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="25%"
          y1="70%"
          x2="45%"
          y2="55%"
          stroke="#84CC16"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <line
          x1="55%"
          y1="65%"
          x2="75%"
          y2="80%"
          stroke="#A3E635"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="15%" cy="20%" r="3" fill="#84CC16" />
        <circle cx="35%" cy="40%" r="4" fill="#A3E635" />
        <circle cx="65%" cy="25%" r="3.5" fill="#84CC16" />
        <circle cx="85%" cy="45%" r="4" fill="#A3E635" />
        <circle cx="25%" cy="70%" r="3" fill="#84CC16" />
        <circle cx="75%" cy="80%" r="3.5" fill="#A3E635" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center z-10">
        {/* Floating Accent Pill - Left (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute left-4 top-1/4 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg text-xs font-bold text-[#061C14] animate-bounce [animation-duration:5s]">
          <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
          <span>
            {isBn ? "💡 আইডিয়া থেকে স্টার্টআপ" : "💡 Idea to Startup"}
          </span>
        </div>

        {/* Floating Accent Pill - Right (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 absolute right-4 top-1/3 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg text-xs font-bold text-[#061C14] animate-bounce [animation-duration:6s]">
          <span className="w-2 h-2 rounded-full bg-[#A3E635]"></span>
          <span>
            {isBn ? "🚀 ক্যাম্পাস ইনোভেশন হাব" : "🚀 Campus Innovation Hub"}
          </span>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 shadow-xs text-[#4D7C0F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#A3E635] ring-4 ring-[#A3E635]/25 animate-pulse"></span>
          <span>{isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-medium normal-case">
            {isBn ? "উদ্যোক্তা প্ল্যাটফর্ম" : "Entrepreneurship Platform"}
          </span>
        </div>

        {/* Main H1 Headline - Highly Legible & Bold */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.25] text-[#061C14] font-display mb-6">
          {isBn ? (
            <>
              আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার{" "}
              <span className="sk-hl inline-block px-2 text-[#061C14]">
                লঞ্চপ্যাড
              </span>
              ।
            </>
          ) : (
            <>
              Kushtia&apos;s Launchpad for Ideas &amp;{" "}
              <span className="sk-hl inline-block px-2 text-[#061C14]">
                Businesses
              </span>
              .
            </>
          )}
        </h1>

        {/* Subtitle / Lead Paragraph - High Contrast Crisp Slate Text */}
        <p className="text-base sm:text-xl text-[#475569] max-w-2xl leading-relaxed mb-10 font-normal">
          {isBn ? SITE_CONFIG.heroSubtitleBn : SITE_CONFIG.heroSubtitleEn}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          <button
            type="button"
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold text-base btn-hard flex items-center justify-center gap-2.5 group"
          >
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#directory"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#061C14] font-bold text-base shadow-sm transition-all text-center"
          >
            {isBn ? "ডিরেক্টরি দেখুন" : "Explore Directory"}
          </a>
        </div>

        {/* Metrics Bar - High Quality White Glassmorphic Card (Borderless) */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg">
          <div className="text-center p-2 sm:p-3 border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4D7C0F] font-display">
              {isBn ? "৫০০+" : "500+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              {isBn ? "কমিউনিটি মেম্বার" : "Community Members"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3 md:border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4D7C0F] font-display">
              {isBn ? "৫০+" : "50+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              {isBn ? "স্টার্টআপ ও ব্যবসা" : "Startups & Ventures"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3 border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4D7C0F] font-display">
              {isBn ? "১২+" : "12+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              {isBn ? "ক্যাম্পাস পার্টনার" : "Campus Partners"}
            </div>
          </div>

          <div className="text-center p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4D7C0F] font-display">
              {isBn ? "২০+" : "20+"}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              {isBn ? "মেন্টর ও বিশেষজ্ঞ" : "Mentors & Advisors"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
