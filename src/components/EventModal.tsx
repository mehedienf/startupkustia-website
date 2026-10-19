"use client";

import { useLanguage } from "@/context/LanguageContext";
import { EventItem } from "@/types";
import {
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Share2,
  Users,
  Video,
  X,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface EventModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen || !event) return null;

  const isBn = language === "bn";
  const isUpcoming = event.status === "upcoming";

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(isBn ? event.titleBn : event.titleEn);
    const details = encodeURIComponent(isBn ? event.descBn : event.descEn);
    const location = encodeURIComponent(
      isBn ? event.locationBn : event.locationEn
    );
    // Format YYYYMMDD
    const dateFormatted = event.date.replace(/-/g, "");
    const dates = `${dateFormatted}T090000Z/${dateFormatted}T130000Z`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-brand-border/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image & Close button */}
        <div className="relative w-full h-56 sm:h-64 bg-dark/90 flex-shrink-0">
          <Image
            src={event.image}
            alt={isBn ? event.titleBn : event.titleEn}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top-left Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand text-white shadow-sm">
              {isBn ? event.categoryBn : event.categoryEn}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs shadow-sm ${
                isUpcoming
                  ? "bg-emerald-500/90 text-white"
                  : "bg-white/20 text-white border border-white/30"
              }`}
            >
              {isUpcoming
                ? isBn
                  ? "আসন্ন"
                  : "Upcoming"
                : isBn
                ? "সম্পন্ন"
                : "Completed"}
            </span>
          </div>

          {/* Date Stamp pinned on image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 bg-brand text-white rounded-xl shadow-md text-center min-w-[56px]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                  {isBn ? event.dayOfWeekBn : event.dayOfWeekEn}
                </div>
                <div className="text-xl font-extrabold leading-tight">
                  {event.dayNumber}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-white/80">
                  {isBn ? event.monthBn : event.monthEn} · {event.date.split("-")[0]}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-xs line-clamp-1">
                  {isBn ? event.titleBn : event.titleEn}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-brand-soft border border-brand-border/40 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-[#333E55]">
              <Clock className="w-4 h-4 text-brand flex-shrink-0" />
              <span>{isBn ? event.timeBn : event.timeEn}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#333E55]">
              {event.venueType === "online" ? (
                <Video className="w-4 h-4 text-brand flex-shrink-0" />
              ) : (
                <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
              )}
              <span className="truncate">
                {isBn ? event.locationBn : event.locationEn}
              </span>
            </div>
            {event.capacity && (
              <div className="flex items-center gap-2.5 text-[#333E55]">
                <Users className="w-4 h-4 text-brand flex-shrink-0" />
                <span>
                  {isBn ? `ধারণক্ষমতা: ${event.capacity} জন` : `Capacity: ${event.capacity} seats`}
                </span>
              </div>
            )}
            {event.registrationDeadlineBn && isUpcoming && (
              <div className="flex items-center gap-2.5 text-[#333E55]">
                <Calendar className="w-4 h-4 text-brand flex-shrink-0" />
                <span>
                  {isBn
                    ? `রেজিস্ট্রেশন শেষ: ${event.registrationDeadlineBn}`
                    : `Deadline: ${event.registrationDeadlineEn}`}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "ইভেন্ট বিবরণ" : "About This Event"}
            </h4>
            <p className="text-sm text-[#444E69] leading-relaxed">
              {isBn ? event.descBn : event.descEn}
            </p>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">
                {isBn ? "আমন্ত্রিত বক্তা ও মেন্টর" : "Featured Speakers"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-brand-border/60 flex items-center gap-3 shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-soft2 border border-brand-accent-light/50 flex items-center justify-center text-brand font-bold text-sm">
                      {speaker.nameEn.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-heading truncate">
                        {isBn ? speaker.nameBn : speaker.nameEn}
                      </p>
                      <p className="text-xs text-[#55607c] truncate">
                        {isBn ? speaker.roleBn : speaker.roleEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-brand-soft text-[#444E69] text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-gray-50/80 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl border border-gray-200 hover:border-brand/40 bg-white text-xs font-semibold text-[#444E69] hover:text-brand flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">
                    {isBn ? "কপি হয়েছে" : "Copied"}
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>{isBn ? "শেয়ার" : "Share"}</span>
                </>
              )}
            </button>

            {isUpcoming && (
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl border border-gray-200 hover:border-brand/40 bg-white text-xs font-semibold text-[#444E69] hover:text-brand flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                <span>{isBn ? "ক্যালেন্ডার" : "Add to Cal"}</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isUpcoming && event.registrationUrl ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>{isBn ? "রেজিস্ট্রেশন করুন" : "Register Now"}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="px-4 py-2.5 bg-gray-200 text-gray-500 text-xs sm:text-sm font-semibold rounded-xl cursor-not-allowed"
              >
                {isBn ? "রেজিস্ট্রেশন বন্ধ" : "Registration Closed"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

