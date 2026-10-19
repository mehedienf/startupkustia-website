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
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < carouselItems.length - 2 ? prev + 1 : 0
    );
  };

  const handleOpenEventModal = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section
      id="events"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-white relative overflow-hidden text-left -mt-px"
    >
      <span id="pillars" className="sr-only" />

      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Top Header Pill */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse" />
            <span>{isBn ? "ইভেন্টস ও সেশন" : "Events & Sessions"}</span>
          </div>

          {/* Filter Pills if in Expanded View */}
          {isExpandedView && (
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-brand-border/50 shadow-2xs text-xs font-medium">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === "upcoming"
                    ? "bg-brand text-white font-bold"
                    : "text-[#444E69] hover:text-brand"
                }`}
              >
                {isBn ? "আসন্ন" : "Upcoming"}
              </button>
              <button
                onClick={() => setActiveTab("latest")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === "latest"
                    ? "bg-brand text-white font-bold"
                    : "text-[#444E69] hover:text-brand"
                }`}
              >
                {isBn ? "পূর্ববর্তী / সর্বশেষ" : "Latest"}
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === "all"
                    ? "bg-brand text-white font-bold"
                    : "text-[#444E69] hover:text-brand"
                }`}
              >
                {isBn ? "সবগুলো" : "All"}
              </button>
            </div>
          )}
        </div>

        {!isExpandedView ? (
          /* ========================================================
             DEFAULT VIEW (Exact Match to eeee.webp Reference Design)
             Left: Carousel cards with pinned date badge & bottom + icon
             Right: Stylized "Upcoming Events", copy, and "SEE ALL" link
             ======================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: CAROUSEL CARDS & CONTROLS (cols 1 to 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Cards Container (Shows 2 cards side by side on md+, 1 on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {carouselItems
                  .slice(currentIndex, currentIndex + 2)
                  .map((event) => (
                    <div
                      key={event.id}
                      onClick={() => handleOpenEventModal(event)}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border/60 flex flex-col relative"
                    >
                      {/* Event Image */}
                      <div className="relative w-full aspect-[4/3.5] bg-dark/10 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={isBn ? event.titleBn : event.titleEn}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* PINNED DATE BADGE (Top-Right as in eeee.webp) */}
                        <div className="absolute top-0 right-3 z-10 bg-brand text-white text-center rounded-b-xl px-3 py-2 shadow-md border-b-2 border-brand-accent-light/40 min-w-[52px]">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">
                            {isBn ? event.dayOfWeekBn : event.dayOfWeekEn}
                          </div>
                          <div className="text-xl sm:text-2xl font-black leading-none mt-0.5">
                            {event.dayNumber}
                          </div>
                        </div>

                        {/* Category Tag (Top-Left) */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                            {isBn ? event.categoryBn : event.categoryEn}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Footer Bar: Event Name + Action Plus Button */}
                      <div className="p-4 sm:p-5 bg-white flex items-center justify-between gap-3 border-t border-brand-border/40">
                        <div className="min-w-0 pr-2">
                          <h3 className="font-bold text-sm sm:text-base text-heading group-hover:text-brand transition-colors truncate">
                            {isBn ? event.titleBn : event.titleEn}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-xs text-[#55607c]">
                            <span className="truncate">
                              {isBn ? event.locationBn : event.locationEn}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Plus Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenEventModal(event);
                          }}
                          className="w-8 h-8 rounded-full bg-brand-soft hover:bg-brand text-brand hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs group-hover:scale-110"
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

              {/* Slider Bottom Controls: Left Pagination Dots & Right Arrows */}
              <div className="mt-8 flex items-center justify-between pt-2">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {Array.from({
                    length: Math.max(1, carouselItems.length - 1),
                  }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? "w-7 bg-brand"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white hover:bg-brand-soft border border-brand-border/60 hover:border-brand/40 text-heading hover:text-brand flex items-center justify-center transition-all shadow-2xs disabled:opacity-40"
                    aria-label="Previous events"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-white hover:bg-brand-soft border border-brand-border/60 hover:border-brand/40 text-heading hover:text-brand flex items-center justify-center transition-all shadow-2xs"
                    aria-label="Next events"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SECTION INFO & "SEE ALL" LINK WITH ARCHITECTURAL OUTLINE (cols 8 to 12) */}
            <div className="lg:col-span-5 relative">
              {/* Subtle Architectural Framing Line behind the content box */}
              <div
                className="hidden lg:block absolute -top-8 -bottom-8 -left-6 -right-6 rounded-3xl border border-brand-border/40 pointer-events-none"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 0)",
                }}
              />

              <div className="relative z-10 lg:pl-6 space-y-5">
                {/* Stylized Eyebrow / Headline */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-tight">
                    {isBn ? (
                      <>
                        আসন্ন <span className="sk-hl italic">ইভেন্টস</span>
                      </>
                    ) : (
                      <>
                        Upcoming <span className="sk-hl italic">Events</span>
                      </>
                    )}
                  </h2>
                </div>

                {/* Subtitle Description */}
                <p className="text-base text-[#444E69] leading-relaxed">
                  {isBn
                    ? "কুষ্টিয়ার তরুণ উদ্যোক্তা, ফ্রিল্যান্সার ও প্রযুক্তিপ্রেমীদের জন্য আয়োজিত নিয়মিত মিটআপ, ওয়ার্কশপ ও ইনোভেশন বুটক্যাম্প। নেটওয়ার্ক গড়ুন ও আপনার ধারণাকে এগিয়ে নিন।"
                    : "Regular meetups, workshops, and startup bootcamps designed to connect Kushtia's founders, tech builders, and innovators with growth opportunities."}
                </p>

                {/* SEE ALL Button with Circled Arrow */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsExpandedView(true)}
                    className="inline-flex items-center gap-3 text-brand hover:text-brand-hover font-bold text-sm tracking-wider uppercase group transition-colors"
                  >
                    <span>{isBn ? "সবগুলো দেখুন" : "SEE ALL"}</span>
                    <span className="w-8 h-8 rounded-full border-2 border-brand/40 group-hover:border-brand flex items-center justify-center transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-brand" />
                    </span>
                  </button>
                </div>

                {/* Community Fast Join Box */}
                <div className="pt-4">
                  <div className="p-4 rounded-2xl bg-white border border-brand-border/50 shadow-2xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-heading">
                          {isBn ? "নতুন ইভেন্টের আপডেট চান?" : "Want Next Event Updates?"}
                        </p>
                        <p className="text-[11px] text-[#55607c]">
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
                        className="px-3.5 py-1.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-colors flex-shrink-0"
                      >
                        {isBn ? "যুক্ত হোন" : "Join"}
                      </button>
                    ) : (
                      <a
                        href="https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-colors flex-shrink-0"
                      >
                        {isBn ? "যুক্ত হোন" : "Join"}
                      </a>
                    )}
                  </div>
                </div>
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/50">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                  {isBn ? "সকল ইভেন্ট ও আর্কাইভ" : "All Events & Sessions"}
                </h2>
                <p className="text-sm text-[#444E69] mt-1">
                  {isBn
                    ? "কুষ্টিয়া স্টার্টআপ ইকোসিস্টেমের অতীত ও ভবিষ্যৎ সকল সেশনের তালিকা।"
                    : "Complete archive of past gatherings and upcoming masterclasses in Kushtia."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsExpandedView(false)}
                className="self-start sm:self-center px-4 py-2 rounded-full border border-brand-border/60 hover:border-brand bg-white text-brand text-xs font-bold flex items-center gap-2 shadow-2xs hover:bg-brand-soft transition-all"
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
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border/60 flex flex-col justify-between"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Top-Right Date Badge */}
                        <div className="absolute top-0 right-3 z-10 bg-brand text-white text-center rounded-b-xl px-2.5 py-1.5 shadow-md min-w-[48px]">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-white/90">
                            {isBn ? event.dayOfWeekBn : event.dayOfWeekEn}
                          </div>
                          <div className="text-lg font-black leading-none mt-0.5">
                            {event.dayNumber}
                          </div>
                        </div>

                        {/* Status / Category Badges */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
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
                        <h3 className="font-bold text-base text-heading group-hover:text-brand transition-colors line-clamp-1 mb-2">
                          {isBn ? event.titleBn : event.titleEn}
                        </h3>
                        <p className="text-xs text-[#444E69] line-clamp-2 leading-relaxed mb-4">
                          {isBn ? event.descBn : event.descEn}
                        </p>

                        <div className="space-y-1.5 text-xs text-[#55607c]">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                            <span>
                              {isBn ? event.monthBn : event.monthEn} {event.dayNumber},{" "}
                              {event.date.split("-")[0]} · {isBn ? event.timeBn : event.timeEn}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                            <span className="truncate">
                              {isBn ? event.locationBn : event.locationEn}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-3.5 bg-gray-50/80 border-t border-brand-border/40 flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand group-hover:underline">
                        {isBn ? "বিস্তারিত দেখুন" : "View Details"}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-brand-soft group-hover:bg-brand text-brand group-hover:text-white flex items-center justify-center transition-colors">
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
