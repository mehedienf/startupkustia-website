"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { LAUNCHPAD_TRACKS } from "@/data/content";
import { ArrowLeft, ArrowRight, ArrowUpRight, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface PortfolioProps {
  onOpenListingModal: () => void;
}

export default function Portfolio({ onOpenListingModal }: PortfolioProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalItems = LAUNCHPAD_TRACKS.length;

  // Scroll to active index
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    if (index === 0) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    const cards = container.querySelectorAll<HTMLElement>(".portfolio-card");
    if (cards[index]) {
      const card = cards[index];
      const containerStyle = window.getComputedStyle(container);
      const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
      const offsetLeft = card.offsetLeft - container.offsetLeft - paddingLeft;
      container.scrollTo({
        left: Math.max(0, offsetLeft),
        behavior: "smooth",
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % totalItems;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [totalItems, scrollToIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIdx = prev === 0 ? totalItems - 1 : prev - 1;
      scrollToIndex(prevIdx);
      return prevIdx;
    });
  }, [totalItems, scrollToIndex]);

  // Autoplay Slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
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

          {/* Right Header Column: Subtitle + Application Button */}
          <div className="max-w-md flex flex-col lg:items-end justify-between gap-6">
            <p className="text-sm sm:text-base text-[#444E69] leading-relaxed">
              {isBn
                ? "আমরা কুষ্টিয়ার সম্ভাবনাময় প্রথম ১০টি স্টার্টআপ ও উদ্ভাবনী উদ্যোগকে সিড মেন্টরশিপ, আধুনিক টেক সাপোর্ট ও বিনিয়োগ নেটওয়ার্কের শক্তি দিতে প্রস্তুত। আপনার আইডিয়া নিয়ে আজই আবেদন করুন।"
                : "We are gearing up to empower our inaugural batch of 10 high-potential Kushtia ventures with seed mentorship, tech stack, and network access. Apply with your idea today."}
            </p>

            {/* Controls: Apply CTA + Circular Arrow Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenListingModal}
                className="px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-brand/20 active:scale-95"
              >
                <Rocket className="w-4 h-4" />
                <span>
                  {isBn ? "কোহোর্ট-১ এ আবেদন করুন" : "Apply for Cohort 1"}
                </span>
              </button>

              {/* Circular Prev/Next Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={isBn ? "পূর্ববর্তী ট্র্যাক" : "Previous track"}
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={isBn ? "পরবর্তী ট্র্যাক" : "Next track"}
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            FULL-BLEED CAROUSEL SLIDER (4 Launchpad Acceleration Tracks)
           ======================================================== */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 -mx-4 sm:-mx-8 pl-6 sm:pl-10 lg:pl-12 pr-6 sm:pr-10 lg:pr-12 scroll-pl-6 sm:scroll-pl-10 lg:scroll-pl-12 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {LAUNCHPAD_TRACKS.map((track, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={track.id}
                style={{ scrollSnapAlign: "start" }}
                onClick={onOpenListingModal}
                className={`portfolio-card shrink-0 w-[88vw] sm:w-[65vw] md:w-[50vw] lg:w-[48%] rounded-2xl overflow-hidden relative cursor-pointer group aspect-[16/11] sm:aspect-[16/10] transition-all duration-500 border border-brand-border/60 shadow-sm ${
                  isActive
                    ? "ring-2 ring-brand/40 shadow-xl"
                    : "opacity-95 hover:opacity-100 hover:shadow-lg"
                }`}
              >
                {/* 1. Full Cover Photo */}
                <Image
                  src={track.coverImage}
                  alt={isBn ? track.titleBn : track.titleEn}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 48vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={index === 0}
                />

                {/* Dark Vignette Gradient for Crisp Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 pointer-events-none" />

                {/* 2. Top-Left: Phase Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand text-white shadow-md">
                    {isBn ? track.stepBn : track.stepEn}
                  </span>
                </div>

                {/* 3. Top-Right: Apply Now Arrow Chip */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-brand group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 4. Bottom Content: Title, Description, and Feature Highlights */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 right-5 sm:left-6 sm:right-6 z-20 pointer-events-none space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                    {isBn ? track.titleBn : track.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed drop-shadow-xs">
                    {isBn ? track.descBn : track.descEn}
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(isBn ? track.highlightsBn : track.highlightsEn).map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-white/15 text-white backdrop-blur-xs border border-white/20"
                        >
                          #{tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            FOOTER CONTROLS: Dot Indicators & Slide Counter (4 Dots)
           ======================================================== */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            {LAUNCHPAD_TRACKS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToIndex(idx);
                }}
                aria-label={`Go to track ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-brand"
                    : "w-2.5 bg-slate-300/80 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono font-bold text-slate-400 pl-2">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalItems).padStart(2, "0")}
          </span>
        </div>

        {/* Cohort Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-brand-border/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
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
