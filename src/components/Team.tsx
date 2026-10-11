"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { TEAM_MEMBERS } from "@/data/content";
import { ChevronLeft, ChevronRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive visible card calculation
  useEffect(() => {
    const updateVisible = () => {
      let count = 4;
      if (window.innerWidth < 640) {
        count = 1;
      } else if (window.innerWidth < 1024) {
        count = 2;
      } else if (window.innerWidth < 1280) {
        count = 3;
      } else {
        count = 4;
      }
      setVisibleCount(count);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, TEAM_MEMBERS.length - count)),
      );
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, TEAM_MEMBERS.length - visibleCount);

  // Auto-slide every 4.5s with pause on hover
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch swipe support for mobile / tablet
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
      id="team"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-brand-soft relative overflow-hidden select-none"
    >
      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse" />
              <span>{isBn ? "কোর টিম" : "Core Leadership"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
              {isBn ? "যাঁদের হাত ধরে শুরু" : "Meet the Founding Team"}
            </h2>
            <p className="mt-3 text-base text-[#444E69]">
              {isBn
                ? "সাত সদস্যের একটি ফাউন্ডিং টিম, যাঁদের প্রত্যেকের রয়েছে নির্দিষ্ট দায়িত্ব ও কুষ্টিয়াকে এগিয়ে নেওয়ার অঙ্গীকার।"
                : "Dedicated leaders committed to catalyzing Kushtia’s entrepreneurship ecosystem."}
            </p>
          </div>

          {/* Controls: Slide Counter & Nav Arrows */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span>
                {isBn
                  ? `সদস্য ${currentIndex + 1} - ${Math.min(
                      currentIndex + visibleCount,
                      TEAM_MEMBERS.length,
                    )} / ${TEAM_MEMBERS.length}`
                  : `${currentIndex + 1} - ${Math.min(
                      currentIndex + visibleCount,
                      TEAM_MEMBERS.length,
                    )} of ${TEAM_MEMBERS.length}`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label={isBn ? "পূর্ববর্তী স্লাইড" : "Previous slide"}
                className="w-11 h-11 rounded-full border border-slate-200/90 bg-white text-heading hover:text-white hover:bg-brand hover:border-brand active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label={isBn ? "পরবর্তী স্লাইড" : "Next slide"}
                className="w-11 h-11 rounded-full border border-slate-200/90 bg-white text-heading hover:text-white hover:bg-brand hover:border-brand active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Single-Row Viewport */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="px-3 shrink-0"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <div className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full group transition-all duration-300">
                  <div>
                    {/* Member Cover Photo (1:1 Square) */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.nameEn}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dark to-dark-surface text-white flex items-center justify-center font-bold text-3xl">
                          <span className="text-brand-accent-light">
                            {member.nameEn.split(" ")[0][0]}
                          </span>
                          <span>{member.nameEn.split(" ")[1]?.[0] || ""}</span>
                        </div>
                      )}

                      {/* Floating Role Pill Badge */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand text-white shadow-xs tracking-wide">
                          {isBn ? member.roleBn : member.roleEn}
                        </span>
                      </div>
                    </div>

                    {/* Member Name */}
                    <h3 className="text-lg font-bold text-heading group-hover:text-brand transition-colors">
                      {isBn ? member.nameBn : member.nameEn}
                    </h3>

                    {/* Responsibility & Designation */}
                    <p className="text-xs text-[#525D7A] font-medium leading-relaxed mt-1.5 min-h-[36px] line-clamp-2">
                      {isBn ? member.designationBn : member.designationEn}
                    </p>
                  </div>

                  {/* Card Footer: Location badge & Socials */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand/70" />
                      {isBn ? "কুষ্টিয়া চ্যাপ্টার" : "Kushtia Chapter"}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <a
                        href="mailto:startupkushtia@gmail.com"
                        aria-label={`Email ${member.nameEn}`}
                        className="p-1.5 rounded-lg hover:bg-brand-soft hover:text-brand transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn for ${member.nameEn}`}
                          className="p-1.5 rounded-lg hover:bg-brand-soft hover:text-brand transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37z" />
                          </svg>
                        </a>
                      )}
                      {member.socials?.facebook && (
                        <a
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Facebook for ${member.nameEn}`}
                          className="p-1.5 rounded-lg hover:bg-brand-soft hover:text-brand transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Progress Dots */}
        {maxIndex > 0 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-brand"
                    : "w-2.5 bg-slate-300/80 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Organic river wave transition into Faq section */}
      <RiverWaveDivider position="bottom" color="text-white" />
    </section>
  );
}
