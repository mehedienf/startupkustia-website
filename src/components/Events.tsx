"use client";

import EventModal from "@/components/EventModal";
import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { EVENT_ITEMS } from "@/data/content";
import { EventItem } from "@/types";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plus,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

interface EventsProps {
  onOpenJoin?: () => void;
}

export default function Events({ onOpenJoin }: EventsProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  // Active filter tab: "upcoming" | "latest" | "all"
  const [activeTab, setActiveTab] = useState<"upcoming" | "latest" | "all">(
    "upcoming"
  );
  // Carousel index for upcoming events
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for opening event details modal
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Toggle for "See All" full grid view vs carousel view
  const [isExpandedView, setIsExpandedView] = useState(false);

  // Filter events based on active tab
  const filteredEvents = useMemo(() => {
    if (activeTab === "all") return EVENT_ITEMS;
    return EVENT_ITEMS.filter((item) => item.status === activeTab);
  }, [activeTab]);

  // Carousel items (upcoming events by default)
  const carouselItems = useMemo(() => {
    return EVENT_ITEMS.filter((item) => item.status === "upcoming");
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(0, carouselItems.length - 3)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < Math.max(0, carouselItems.length - 3) ? prev + 1 : 0
    );
  };

  const visibleCarouselItems = useMemo(() => {
    if (carouselItems.length <= 3) return carouselItems;
    return carouselItems.slice(currentIndex, currentIndex + 3);
  }, [carouselItems, currentIndex]);

  const handleOpenEventModal = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section
      id="events"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-dark text-white relative overflow-hidden text-left -mt-px"
    >
      <span id="pillars" className="sr-only" />

      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography-dark pointer-events-none opacity-50"
        aria-hidden="true"
      />

      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Top Header: Title/Subtitle on Top Left, SEE ALL on Top Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light sm:font-normal text-white tracking-tight leading-tight">
              {isBn ? (
                <>
                  আসন্ন <span className="text-brand-accent-light">ইভেন্টস</span>
                </>
              ) : (
                <>
                  Upcoming <span className="text-brand-accent-light">Events</span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-base text-slate-300 leading-relaxed mt-3">
              {isBn
                ? "কুষ্টিয়ার তরুণ উদ্যোক্তা, ফ্রিল্যান্সার ও প্রযুক্তিপ্রেমীদের জন্য আয়োজিত নিয়মিত মিটআপ, ওয়ার্কশপ ও ইনোভেশন বুটক্যাম্প। নেটওয়ার্ক গড়ুন ও আপনার ধারণাকে এগিয়ে নিন।"
                : "Regular meetups, workshops, and startup bootcamps designed to connect Kushtia's founders, tech builders, and innovators with growth opportunities."}
            </p>
          </div>

          {/* Right Side of Title Row: SEE ALL Button (or Filter Tabs if expanded) */}
          <div className="shrink-0 flex items-center">
            {!isExpandedView ? (
              <button
                type="button"
                onClick={() => setIsExpandedView(true)}
                className="inline-flex items-center gap-3 text-brand-accent-light hover:text-white font-bold text-sm tracking-wider uppercase group transition-colors py-2 bg-transparent hover:bg-transparent shadow-none border-none outline-none focus:outline-none focus:ring-0"
              >
                <span>{isBn ? "সবগুলো দেখুন" : "SEE ALL"}</span>
                <span className="w-9 h-9 rounded-full border-2 border-brand-accent-light/40 group-hover:border-brand-accent-light bg-transparent group-hover:bg-transparent shadow-none flex items-center justify-center transition-all group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-brand-accent-light group-hover:text-white" />
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15 shadow-sm text-xs font-medium">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeTab === "upcoming"
                      ? "bg-brand text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isBn ? "আসন্ন" : "Upcoming"}
                </button>
                <button
                  onClick={() => setActiveTab("latest")}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeTab === "latest"
                      ? "bg-brand text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isBn ? "পূর্ববর্তী / সর্বশেষ" : "Latest"}
                </button>
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeTab === "all"
                      ? "bg-brand text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isBn ? "সবগুলো" : "All"}
                </button>
              </div>
            )}
          </div>
        </div>

        {!isExpandedView ? (
          /* ========================================================
             DEFAULT VIEW (Full Width 3-Column Cards Grid)
             ======================================================== */
          <div className="space-y-8">
            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {visibleCarouselItems.map((event) => (
                <div
                  key={event.id}
                  onClick={() => handleOpenEventModal(event)}
                  className="group cursor-pointer bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/15 hover:border-brand-accent-light/50 flex flex-col justify-between relative"
                >
                  <div>
                    {/* Event Image */}
                    <div className="relative w-full aspect-[16/10] bg-dark/10 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={isBn ? event.titleBn : event.titleEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                      {/* PINNED DATE BADGE (Top-Right) */}
                      <div className="absolute top-0 right-3 z-10 bg-brand text-white text-center rounded-b-xl px-3 py-2 shadow-md border-b-2 border-brand-accent-light/60 min-w-[52px]">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">
                          {isBn ? event.dayOfWeekBn : event.dayOfWeekEn}
                        </div>
                        <div className="text-xl sm:text-2xl font-black leading-none mt-0.5">
                          {event.dayNumber}
                        </div>
                      </div>

                      {/* Category Tag (Top-Left) */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs border border-white/10">
                          {isBn ? event.categoryBn : event.categoryEn}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-base text-white group-hover:text-brand-accent-light transition-colors line-clamp-1 mb-2">
                        {isBn ? event.titleBn : event.titleEn}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                        {isBn ? event.descBn : event.descEn}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-brand-accent-light shrink-0" />
                          <span>
                            {isBn ? event.monthBn : event.monthEn} {event.dayNumber},{" "}
                            {event.date.split("-")[0]} · {isBn ? event.timeBn : event.timeEn}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-brand-accent-light shrink-0" />
                          <span className="truncate">
                            {isBn ? event.locationBn : event.locationEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="p-4 sm:px-5 bg-white/[0.04] backdrop-blur-md flex items-center justify-between gap-3 border-t border-white/10">
                    <span className="text-xs font-semibold text-brand-accent-light group-hover:underline">
                      {isBn ? "বিস্তারিত দেখুন" : "View Details"}
                    </span>

                    {/* Interactive Plus Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEventModal(event);
                      }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand text-brand-accent-light hover:text-white border border-white/15 flex items-center justify-center shrink-0 transition-all shadow-sm group-hover:scale-110"
                      aria-label={
                        isBn
                          ? "ইভেন্টের বিস্তারিত দেখুন"
                          : "View event details"
                      }
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar: Slider Navigation (if > 3 items) & Fast Join WhatsApp Banner */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Pagination Controls or Status Counter */}
              {carouselItems.length > 3 ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {Array.from({
                      length: Math.max(1, carouselItems.length - 2),
                    }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentIndex === idx
                            ? "w-7 bg-brand-accent-light"
                            : "w-2 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-brand-accent-light/40 text-white hover:text-brand-accent-light flex items-center justify-center transition-all shadow-sm disabled:opacity-40"
                      aria-label="Previous events"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-brand-accent-light/40 text-white hover:text-brand-accent-light flex items-center justify-center transition-all shadow-sm"
                      aria-label="Next events"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    {isBn
                      ? "আসন্ন সকল সেশনের উন্মুক্ত রেজিস্ট্রেশন চলছে"
                      : "Upcoming sessions are open for registration"}
                  </span>
                </div>
              )}

              {/* Community Fast Join Box */}
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-brand-accent-light flex items-center justify-center shrink-0 border border-white/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {isBn ? "নতুন ইভেন্টের আপডেট চান?" : "Want Next Event Updates?"}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {isBn
                        ? "হোয়াটসঅ্যাপ চ্যানেলে সবার আগে জানুন"
                        : "Get direct invites via WhatsApp Channel"}
                    </p>
                  </div>
                </div>
                {onOpenJoin ? (
                  <button
                    type="button"
                    onClick={onOpenJoin}
                    className="px-3.5 py-1.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-all shadow-sm shrink-0 hover:scale-105"
                  >
                    {isBn ? "যুক্ত হোন" : "Join"}
                  </button>
                ) : (
                  <a
                    href="https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-all shadow-sm shrink-0 hover:scale-105"
                  >
                    {isBn ? "যুক্ত হোন" : "Join"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             EXPANDED VIEW (Triggered by "SEE ALL")
             Shows all upcoming & latest events with filter tabs & back toggle
             ======================================================== */
          <div className="space-y-8 animate-fade-in">
            {/* Header with Title and "Back to Highlights" */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light sm:font-normal text-white">
                  {isBn ? "সকল ইভেন্ট ও আর্কাইভ" : "All Events & Sessions"}
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  {isBn
                    ? "কুষ্টিয়া স্টার্টআপ ইকোসিস্টেমের অতীত ও ভবিষ্যৎ সকল সেশনের তালিকা।"
                    : "Complete archive of past gatherings and upcoming masterclasses in Kushtia."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsExpandedView(false)}
                className="self-start sm:self-center px-4 py-2 rounded-full border border-white/20 hover:border-brand-accent-light/60 bg-white/10 backdrop-blur-md text-white hover:text-brand-accent-light text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isBn ? "সংক্ষিপ্ত ভিউতে ফিরুন" : "Back to Highlights"}</span>
              </button>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const isUpcoming = event.status === "upcoming";
                return (
                  <div
                    key={event.id}
                    onClick={() => handleOpenEventModal(event)}
                    className="group cursor-pointer bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/15 hover:border-brand-accent-light/50 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image & Date Badge */}
                      <div className="relative w-full aspect-[16/10] bg-dark/10 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={isBn ? event.titleBn : event.titleEn}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Top-Right Date Badge */}
                        <div className="absolute top-0 right-3 z-10 bg-brand text-white text-center rounded-b-xl px-2.5 py-1.5 shadow-md border-b-2 border-brand-accent-light/60 min-w-[48px]">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-white/90">
                            {isBn ? event.dayOfWeekBn : event.dayOfWeekEn}
                          </div>
                          <div className="text-lg font-black leading-none mt-0.5">
                            {event.dayNumber}
                          </div>
                        </div>

                        {/* Status / Category Badges */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs border border-white/10">
                            {isBn ? event.categoryBn : event.categoryEn}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              isUpcoming
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-700/80 text-white"
                            }`}
                          >
                            {isUpcoming
                              ? isBn
                                ? "আসন্ন"
                                : "Upcoming"
                              : isBn
                              ? "সম্পন্ন"
                              : "Past"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-base text-white group-hover:text-brand-accent-light transition-colors line-clamp-1 mb-2">
                          {isBn ? event.titleBn : event.titleEn}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                          {isBn ? event.descBn : event.descEn}
                        </p>

                        <div className="space-y-1.5 text-xs text-slate-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-brand-accent-light flex-shrink-0" />
                            <span>
                              {isBn ? event.monthBn : event.monthEn} {event.dayNumber},{" "}
                              {event.date.split("-")[0]} · {isBn ? event.timeBn : event.timeEn}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-brand-accent-light flex-shrink-0" />
                            <span className="truncate">
                              {isBn ? event.locationBn : event.locationEn}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-3.5 bg-white/[0.04] border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-accent-light group-hover:underline">
                        {isBn ? "বিস্তারিত দেখুন" : "View Details"}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-brand text-brand-accent-light group-hover:text-white border border-white/15 flex items-center justify-center transition-colors">
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Event Details Interactive Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
      />

      {/* Organic river wave transition into Portfolio section */}
      <RiverWaveDivider position="bottom" color="text-brand-soft" />
    </section>
  );
}
