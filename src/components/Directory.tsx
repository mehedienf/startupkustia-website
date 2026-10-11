"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface DirectoryProps {
  onOpenListingModal: () => void;
}

// Exactly 3 Featured Kushtia Startups with dedicated cover photos
const FEATURED_STARTUPS = [
  {
    id: "shilaidaha-agro",
    name: "shilaidahaagro",
    nameBn: "শিলাইদহ এগ্রো",
    website: "https://shilaidahaagro.com",
    coverImage: "/images/directory/shilaidaha_agro_cover.jpg",
  },
  {
    id: "gorai-tech",
    name: "GoraiTech",
    nameBn: "গড়াইটেক",
    website: "https://goraitech.com",
    coverImage: "/images/directory/gorai_tech_cover.jpg",
  },
  {
    id: "kushtia-express",
    name: "kushtiaexpress",
    nameBn: "কুষ্টিয়া এক্সপ্রেস",
    website: "https://kushtiaexpress.xyz",
    coverImage: "/images/directory/kushtia_express_cover.jpg",
  },
];

export default function Directory({ onOpenListingModal }: DirectoryProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalItems = FEATURED_STARTUPS.length;

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
      const prevIdx = (prev - 1 + totalItems) % totalItems;
      scrollToIndex(prevIdx);
      return prevIdx;
    });
  }, [totalItems, scrollToIndex]);

  // 1. Keyboard Arrow Key Navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing inside an input/textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // 2. Auto-change / Autoplay every 4.5s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

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
      id="directory"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-brand-soft relative overflow-hidden select-none"
    >
      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* ========================================================
            HEADER SECTION (Matches Startup Bangladesh reference screenshot)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse" />
              <span>{isBn ? "আমাদের পোর্টফোলিও" : "Our Portfolios"}</span>
            </div>

            {/* Giant Title: "Enterprises we / Empower" */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#64748B] tracking-tight leading-[1.08]">
              {isBn ? "যেসব উদ্যোগে আমাদের" : "Enterprises we"}
              <br />
              <span className="text-brand font-black">
                {isBn ? "সহযোগিতা ও শক্তি" : "Empower"}
              </span>
            </h2>
          </div>

          {/* Right Header Column: Subtitle + Circular Arrow Buttons */}
          <div className="max-w-md flex flex-col lg:items-end justify-between gap-6">
            <p className="text-base sm:text-lg text-[#444E69] leading-relaxed">
              {isBn
                ? "একটি স্টার্টআপ একা বড় হতে পারে না। আমরা পুঁজি, নেটওয়ার্ক এবং আস্থার যোগসূত্রে কুষ্টিয়া থেকে বিশ্বমঞ্চে পৌঁছানোর শক্তি যোগাই।"
                : "Great startups don't scale alone. We bring the capital, the connections, and the conviction to get there."}
            </p>

            {/* Controls: Listing CTA + Circular Arrow Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenListingModal}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200/90 hover:border-brand hover:text-brand text-heading font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5 text-brand" />
                <span>{isBn ? "তালিকাভুক্ত হোন" : "List Venture"}</span>
              </button>

              {/* Circular Prev/Next Arrow Buttons (Matching Screenshot) */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={isBn ? "পূর্ববর্তী উদ্যোগ" : "Previous startup"}
                  className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={isBn ? "পরবর্তী উদ্যোগ" : "Next startup"}
                  className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            FULL-BLEED CAROUSEL SLIDER (Exactly 3 Startups with Full Cover Images)
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
          {FEATURED_STARTUPS.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={item.id}
                style={{ scrollSnapAlign: "start" }}
                onClick={() => {
                  if (item.website) {
                    window.open(item.website, "_blank", "noopener,noreferrer");
                  } else {
                    onOpenListingModal();
                  }
                }}
                className={`portfolio-card shrink-0 w-[86vw] sm:w-[65vw] md:w-[50vw] lg:w-[48%] rounded-xl sm:rounded-2xl overflow-hidden relative cursor-pointer group aspect-[16/10] sm:aspect-[16/9.5] transition-all duration-500 ${
                  isActive
                    ? "ring-1 ring-brand/30 shadow-md"
                    : "opacity-95 hover:opacity-100"
                }`}
              >
                {/* 1. Full Cover Photo Banner (All graphics, headlines & device mockups inside) */}
                <Image
                  src={item.coverImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 48vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={index === 0}
                />

                {/* Subtle vignette gradient at bottom for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* 2. Left Bottom Corner: Startup Name / Logo (Matches ifarmer, pickaboo in screenshot) */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20 pointer-events-none">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            FOOTER CONTROLS: Dot Indicators & Slide Counter (3 Dots)
           ======================================================== */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            {FEATURED_STARTUPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToIndex(idx);
                }}
                aria-label={`Go to startup ${idx + 1}`}
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
      </div>

      {/* Organic river wave transition into dark Ambassadors section */}
      <RiverWaveDivider position="bottom" color="text-dark" flip={true} />
    </section>
  );
}
