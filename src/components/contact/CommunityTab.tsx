"use client";

import { SITE_CONFIG } from "@/data/content";
import { CheckCircle, Send, Users } from "lucide-react";
import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

interface CommunityTabProps {
  isBn: boolean;
}

export default function CommunityTab({ isBn }: CommunityTabProps) {
  const [commData, setCommData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "student",
    institution: "",
    note: "",
  });
  const [commSubmitting, setCommSubmitting] = useState(false);
  const [commSubmitted, setCommSubmitted] = useState(false);

  const handleCommSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommSubmitting(true);
    setTimeout(() => {
      setCommSubmitting(false);
      setCommSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া কমিউনিটিতে যোগ দিন"
              : "Join Startup Kushtia Community"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? "আইডিয়াধারী শিক্ষার্থী, নতুন উদ্যোক্তা, এসএমই, আইটি ফ্রিল্যান্সার বা মেন্টর হিসেবে নিবন্ধন করুন।"
              : "Connect as a student innovator, founder, SME, tech pro, or mentor."}
          </p>
        </div>
      </div>

      {commSubmitted ? (
        <div className="py-12 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-heading">
            {isBn
              ? "অভিনন্দন! আপনার আবেদন সফলভাবে গৃহীত হয়েছে"
              : "Welcome to Startup Kushtia!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া পরিবারের সদস্য হওয়ার জন্য ধন্যবাদ। খুব শীঘ্রই আমাদের কমিউনিটি টিম আপনার সাথে হোয়াটসঅ্যাপে যোগাযোগ করে অনবোর্ডিং নির্দেশিকা দেবে।"
              : "Thank you for joining our ecosystem. Our team will review your application and contact you via WhatsApp shortly."}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setCommSubmitted(false);
                setCommData({
                  name: "",
                  email: "",
                  phone: "",
                  category: "student",
                  institution: "",
                  note: "",
                });
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {isBn ? "অন্য আবেদন করুন" : "Submit Another"}
            </button>
            <a
              href={SITE_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs btn-hard flex items-center gap-2"
            >
              <Whatsapp className="w-4 h-4" />
              <span>
                {isBn ? "WhatsApp চ্যানেলে যুক্ত হোন" : "Join WhatsApp Channel"}
              </span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleCommSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার পূর্ণ নাম *" : "Full Name *"}
            </label>
            <input
              required
              type="text"
              placeholder={isBn ? "উদা: মাহির আদনান" : "e.g. Mahir Adnan"}
              value={commData.name}
              onChange={(e) =>
                setCommData({ ...commData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
              </label>
              <input
                required
                type="email"
                placeholder="name@example.com"
                value={commData.email}
                onChange={(e) =>
                  setCommData({
                    ...commData,
                    email: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "হোয়াটসঅ্যাপ / ফোন নম্বর *" : "WhatsApp / Phone *"}
              </label>
              <input
                required
                type="tel"
                placeholder="017XXXXXXXX"
                value={commData.phone}
                onChange={(e) =>
                  setCommData({
                    ...commData,
                    phone: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার ভূমিকা / ক্যাটাগরি *" : "Role / Category *"}
              </label>
              <select
                value={commData.category}
                onChange={(e) =>
                  setCommData({
                    ...commData,
                    category: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              >
                <option value="student">
                  {isBn
                    ? "আইডিয়াধারী শিক্ষার্থী (Student)"
                    : "Student with Idea"}
                </option>
                <option value="founder">
                  {isBn
                    ? "প্রাথমিক পর্যায়ের স্টার্টআপ প্রতিষ্ঠাতা"
                    : "Early-Stage Startup Founder"}
                </option>
                <option value="sme">
                  {isBn
                    ? "স্থানীয় ব্যবসা / এসএমই (SME)"
                    : "Local Business / SME"}
                </option>
                <option value="freelancer">
                  {isBn
                    ? "আইটি পেশাজীবী বা ফ্রিল্যান্সার"
                    : "Tech Freelancer / Professional"}
                </option>
                <option value="mentor">
                  {isBn ? "মেন্টর বা বিনিয়োগকারী" : "Mentor / Investor"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "শিক্ষা প্রতিষ্ঠান বা কোম্পানি"
                  : "Institution or Company"}
              </label>
              <input
                type="text"
                placeholder={
                  isBn
                    ? "উদা: ইসলামী বিশ্ববিদ্যালয় (IU) / নিজস্ব ব্যবসা"
                    : "e.g. Islamic University / Your Company"
                }
                value={commData.institution}
                onChange={(e) =>
                  setCommData({
                    ...commData,
                    institution: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "আপনার আইডিয়া বা আগ্রহ সংক্ষেপে লিখুন"
                : "Briefly describe your idea or goal"}
            </label>
            <textarea
              rows={3}
              placeholder={
                isBn
                  ? "কী ধরনের উদ্যোগ নিয়ে ভাবছেন বা আমাদের প্ল্যাটফর্ম থেকে কী সাহায্য চান..."
                  : "What are you building or looking for from Startup Kushtia?"
              }
              value={commData.note}
              onChange={(e) =>
                setCommData({ ...commData, note: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="submit"
              disabled={commSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2"
            >
              {commSubmitting ? (
                <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
              ) : (
                <>
                  <span>
                    {isBn
                      ? "কমিউনিটিতে আবেদন জমা দিন"
                      : "Submit Membership Application"}
                  </span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
