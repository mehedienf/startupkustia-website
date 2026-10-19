"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { TEAM_MEMBERS } from "@/data/content";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Team() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalMembers = TEAM_MEMBERS.length;
  const activeMember = TEAM_MEMBERS[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      // Allow animation to settle
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), 500);
    },
    [activeIndex, isTransitioning],
  );

  const handleNext = useCallback(() => {
    const next = (activeIndex + 1) % totalMembers;
    goTo(next);
  }, [activeIndex, totalMembers, goTo]);

  const handlePrev = useCallback(() => {
    const prev = (activeIndex - 1 + totalMembers) % totalMembers;
    goTo(prev);
  }, [activeIndex, totalMembers, goTo]);

  // Auto-rotation every 5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalMembers;
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalMembers]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      )
        return;

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

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
        {/* ─── Section Header ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light sm:font-normal text-heading tracking-tight leading-tight">
              {isBn ? "যাঁদের হাত ধরে শুরু" : "Meet the Team"}
            </h2>
            <p className="mt-3 text-base text-[#444E69] max-w-lg">
              {isBn
                ? "সাত সদস্যের একটি ফাউন্ডিং টিম, যাঁদের প্রত্যেকের রয়েছে নির্দিষ্ট দায়িত্ব ও কুষ্টিয়াকে এগিয়ে নেওয়ার অঙ্গীকার।"
                : "Dedicated leaders committed to catalyzing Kushtia's entrepreneurship ecosystem."}
            </p>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              aria-label={isBn ? "পূর্ববর্তী সদস্য" : "Previous member"}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label={isBn ? "পরবর্তী সদস্য" : "Next member"}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:border-brand hover:bg-brand hover:text-white text-slate-700 transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── Spotlight Hero Card ─── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-white/80">
            <div className="flex flex-col lg:flex-row">
              {/* Left: Large Photo */}
              <div className="relative lg:w-[45%] xl:w-[42%] shrink-0">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] overflow-hidden bg-slate-100">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div
                      key={member.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        idx === activeIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.nameEn}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover object-top"
                          priority={idx === 0}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dark to-dark-surface text-white flex items-center justify-center font-bold text-6xl">
                          <span className="text-brand-accent-light">
                            {member.nameEn.split(" ")[0][0]}
                          </span>
                          <span>{member.nameEn.split(" ")[1]?.[0] || ""}</span>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none lg:hidden" />

                  {/* Member count badge — mobile */}
                  <div className="absolute top-4 left-4 lg:hidden">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      {activeIndex + 1} / {totalMembers}
                    </span>
                  </div>

                  {/* Mobile bottom name overlay */}
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {isBn ? activeMember.nameBn : activeMember.nameEn}
                    </h3>
                    <span className="inline-flex mt-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand text-white shadow-xs">
                      {isBn ? activeMember.roleBn : activeMember.roleEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Info Panel */}
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-14">
                {/* Top section: Number, Name, Role */}
                <div>
                  {/* Decorative large number */}
                  <div className="hidden lg:flex items-center gap-4 mb-6">
                    <span className="text-7xl xl:text-8xl font-black text-brand/10 leading-none select-none tabular-nums">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="h-12 w-px bg-slate-200" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {isBn
                        ? `${totalMembers} জনের মধ্যে ${activeIndex + 1}`
                        : `${activeIndex + 1} of ${totalMembers}`}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="hidden lg:block">
                    <h3 className="text-3xl xl:text-4xl font-extrabold text-heading tracking-tight transition-all duration-300">
                      {isBn ? activeMember.nameBn : activeMember.nameEn}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand text-white shadow-xs">
                        {isBn ? activeMember.roleBn : activeMember.roleEn}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block my-6 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

                  {/* Designation / Responsibility */}
                  <div className="mt-4 lg:mt-0">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {isBn ? "দায়িত্ব" : "Responsibility"}
                    </p>
                    <p className="text-base sm:text-lg text-[#444E69] leading-relaxed font-medium">
                      {isBn
                        ? activeMember.designationBn
                        : activeMember.designationEn}
                    </p>
                  </div>

                  {/* Location & Chapter */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-soft border border-brand-border/50 text-brand text-xs font-semibold">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {isBn ? "কুষ্টিয়া চ্যাপ্টার" : "Kushtia Chapter"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                      {isBn ? activeMember.categoryBn : activeMember.categoryEn}
                    </span>
                  </div>
                </div>

                {/* Bottom: Socials */}
                <div className="mt-8 lg:mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href="mailto:startupkushtia@gmail.com"
                    aria-label={`Email ${activeMember.nameEn}`}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-brand hover:text-white text-slate-500 flex items-center justify-center transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  {activeMember.socials?.linkedin && (
                    <a
                      href={activeMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn for ${activeMember.nameEn}`}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-brand hover:text-white text-slate-500 flex items-center justify-center transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37z" />
                      </svg>
                    </a>
                  )}
                  {activeMember.socials?.facebook && (
                    <a
                      href={activeMember.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Facebook for ${activeMember.nameEn}`}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-brand hover:text-white text-slate-500 flex items-center justify-center transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Thumbnail Avatar Strip ─── */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4">
          {TEAM_MEMBERS.map((member, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={member.id}
                onClick={() => goTo(idx)}
                aria-label={member.nameEn}
                className={`relative rounded-full transition-all duration-500 cursor-pointer group ${
                  isActive
                    ? "ring-2 ring-brand ring-offset-2 ring-offset-brand-soft scale-110"
                    : "opacity-60 hover:opacity-90 hover:scale-105"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-full bg-slate-200 transition-all duration-500 ${
                    isActive
                      ? "w-14 h-14 sm:w-16 sm:h-16"
                      : "w-10 h-10 sm:w-12 sm:h-12"
                  }`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.nameEn}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-dark to-dark-surface text-white flex items-center justify-center font-bold text-sm">
                      {member.nameEn.split(" ")[0][0]}
                      {member.nameEn.split(" ")[1]?.[0] || ""}
                    </div>
                  )}
                </div>

                {/* Active indicator name tooltip — desktop */}
                {isActive && (
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap hidden sm:block">
                    <span className="text-[11px] font-bold text-brand">
                      {isBn
                        ? member.nameBn.split(" ")[0]
                        : member.nameEn.split(" ")[0]}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-10 sm:mt-12 max-w-md mx-auto">
          <div className="h-1 rounded-full bg-slate-200/80 overflow-hidden">
            <div
              className="h-full bg-brand rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((activeIndex + 1) / totalMembers) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Organic river wave transition into Faq section */}
      <RiverWaveDivider position="bottom" color="text-white" />
    </section>
  );
}
