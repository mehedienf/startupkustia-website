"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { LAUNCHPAD_TRACKS } from "@/data/content";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface PortfolioProps {
  onOpenListingModal: () => void;
}

export default function Portfolio({ onOpenListingModal }: PortfolioProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = LAUNCHPAD_TRACKS.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems]);

  // Autoplay Slider every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  return (
    <section
      id="portfolio"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-brand-soft relative overflow-hidden select-none -mt-px"
    >
      <span id="launchpad" className="sr-only" />
      <span id="directory" className="sr-only" />

      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* ========================================================
            HEADER SECTION: Cohort-1 Launchpad Announcement
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-8">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-border/60 text-brand text-xs font-bold shadow-2xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse" />
              <span>
                {isBn
                  ? "লঞ্চপ্যাড কোহোর্ট-১ · ব্যাচ ২০২৬"
                  : "Launchpad Cohort-1 · Batch 2026"}
              </span>
            </div>

            {/* Giant Title: "Building the Next Breakthrough / Are You Next?" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-[1.15]">
              {isBn ? "কুষ্টিয়ার পরবর্তী বড় ভেঞ্চার" : "Building the Next Breakthrough"}
              <br />
              <span className="text-brand font-black">
                {isBn ? "আপনি কি প্রস্তুত?" : "Are You Next?"}
              </span>
            </h2>
          </div>

          {/* Right Header Column: Subtitle */}
          <div className="max-w-md flex flex-col lg:items-end justify-between">
            <p className="text-sm sm:text-base text-[#444E69] leading-relaxed">
              {isBn
                ? "আমরা কুষ্টিয়ার সম্ভাবনাময় প্রথম ১০টি স্টার্টআপ ও উদ্ভাবনী উদ্যোগকে সিড মেন্টরশিপ, আধুনিক টেক সাপোর্ট ও বিনিয়োগ নেটওয়ার্কের শক্তি দিতে প্রস্তুত। আপনার আইডিয়া নিয়ে আজই আবেদন করুন।"
                : "We are gearing up to empower our inaugural batch of 10 high-potential Kushtia ventures with seed mentorship, tech stack, and network access. Apply with your idea today."}
            </p>
          </div>
        </div>

        {/* ========================================================
            SINGLE SPOTLIGHT SHOWCASE (1 at a time: Left Image, Right Text)
           ======================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden py-3 sm:py-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ----------------------------------------------------
                LEFT SIDE: 2D Vector Illustration Image Container
               ---------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl shadow-brand/10 bg-slate-900 group">
                {LAUNCHPAD_TRACKS.map((track, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={track.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 pointer-events-none z-0"
                      }`}
                    >
                      <Image
                        src={track.coverImage}
                        alt={isBn ? track.titleBn : track.titleEn}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority={idx === 0}
                      />
                      {/* Dark gradient for visual depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Phase Badge on Top-Left of Image */}
                      {/* <div className="absolute top-4 left-4 z-20">
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider bg-brand text-white shadow-md">
                          {isBn ? track.stepBn : track.stepEn}
                        </span>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------
                RIGHT SIDE: Card Text, Details, Badges & Actions
               ---------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5">
              {/* CSS Grid stack overlay ensures zero height jumping between slides */}
              <div className="grid grid-cols-1 grid-rows-1">
                {LAUNCHPAD_TRACKS.map((track, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={track.id}
                      className={`col-start-1 row-start-1 transition-all duration-500 ease-out flex flex-col justify-between ${
                        isActive
                          ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                          : "opacity-0 translate-x-4 pointer-events-none z-0"
                      }`}
                    >
                      <div className="space-y-4 sm:space-y-5">
                        {/* Step indicator tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border/60 text-brand text-xs font-bold w-fit shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
                          <span>{isBn ? track.stepBn : track.stepEn}</span>
                        </div>

                        {/* Track Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-heading tracking-tight leading-snug">
                          {isBn ? track.titleBn : track.titleEn}
                        </h3>

                        {/* Track Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {isBn ? track.descBn : track.descEn}
                        </p>

                        {/* Key Deliverables / Focus Areas */}
                        <div className="pt-2">
                          <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                            {isBn ? "মূল সুবিধাসমূহ" : "Key Deliverables"}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {(isBn
                              ? track.highlightsBn
                              : track.highlightsEn
                            ).map((tag, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-brand border border-brand-border/60 shadow-2xs"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action & Slide Nav Footer */}
                      <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border/50 mt-6 sm:mt-8">
                        <button
                          type="button"
                          onClick={onOpenListingModal}
                          className="px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-brand/20 active:scale-95"
                        >
                          <Rocket className="w-4 h-4" />
                          <span>
                            {isBn
                              ? "কোহোর্ট-১ এ আবেদন করুন"
                              : "Apply for Cohort 1"}
                          </span>
                        </button>

                        {/* Slider Controls & Track Counter */}
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {String(currentIndex + 1).padStart(2, "0")} /{" "}
                            {String(totalItems).padStart(2, "0")}
                          </span>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={handlePrev}
                              aria-label={
                                isBn ? "পূর্ববর্তী ট্র্যাক" : "Previous track"
                              }
                              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              aria-label={
                                isBn ? "পরবর্তী ট্র্যাক" : "Next track"
                              }
                              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM DOT INDICATORS (4 Tracks)
           ======================================================== */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {LAUNCHPAD_TRACKS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to track ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-slate-300/80 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* ========================================================
            COHORT CALLOUT BANNER
           ======================================================== */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-brand-border/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-heading">
                {isBn
                  ? "আপনার কি কোনো স্টার্টআপ বা ব্যবসায়িক পরিকল্পনা আছে?"
                  : "Have an Early-Stage Startup or Venture Idea?"}
              </h4>
              <p className="text-xs sm:text-sm text-[#444E69]">
                {isBn
                  ? "কোহোর্ট-১ এর আবেদন প্রক্রিয়া সম্পূর্ণ বিনামূল্যে। প্রাথমিক স্ক্রিনিং শেষে নির্বাচিত উদ্যোগগুলোকে সরাসরি মেন্টরশিপ দেওয়া হবে।"
                  : "Application is 100% free. Screened founders will be directly matched with seasoned mentors and support."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenListingModal}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold flex-shrink-0 transition-colors shadow-2xs"
          >
            {isBn ? "এখনই আবেদন জমা দিন" : "Submit Idea"}
          </button>
        </div>
      </div>

      {/* Organic river wave transition into dark Ambassadors section */}
      <RiverWaveDivider position="bottom" color="text-dark" flip={true} />
    </section>
  );
}
