"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Compass,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  // Dynamic rotating words for the animated headline
  const rotatingWordsBn = [
    "সফল স্টার্টআপ",
    "প্রযুক্তি উদ্ভাবন",
    "নতুন উদ্যোগ",
    "গ্লোবাল ভেঞ্চার",
  ];

  const rotatingWordsEn = [
    "Breakthrough Startups",
    "Tech Innovations",
    "Next-Gen Founders",
    "Global Ventures",
  ];

  const words = isBn ? rotatingWordsBn : rotatingWordsEn;

  const [wordIndex, setWordIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFadeAnim(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative w-full overflow-hidden bg-dark text-white pt-32 pb-32 md:pt-40 md:pb-40">
      {/* Background Image of Shilaidaha Kuthibari spanning exact 100% width */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div
          className="hero-bg-image absolute inset-0 w-full h-full opacity-88 transition-opacity"
          style={{
            backgroundImage: "url('/images/hero_image1.webp')",
          }}
        />
        {/* Soft balanced dark overlay: preserves full visibility of Kuthibari while keeping text crisp */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(25, 10, 15, 0.50) 0%, rgba(0, 0, 0, 0.25) 25%, rgba(25, 10, 15, 0.65) 65%, var(--sk-dark) 95%)",
          }}
        />

        {/* Ambient Animated Atmospheric Glow Orbs (brings life & eliminates static feeling) */}
        <div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/25 rounded-full blur-[130px] pointer-events-none animate-hero-glow-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-88 h-88 bg-rose-500/20 rounded-full blur-[120px] pointer-events-none animate-hero-glow-pulse"
          style={{ animationDelay: "3.5s" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center z-10">
        {/* Floating Interactive Badge (Left - Desktop/Tablet) */}
        <div className="hidden lg:flex absolute left-2 xl:left-8 top-16 items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl animate-hero-float-slow pointer-events-none">
          <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 shadow-md">
            <Lightbulb className="w-5 h-5 text-amber-300" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{isBn ? "আইডিয়া যাচাই" : "Idea Validation"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[11px] text-slate-300">
              {isBn ? "মেন্টরশিপ ও রোডম্যাপ" : "Mentorship & Guidance"}
            </div>
          </div>
        </div>

        {/* Floating Interactive Badge (Right - Desktop/Tablet) */}
        <div className="hidden lg:flex absolute right-2 xl:right-8 top-28 items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl animate-hero-float-reverse pointer-events-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-brand text-white flex items-center justify-center shrink-0 shadow-md">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">
              {isBn ? "ঐক্যবদ্ধ ইকোসিস্টেম" : "United Ecosystem"}
            </div>
            <div className="text-[11px] text-brand-accent-light font-semibold">
              {isBn ? "১০০০+ মেম্বার কানেকশন" : "1,000+ Connections"}
            </div>
          </div>
        </div>

        {/* Eyebrow badge with glowing pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/12 border border-white/20 text-brand-accent-light text-xs font-bold mb-6 backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-200">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent-light"></span>
          </span>
          <span className="tracking-wide text-white">
            {isBn ? "কুষ্টিয়া · বাংলাদেশ" : "Kushtia · Bangladesh"}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-brand-accent-light font-medium flex items-center gap-1">
            <Rocket className="w-3.5 h-3.5 inline-block text-brand-accent-light" />
            <span>
              {isBn ? "স্টার্টআপ ও ইনোভেশন হাব" : "Startup & Innovation Hub"}
            </span>
          </span>
        </div>

        {/* Main H1 Headline with Dynamic Animated Words */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl leading-[1.2] text-white font-display mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
          {isBn ? (
            <>
              কুষ্টিয়া থেকে গড়ে তুলুন আগামীর{" "}
              <span className="inline-block relative">
                <span
                  className={`inline-block bg-gradient-to-r from-rose-300 via-pink-200 to-rose-400 bg-clip-text text-transparent underline decoration-brand decoration-wavy underline-offset-8 transition-all duration-300 ease-out ${
                    fadeAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-3 scale-95"
                  }`}
                >
                  {words[wordIndex]}
                </span>
              </span>
            </>
          ) : (
            <>
              Empowering Kushtia’s Next-Gen{" "}
              <span className="inline-block relative">
                <span
                  className={`inline-block bg-gradient-to-r from-rose-300 via-pink-200 to-rose-400 bg-clip-text text-transparent underline decoration-brand decoration-wavy underline-offset-8 transition-all duration-300 ease-out ${
                    fadeAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-3 scale-95"
                  }`}
                >
                  {words[wordIndex]}
                </span>
              </span>
            </>
          )}
        </h1>

        {/* Subtitle / Lead Paragraph - High Contrast Crisp White Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          {isBn
            ? "উদ্ভাবনী চিন্তা, বিশ্বমানের মেন্টরশিপ ও শক্তিশালী নেটওয়ার্ক — ধারণা থেকে টেকসই উদ্যোগ গড়ে তোলার পথে কুষ্টিয়ার উদ্যোক্তাদের উন্মুক্ত প্ল্যাটফর্ম।"
            : "Transforming regional ideas into scalable, sustainable ventures with mentorship, technology, and a united entrepreneurial network."}
        </p>

        {/* Call to Actions with Hover Shimmer & Micro-Interactions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <Link
            href="/connect"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-base btn-hard flex items-center justify-center gap-2.5 group shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>

          <a
            href="#directory"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/50 hover:scale-102 active:scale-98 transition-all duration-200 text-center shadow-md flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-slate-300" />
            <span>{isBn ? "ডিরেক্টরি দেখুন" : "Explore Directory"}</span>
          </a>
        </div>

        {/* Micro Credibility Tagline under Buttons */}
        <div className="mt-8 flex items-center gap-3 text-xs text-slate-300/80 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Think Local, Build Global</span>
          <span>•</span>
          <span>Innovate · Connect · Grow</span>
        </div>
      </div>

      {/* Organic river wave transition into Audience section */}
      <RiverWaveDivider position="bottom" color="text-brand-soft" />
    </section>
  );
}
