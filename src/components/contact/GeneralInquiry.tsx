"use client";

import { SITE_CONFIG } from "@/data/content";
import { CheckCircle, HelpCircle, MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

interface GeneralInquiryProps {
  isBn: boolean;
}

export default function GeneralInquiry({ isBn }: GeneralInquiryProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Top Header */}
      <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0 mt-0.5">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "সাধারণ অনুসন্ধান ও সরাসরি বার্তা"
              : "General Inquiry & Direct Contact"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া সম্পর্কিত যেকোনো তথ্য, স্পনসরশিপ, প্রাতিষ্ঠানিক পার্টনারশিপ বা সাধারণ প্রশ্নের জন্য নিচের ফর্মটি পূরণ করে বার্তা পাঠান।"
              : "Have questions about Startup Kushtia, partnerships, sponsorships, or ecosystem initiatives? Send us a direct message."}
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-heading">
            {isBn
              ? "বার্তাটি সফলভাবে পাঠানো হয়েছে!"
              : "Message Sent Successfully!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            {isBn
              ? "আপনার বার্তার জন্য ধন্যবাদ। আমাদের টিম পর্যালোচনা করে খুব শীঘ্রই আপনার ইমেইল বা হোয়াটসঅ্যাপে যোগাযোগ করবে।"
              : "Thank you for reaching out. Our team will review your inquiry and get back to you shortly via email or WhatsApp."}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              {isBn ? "অন্য বার্তা পাঠান" : "Send Another Message"}
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
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার পূর্ণ নাম *" : "Your Full Name *"}
              </label>
              <input
                required
                type="text"
                placeholder={isBn ? "উদা: মাহির আদনান" : "e.g. Mahir Adnan"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "ফোন / হোয়াটসঅ্যাপ নম্বর *" : "Phone / WhatsApp *"}
              </label>
              <input
                required
                type="tel"
                placeholder="017XXXXXXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          {/* Row 2: Email & Inquiry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
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
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "অনুসন্ধানের ধরন *" : "Inquiry Category *"}
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) =>
                  setFormData({ ...formData, inquiryType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white cursor-pointer"
              >
                <option value="general">
                  {isBn ? "সাধারণ জিজ্ঞাসা" : "General Inquiry"}
                </option>
                <option value="partnership">
                  {isBn
                    ? "প্রাতিষ্ঠানিক অংশীদারিত্ব"
                    : "Institutional Partnership"}
                </option>
                <option value="sponsor">
                  {isBn ? "স্পনসরশিপ ও সহযোগিতা" : "Sponsorship & Support"}
                </option>
                <option value="speaker">
                  {isBn
                    ? "মেন্টরিং বা স্পিকার প্রস্তাব"
                    : "Mentorship / Speaking Offer"}
                </option>
                <option value="press">
                  {isBn ? "মিডিয়া ও প্রেস" : "Media & Press"}
                </option>
                <option value="other">{isBn ? "অন্যান্য" : "Other"}</option>
              </select>
            </div>
          </div>

          {/* Row 3: Subject */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "বার্তার বিষয় *" : "Subject *"}
            </label>
            <input
              required
              type="text"
              placeholder={
                isBn
                  ? "কী বিষয়ে বার্তা পাঠাচ্ছেন সংক্ষেপে লিখুন"
                  : "Brief summary of your inquiry"
              }
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার বিস্তারিত বার্তা *" : "Your Message *"}
            </label>
            <textarea
              required
              rows={5}
              placeholder={
                isBn
                  ? "আপনার প্রশ্ন, প্রস্তাবনা বা অনুসন্ধানের বিস্তারিত বিবরণ লিখুন..."
                  : "Write your message, proposal, or detailed questions here..."
              }
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {isBn
                  ? "সাধারণত ২৪ ঘণ্টার মধ্যে বার্তার প্রত্যুত্তর দেওয়া হয়।"
                  : "We typically respond to inquiries within 24 hours."}
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              {submitting ? (
                <span>{isBn ? "পাঠানো হচ্ছে..." : "Sending..."}</span>
              ) : (
                <>
                  <span>{isBn ? "বার্তা পাঠান" : "Send Inquiry"}</span>
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
