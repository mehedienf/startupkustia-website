"use client";

import { CheckCircle, MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";

interface DirectContactTabProps {
  isBn: boolean;
}

export default function DirectContactTab({ isBn }: DirectContactTabProps) {
  const [contactData, setContactData] = useState({
    name: "",
    emailOrPhone: "",
    purpose: "partnership",
    subject: "",
    message: "",
  });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "সরাসরি যোগাযোগ ও অংশীদারিত্ব"
              : "Direct Contact & Partnership"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? "স্পনসরশিপ, প্রাতিষ্ঠানিক পার্টনারশিপ, প্রেস ও সাধারণ জিজ্ঞাসা পাঠাতে ফরমটি পূরণ করুন।"
              : "Inquire about sponsorships, institutional collaborations, or general questions."}
          </p>
        </div>
      </div>

      {contactSubmitted ? (
        <div className="py-12 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-heading">
            {isBn
              ? "বার্তাটি সফলভাবে পাঠানো হয়েছে!"
              : "Message Sent Successfully!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {isBn
              ? "আপনার বার্তার জন্য ধন্যবাদ। স্টার্টআপ কুষ্টিয়া টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
              : "Thank you for reaching out. We will get back to you as soon as possible."}
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setContactSubmitted(false);
                setContactData({
                  name: "",
                  emailOrPhone: "",
                  purpose: "partnership",
                  subject: "",
                  message: "",
                });
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {isBn ? "অন্য বার্তা পাঠান" : "Send Another Message"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার নাম *" : "Your Name *"}
              </label>
              <input
                required
                type="text"
                placeholder={isBn ? "আপনার নাম" : "Your Name"}
                value={contactData.name}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    name: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "ইমেইল বা ফোন নম্বর *" : "Email or Phone *"}
              </label>
              <input
                required
                type="text"
                placeholder="name@example.com / 017XXXXXXXX"
                value={contactData.emailOrPhone}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    emailOrPhone: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "যোগাযোগের উদ্দেশ্য *" : "Inquiry Purpose *"}
              </label>
              <select
                value={contactData.purpose}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    purpose: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              >
                <option value="partnership">
                  {isBn
                    ? "প্রাতিষ্ঠানিক পার্টনারশিপ (Partnership)"
                    : "Institutional Partnership"}
                </option>
                <option value="sponsor">
                  {isBn
                    ? "স্পনসরশিপ ও সহযোগিতা (Sponsor)"
                    : "Sponsorship & Support"}
                </option>
                <option value="speaker">
                  {isBn
                    ? "মেন্টরিং বা স্পিকার হিসেবে যুক্ত হতে"
                    : "Mentoring / Speaking"}
                </option>
                <option value="press">
                  {isBn ? "প্রেস ও মিডিয়া জিজ্ঞাসা" : "Media & Press"}
                </option>
                <option value="general">
                  {isBn ? "সাধারণ জিজ্ঞাসা ও মতামত" : "General Inquiry"}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "বিষয় *" : "Subject *"}
              </label>
              <input
                required
                type="text"
                placeholder={
                  isBn
                    ? "কী বিষয়ে বার্তা পাঠাচ্ছেন"
                    : "Subject of your message"
                }
                value={contactData.subject}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    subject: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার বিস্তারিত বার্তা *" : "Your Message *"}
            </label>
            <textarea
              required
              rows={4}
              placeholder={
                isBn
                  ? "আপনার প্রস্তাবনা বা প্রশ্ন বিস্তারিত লিখুন..."
                  : "Write your message or inquiry here..."
              }
              value={contactData.message}
              onChange={(e) =>
                setContactData({
                  ...contactData,
                  message: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="submit"
              disabled={contactSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2"
            >
              {contactSubmitting ? (
                <span>{isBn ? "পাঠানো হচ্ছে..." : "Sending..."}</span>
              ) : (
                <>
                  <span>{isBn ? "বার্তা পাঠান" : "Send Message"}</span>
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
