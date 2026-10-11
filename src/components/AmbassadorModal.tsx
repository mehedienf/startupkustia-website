"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, GraduationCap, Send, X } from "lucide-react";
import React, { useState } from "react";

interface AmbassadorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmbassadorModal({
  isOpen,
  onClose,
}: AmbassadorModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "Islamic University (IU), Kushtia",
    department: "",
    year: "",
    motivation: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const isBn = language === "bn";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061C14]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#061C14] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#A3E635]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#A3E635]" />
            <h3 className="font-bold text-lg text-white">
              {isBn
                ? "ক্যাম্পাস অ্যাম্বাসেডর আবেদন"
                : "Campus Ambassador Application"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#ECFCCB] text-[#65A30D] rounded-full flex items-center justify-center mx-auto border-2 border-[#A3E635]">
                <CheckCircle className="w-8 h-8 text-[#65A30D]" />
              </div>
              <h4 className="text-xl font-bold text-[#061C14]">
                {isBn
                  ? "আবেদন সফলভাবে গৃহীত হয়েছে!"
                  : "Application Submitted!"}
              </h4>
              <p className="text-sm text-[#444E69] max-w-sm mx-auto">
                {isBn
                  ? "আপনার ক্যাম্পাসে স্টার্টআপ কুষ্টিয়ার লিডারশিপ টিমের প্রতিনিধি নির্বাচনের জন্য প্রাথমিক বাছাই সম্পন্ন করে আমরা আপনাকে ইন্টারভিউ এর জন্য কল বা ইমেইল করব।"
                  : "Thank you for stepping forward to lead your campus. Our youth team will review your application and schedule an interview."}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#84CC16] hover:bg-[#65A30D] text-white font-semibold rounded-full btn-hard text-sm"
                >
                  {isBn ? "বন্ধ করুন" : "Close"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <p className="text-xs text-[#444E69]">
                {isBn
                  ? "নিজ ক্যাম্পাসে উদ্ভাবন, নেটওয়ার্কিং ও স্টার্টআপ সংস্কৃতি ছড়িয়ে দিতে যুক্ত হোন আমাদের অ্যাম্বাসেডর নেটওয়ার্কে।"
                  : "Represent Startup Kushtia at your university or college and build invaluable leadership skills."}
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn ? "আপনার নাম *" : "Your Name *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={isBn ? "আপনার পূর্ণ নাম" : "Full Name"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "ইমেইল *" : "Email *"}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="student@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "ফোন / হোয়াটসঅ্যাপ *" : "WhatsApp Phone *"}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn ? "ক্যাম্পাস / প্রতিষ্ঠান *" : "Campus / Institution *"}
                </label>
                <select
                  value={formData.campus}
                  onChange={(e) =>
                    setFormData({ ...formData, campus: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14] bg-white"
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
                    {isBn
                      ? "কুষ্টিয়া মেডিকেল কলেজ"
                      : "Kushtia Medical College"}
                  </option>
                  <option value="Kushtia Govt Central College">
                    {isBn
                      ? "কুষ্টিয়া সরকারি মহিলা / সেন্ট্রাল কলেজ"
                      : "Kushtia Govt Women / Central College"}
                  </option>
                  <option value="Other">
                    {isBn
                      ? "কুষ্টিয়ার অন্যান্য শিক্ষা প্রতিষ্ঠান"
                      : "Other College / Institute"}
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "বিভাগ / বিষয় *" : "Department *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={
                      isBn ? "যেমন: সিএসই, বিবিএ" : "e.g. CSE, BBA, English"
                    }
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "বর্ষ / সেমিস্টার *" : "Academic Year *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={
                      isBn ? "যেমন: ২য় বর্ষ" : "e.g. 2nd Year / 4th Sem"
                    }
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn
                    ? "কেন ক্যাম্পাস অ্যাম্বাসেডর হতে চান?"
                    : "Why do you want to be an ambassador?"}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isBn
                      ? "আপনার নেতৃত্ব ও আগ্রহের কথা লিখুন..."
                      : "Share your motivation and leadership interest..."
                  }
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData({ ...formData, motivation: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-[#444E69] hover:text-[#061C14] font-medium rounded-full hover:bg-slate-100 transition-colors"
                >
                  {isBn ? "বাতিল" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold rounded-full btn-hard text-sm flex items-center gap-2"
                >
                  {loading ? (
                    <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
                  ) : (
                    <>
                      <span>
                        {isBn ? "আবেদন জমা দিন" : "Submit Application"}
                      </span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
