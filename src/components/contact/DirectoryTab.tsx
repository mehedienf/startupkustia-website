"use client";

import { Building2, CheckCircle, Send } from "lucide-react";
import React, { useState } from "react";

interface DirectoryTabProps {
  isBn: boolean;
}

export default function DirectoryTab({ isBn }: DirectoryTabProps) {
  const [dirData, setDirData] = useState({
    businessName: "",
    founderName: "",
    category: "সফটওয়্যার ও আইটি",
    location: "",
    contact: "",
    website: "",
    description: "",
  });
  const [dirSubmitting, setDirSubmitting] = useState(false);
  const [dirSubmitted, setDirSubmitted] = useState(false);

  const handleDirSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDirSubmitting(true);
    setTimeout(() => {
      setDirSubmitting(false);
      setDirSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "কুষ্টিয়ার ডিরেক্টরিতে তালিকাভুক্তি"
              : "List Your Venture in Directory"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? "কুষ্টিয়ার ব্যবসা ও স্টার্টআপের উন্মুক্ত ডিজিটাল ডিরেক্টরিতে আপনার উদ্যোগ অন্তর্ভুক্ত করুন।"
              : "Get discoverable by customers, investors, and local partners."}
          </p>
        </div>
      </div>

      {dirSubmitted ? (
        <div className="py-12 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-heading">
            {isBn
              ? "তালিকাভুক্তির আবেদন জমা হয়েছে!"
              : "Listing Request Received!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {isBn
              ? "আপনার উদ্যোগের তথ্য যাচাই করে দ্রুত ডিরেক্টরিতে অন্তর্ভুক্ত করা হবে। প্রয়োজনে আমাদের টিম অতিরিক্ত তথ্যের জন্য আপনার সাথে যোগাযোগ করবে।"
              : "Our team will review your business details and publish them to the live directory within 2-3 business days."}
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setDirSubmitted(false);
                setDirData({
                  businessName: "",
                  founderName: "",
                  category: "সফটওয়্যার ও আইটি",
                  location: "",
                  contact: "",
                  website: "",
                  description: "",
                });
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {isBn ? "অন্য উদ্যোগ যোগ করুন" : "Add Another"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleDirSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "উদ্যোগ / ব্যবসার নাম *" : "Business / Venture Name *"}
              </label>
              <input
                required
                type="text"
                placeholder={
                  isBn ? "যেমন: গড়াই টেক ল্যাবস" : "e.g. Gorai Tech Labs"
                }
                value={dirData.businessName}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    businessName: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "প্রতিষ্ঠাতা / মালিকের নাম *"
                  : "Founder / Owner Name *"}
              </label>
              <input
                required
                type="text"
                placeholder={isBn ? "আপনার নাম" : "Founder Name"}
                value={dirData.founderName}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    founderName: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "ইন্ডাস্ট্রি / ক্যাটাগরি *" : "Industry Category *"}
              </label>
              <select
                value={dirData.category}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    category: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              >
                <option value="সফটওয়্যার ও আইটি">
                  {isBn ? "সফটওয়্যার ও আইটি" : "Software & IT"}
                </option>
                <option value="এগ্রো ও ফুড-টেক">
                  {isBn ? "এগ্রো ও ফুড-টেক" : "Agro & FoodTech"}
                </option>
                <option value="হস্তশিল্প ও ফ্যাশন">
                  {isBn ? "হস্তশিল্প ও ফ্যাশন" : "Handicrafts & Fashion"}
                </option>
                <option value="লজিস্টিকস ও সেবা">
                  {isBn ? "লজিস্টিকস ও ডেলিভারি" : "Logistics & Delivery"}
                </option>
                <option value="শিক্ষা ও এডটেক">
                  {isBn ? "শিক্ষা ও এডটেক" : "Education & EdTech"}
                </option>
                <option value="অন্যান্য এসএমই">
                  {isBn ? "অন্যান্য লোকাল ব্যবসা" : "Other Local Venture"}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "কুষ্টিয়ায় অবস্থান / ঠিকানা *"
                  : "Location in Kushtia *"}
              </label>
              <input
                required
                type="text"
                placeholder={
                  isBn
                    ? "যেমন: মজমপুর, কুমারখালী, এনএস রোড"
                    : "e.g. Majampur, Kushtia Sadar"
                }
                value={dirData.location}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    location: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "যোগাযোগ / হোয়াটসঅ্যাপ *" : "Contact / WhatsApp *"}
              </label>
              <input
                required
                type="tel"
                placeholder="01XXXXXXXXX"
                value={dirData.contact}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    contact: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "ওয়েবসাইট বা ফেসবুক পেজ লিংক"
                  : "Website or Social Page"}
              </label>
              <input
                type="text"
                placeholder="https://facebook.com/yourpage"
                value={dirData.website}
                onChange={(e) =>
                  setDirData({
                    ...dirData,
                    website: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "উদ্যোগের বিবরণ (১-২ বাক্য) *"
                : "Venture Description (1-2 lines) *"}
            </label>
            <textarea
              required
              rows={3}
              placeholder={
                isBn
                  ? "আপনার ব্যবসা কী পণ্য বা সেবা প্রদান করে সংক্ষেপে বলুন..."
                  : "Briefly explain what product or service your business offers..."
              }
              value={dirData.description}
              onChange={(e) =>
                setDirData({
                  ...dirData,
                  description: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="submit"
              disabled={dirSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2"
            >
              {dirSubmitting ? (
                <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
              ) : (
                <>
                  <span>
                    {isBn
                      ? "ডিরেক্টরিতে আবেদন পাঠান"
                      : "Submit Listing Request"}
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
