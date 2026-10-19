"use client";

import { SITE_CONFIG } from "@/data/content";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Facebook, Whatsapp } from "react-bootstrap-icons";

interface ContactSidebarProps {
  isBn: boolean;
}

export default function ContactSidebar({ isBn }: ContactSidebarProps) {
  return (
    <div className="space-y-6">
      {/* WhatsApp Fast Channel Card */}
      <div className="bg-dark text-white rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light">
            <Whatsapp className="w-6 h-6" />
          </div>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-light/15 text-brand-accent-light text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-brand-accent-light animate-pulse"></span>
            <span>{isBn ? "লাইভ আপডেট" : "Live Updates"}</span>
          </span>
        </div>

        <h3 className="text-lg font-black text-white mb-2">
          {isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-5">
          {isBn
            ? "সকল ইভেন্ট আপডেট, নতুন সুযোগ ও সরাসরি ঘোষণার সাথে যুক্ত থাকতে আমাদের অফিশিয়াল হোয়াটসঅ্যাপ চ্যানেলে যোগ দিন।"
            : "Join our official WhatsApp channel for real-time announcements, founder events, and ecosystem opportunities."}
        </p>

        <a
          href={SITE_CONFIG.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs btn-hard flex items-center justify-center gap-2 transition-all"
        >
          <Whatsapp className="w-4 h-4" />
          <span>
            {isBn ? "চ্যানেলে যুক্ত হোন" : "Join WhatsApp Channel"}
          </span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Direct Info Card: Email & Location */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 space-y-5">
        <h3 className="text-base font-black text-heading uppercase tracking-wider">
          {isBn ? "অফিশিয়াল চ্যানেলসমূহ" : "Official Channels"}
        </h3>

        {/* Email Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? "অফিশিয়াল ইমেইল" : "Official Email"}
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm font-bold text-heading hover:text-brand transition-colors break-all"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Location Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? "ভৌগোলিক কেন্দ্র" : "Hub Location"}
            </div>
            <div className="text-sm font-bold text-heading">
              {isBn
                ? "কুষ্টিয়া সদর, কুষ্টিয়া, বাংলাদেশ"
                : "Kushtia Sadar, Kushtia, Bangladesh"}
            </div>
          </div>
        </div>

        {/* Facebook Page Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? "অফিশিয়াল ফেসবুক পেজ" : "Official Facebook Page"}
            </div>
            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-heading hover:text-brand transition-colors inline-flex items-center gap-1.5"
            >
              <span>facebook.com/startupkushtia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* WhatsApp Channel Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Whatsapp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
            </div>
            <a
              href={SITE_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-heading hover:text-brand transition-colors inline-flex items-center gap-1.5"
            >
              <span>{isBn ? "চ্যানেলে যুক্ত হোন" : "Join Channel"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Response Guarantee */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
          <Clock className="w-4 h-4 text-brand shrink-0" />
          <span>
            {isBn
              ? "সাধারণত ২৪ ঘণ্টার মধ্যে প্রতিটি বার্তার উত্তর দেওয়া হয়।"
              : "We typically respond to all inquiries within 24 hours."}
          </span>
        </div>
      </div>

      {/* Ecosystem Callout Card */}
      <div className="bg-brand-soft rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-brand-hover font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-brand" />
          <span>{isBn ? "আমাদের অঙ্গীকার" : "Our Commitment"}</span>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          {isBn
            ? "কুষ্টিয়ার প্রতিটি উদ্যোক্তা, শিক্ষার্থী ও উদ্ভাবকের উদ্যোগকে সামনে এগিয়ে নিতে আমরা অঙ্গীকারবদ্ধ। আপনার প্রশ্ন বা আইডিয়া কখনোই ছোট নয়।"
            : "We are dedicated to supporting every founder, student, and business across Kushtia. No idea is too small to begin with."}
        </p>
      </div>
    </div>
  );
}
