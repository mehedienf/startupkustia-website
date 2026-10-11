"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Send, X } from "lucide-react";
import React, { useState } from "react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "student",
    institution: "",
    note: "",
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
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "student",
      institution: "",
      note: "",
    });
    onClose();
  };

  const isBn = language === "bn";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061C14]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#061C14] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#A3E635]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-pulse"></span>
            <h3 className="font-bold text-lg text-white">
              {isBn ? "কমিউনিটিতে যোগ দিন" : "Join Our Community"}
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
                  ? "অভিনন্দন! আপনার আবেদন গৃহীত হয়েছে"
                  : "Welcome to Startup Kushtia!"}
              </h4>
              <p className="text-sm text-[#444E69] max-w-sm mx-auto">
                {isBn
                  ? "স্টার্টআপ কুষ্টিয়া পরিবারের সদস্য হওয়ার জন্য ধন্যবাদ। শীঘ্রই আমাদের কমিউনিটি টিম আপনার সাথে হোয়াটসঅ্যাপে যোগাযোগ করবে।"
                  : "Thank you for joining our ecosystem. Our team will review your application and contact you via WhatsApp shortly."}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#84CC16] hover:bg-[#65A30D] text-white font-semibold rounded-full btn-hard text-sm"
                >
                  {isBn ? "ঠিক আছে" : "Done"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-sm text-[#444E69]">
                {isBn
                  ? "কুষ্টিয়া থেকে পরবর্তী প্রজন্মের উদ্যোক্তা ও উদ্ভাবক হিসেবে যুক্ত হতে নিচের তথ্যগুলো দিন (মাত্র ১ মিনিট সময় লাগবে)।"
                  : "Fill in your details below to join Kushtia’s premier startup & innovation community."}
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn ? "আপনার পূর্ণ নাম *" : "Full Name *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={isBn ? "উদা: মাহির আদনান" : "e.g. Mahir Adnan"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                    {isBn ? "হোয়াটসঅ্যাপ / ফোন *" : "WhatsApp / Phone *"}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn ? "আপনার ভূমিকা / পরিচয় *" : "Your Category / Role *"}
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14] bg-white"
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
                      ? "বিদ্যমান স্থানীয় ক্ষুদ্র/মাঝারি ব্যবসা (SME)"
                      : "Existing Business / SME"}
                  </option>
                  <option value="freelancer">
                    {isBn
                      ? "আইটি পেশাজীবী বা ফ্রিল্যান্সার"
                      : "Tech Freelancer / Professional"}
                  </option>
                  <option value="mentor">
                    {isBn
                      ? "মেন্টর বা বিনিয়োগকারী"
                      : "Mentor / Investor / Industry Leader"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn ? "প্রতিষ্ঠান বা ক্যাম্পাস" : "Organization or Campus"}
                </label>
                <input
                  type="text"
                  placeholder={
                    isBn
                      ? "উদা: ইসলামী বিশ্ববিদ্যালয় (IU) / নিজস্ব প্রতিষ্ঠান"
                      : "e.g. Islamic University / Your Company"
                  }
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#061C14] uppercase tracking-wider mb-1">
                  {isBn
                    ? "আপনার আইডিয়া বা আগ্রহ সংক্ষেপে লিখুন"
                    : "Briefly describe your idea or goal"}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isBn
                      ? "কী সমস্যা সমাধান করতে চান বা কী সাহায্য প্রয়োজন..."
                      : "What are you building or looking for?"
                  }
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#84CC16] focus:ring-1 focus:ring-[#84CC16] text-[#061C14]"
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
                      <span>{isBn ? "যুক্ত হোন" : "Join Now"}</span>
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
