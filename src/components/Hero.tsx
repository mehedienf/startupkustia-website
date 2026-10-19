"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


interface RotatingTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  pauseEmptyDuration?: number;
}

function RotatingTypewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 2400,
  pauseEmptyDuration = 450,
}: RotatingTypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Split all words into grapheme clusters for pristine Bengali & English typing & backspacing
  const segmentedWords = useMemo(() => {
    return words.map((word) => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        try {
          const segmenter = new Intl.Segmenter(undefined, {
            granularity: "grapheme",
          });
          return Array.from(segmenter.segment(word), (s) => s.segment);
        } catch {
          return Array.from(word);
        }
      }
      return Array.from(word);
    });
  }, [words]);

  const currentGraphemes =
    segmentedWords[wordIndex % segmentedWords.length] || [];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && subIndex < currentGraphemes.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && subIndex === currentGraphemes.length) {
      // Finished typing full word: pause so user can read it
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && subIndex > 0) {
      // Deleting backward (backspace effect)
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && subIndex === 0) {
      // Word completely erased: pause briefly then advance to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % segmentedWords.length);
      }, pauseEmptyDuration);
    }

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    currentGraphemes.length,
    segmentedWords.length,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    pauseEmptyDuration,
  ]);

  const visibleText = currentGraphemes.slice(0, subIndex).join("");

  return (
    <span className="relative inline-block align-baseline mx-1 py-1.5 sm:py-2.5 px-1 sm:px-2 overflow-visible">
      {/* Animated text with colorful shimmering internal gradient light */}
      <span className="inline-block py-1 sm:py-2 px-1 animate-aura-text font-normal sm:font-medium drop-shadow-[0_2px_14px_rgba(244,63,94,0.35)]">
        {visibleText || "\u00A0"}
      </span>
      {/* Typewriter pulsating cursor */}
      <span
        className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-brand-accent-light ml-1 sm:ml-1.5 align-middle animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}

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

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark text-white pt-[104px] pb-8 sm:pt-[110px] sm:pb-12 md:pt-[112px] md:pb-16 lg:pb-20"
    >
      {/* Background Image of Shilaidaha Kuthibari spanning exact 100% width, centered on vertical axis */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div
          className="hero-bg-image absolute inset-0 w-full h-full opacity-88 transition-opacity"
          style={{
            backgroundImage: "url('/images/hero_image1.webp')",
            backgroundPosition: "center center",
          }}
        />
        {/* Soft balanced dark overlay: preserves full visibility of Kuthibari while keeping text crisp */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--sk-dark) 0%, rgba(25, 10, 15, 0.45) 15%, rgba(0, 0, 0, 0.20) 40%, rgba(0, 0, 0, 0.20) 60%, rgba(25, 10, 15, 0.65) 85%, var(--sk-dark) 100%)",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center z-10 w-full my-auto py-8 sm:py-12 md:py-16">
        {/* Main H1 Headline with Dynamic Typewriter Animated Words */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light sm:font-normal tracking-tight max-w-5xl leading-[1.32] sm:leading-[1.26] md:leading-[1.24] text-white font-display mb-6 py-2 sm:py-4 px-2 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] overflow-visible">
          {isBn ? (
            <>
              <span className="block">কুষ্টিয়া থেকে গড়ে তুলুন আগামীর</span>
              <RotatingTypewriter key="hero-title-bn" words={rotatingWordsBn} />
            </>
          ) : (
            <>
              <span className="block">Empowering Kushtia’s</span>
              <RotatingTypewriter key="hero-title-en" words={rotatingWordsEn} />
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
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              const el =
                document.getElementById("portfolio") ||
                document.getElementById("directory");
              if (el) {
                const navHeight = 85;
                const pos =
                  el.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: pos, behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/50 hover:scale-102 active:scale-98 transition-all duration-200 text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-slate-300" />
            <span>{isBn ? "লঞ্চপ্যাড দেখুন" : "Explore Launchpad"}</span>
          </Link>
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
