"use client";

import { CheckCircle, GraduationCap, Send } from "lucide-react";
import React, { useState } from "react";

interface AmbassadorTabProps {
  isBn: boolean;
}

export default function AmbassadorTab({ isBn }: AmbassadorTabProps) {
  const [ambData, setAmbData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "Islamic University (IU), Kushtia",
    department: "",
    year: "",
    motivation: "",
  });
  const [ambSubmitting, setAmbSubmitting] = useState(false);
  const [ambSubmitted, setAmbSubmitted] = useState(false);

  const handleAmbSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAmbSubmitting(true);
    setTimeout(() => {
      setAmbSubmitting(false);
      setAmbSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "ক্যাম্পাস অ্যাম্বাসেডর আবেদন ফরম"
              : "Campus Ambassador Application"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? "নিজ ক্যাম্পাসে উদ্ভাবন ও উদ্যোক্তা সংস্কৃতি ছড়িয়ে দিতে নেতৃত্ব দিন।"
              : "Lead startup and innovation initiatives in your university or college."}
          </p>
        </div>
      </div>

      {ambSubmitted ? (
        <div className="py-12 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-heading">
            {isBn
              ? "আবেদনটি সফলভাবে জমা হয়েছে!"
              : "Application Submitted Successfully!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {isBn
              ? "আপনার ক্যাম্পাসে স্টার্টআপ কুষ্টিয়া টিমের প্রতিনিধি নির্বাচনের জন্য প্রাথমিক বাছাই সম্পন্ন করে আমরা আপনাকে ইন্টারভিউ এর জন্য কল বা মেসেজ করব।"
              : "Thank you for stepping forward to lead your campus. Our youth team will review your application and schedule an interview."}
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setAmbSubmitted(false);
                setAmbData({
                  name: "",
                  email: "",
                  phone: "",
                  campus: "Islamic University (IU), Kushtia",
                  department: "",
                  year: "",
                  motivation: "",
                });
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {isBn ? "অন্য আবেদন করুন" : "Submit Another"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleAmbSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার নাম *" : "Your Name *"}
            </label>
            <input
              required
              type="text"
              placeholder={isBn ? "আপনার পূর্ণ নাম" : "Your Full Name"}
              value={ambData.name}
              onChange={(e) => setAmbData({ ...ambData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "ইমেইল *" : "Email Address *"}
              </label>
              <input
                required
                type="email"
                placeholder="student@gmail.com"
                value={ambData.email}
                onChange={(e) =>
                  setAmbData({ ...ambData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "হোয়াটসঅ্যাপ / ফোন *" : "WhatsApp / Phone *"}
              </label>
              <input
                required
                type="tel"
                placeholder="01XXXXXXXXX"
                value={ambData.phone}
                onChange={(e) =>
                  setAmbData({ ...ambData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "ক্যাম্পাস / শিক্ষা প্রতিষ্ঠান *"
                : "Campus / Institution *"}
            </label>
            <select
              value={ambData.campus}
              onChange={(e) =>
                setAmbData({ ...ambData, campus: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            >
              <option value="Islamic University (IU), Kushtia">
                {isBn
                  ? "ইসলামী বিশ্ববিদ্যালয় (IU), কুষ্টিয়া"
                  : "Islamic University (IU), Kushtia"}
              </option>
              <option value="Kushtia Govt College">
                {isBn ? "কুষ্টিয়া সরকারি কলেজ" : "Kushtia Govt College"}
              </option>
              <option value="Kushtia Polytechnic Institute">
                {isBn
                  ? "কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট"
                  : "Kushtia Polytechnic Institute"}
              </option>
              <option value="Kushtia Medical College">
                {isBn ? "কুষ্টিয়া মেডিকেল কলেজ" : "Kushtia Medical College"}
              </option>
              <option value="Kushtia Govt Central College">
                {isBn
                  ? "কুষ্টিয়া সরকারি মহিলা / সেন্ট্রাল কলেজ"
                  : "Kushtia Govt Central / Women College"}
              </option>
              <option value="Other">
                {isBn
                  ? "কুষ্টিয়ার অন্যান্য শিক্ষা প্রতিষ্ঠান"
                  : "Other College / Institute in Kushtia"}
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "বিভাগ / বিষয় *" : "Department / Field *"}
              </label>
              <input
                required
                type="text"
                placeholder={
                  isBn
                    ? "যেমন: সিএসই, বিবিএ, ইইই"
                    : "e.g. CSE, BBA, EEE, English"
                }
                value={ambData.department}
                onChange={(e) =>
                  setAmbData({
                    ...ambData,
                    department: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "বর্ষ / সেমিস্টার *" : "Academic Year *"}
              </label>
              <input
                required
                type="text"
                placeholder={isBn ? "যেমন: ২য় বর্ষ" : "e.g. 2nd Year"}
                value={ambData.year}
                onChange={(e) =>
                  setAmbData({ ...ambData, year: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "কেন ক্যাম্পাস অ্যাম্বাসেডর হতে চান?"
                : "Why do you want to be an Ambassador?"}
            </label>
            <textarea
              rows={3}
              placeholder={
                isBn
                  ? "আপনার নেতৃত্ব, পূর্ব অভিজ্ঞতা বা আগ্রহের কথা লিখুন..."
                  : "Describe your leadership enthusiasm and plans..."
              }
              value={ambData.motivation}
              onChange={(e) =>
                setAmbData({
                  ...ambData,
                  motivation: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="submit"
              disabled={ambSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2"
            >
              {ambSubmitting ? (
                <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
              ) : (
                <>
                  <span>
                    {isBn
                      ? "অ্যাম্বাসেডর আবেদন জমা দিন"
                      : "Submit Ambassador Application"}
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
