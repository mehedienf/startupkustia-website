"use client";

import { SITE_CONFIG } from "@/data/content";
import { CheckCircle, Info, Send, UserCheck, AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

interface ConnectProps {
  isBn: boolean;
}

export default function Connect({ isBn }: ConnectProps) {
  // Apnar Apps Script er Web App URL ekhane boshate hobe
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwbg6JhZLsYHi6Lgn7rQwby-290tOOYBOboCvC70nWXIKMuY451AsJLiZ1plwG2gJDsg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "Entrepreneur / Business Owner",
    institution: "",
    organization: "",
    designation: "",
    fromKushtia: "yes",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      // CORS issue thekate text/plain babohar kora hoyeche
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (resData.status === "success") {
        setSubmitted(true);
      } else {
        setErrorMessage(
          isBn
            ? "দুঃখিত, তথ্য জমা দেওয়া যায়নি। আবার চেষ্টা করুন।"
            : "Failed to submit. Please try again."
        );
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      setErrorMessage(
        isBn
          ? "সার্ভারে যোগাযোগ করা যায়নি। ইন্টারনেট কানেকশন চেক করে আবার চেষ্টা করুন।"
          : "Could not connect to server. Check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      profession: "Entrepreneur / Business Owner",
      institution: "",
      organization: "",
      designation: "",
      fromKushtia: "yes",
      message: "",
    });
  };

  return (
    <div>
      {/* Form Top Title Bar */}
      <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0 mt-0.5">
          <UserCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া মেম্বার রেজিস্ট্রেশন"
              : "JOIN AS MEMBER: Startup Kushtia"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            {isBn
              ? "🚀 মেম্বার হিসেবে স্টার্টআপ কুষ্টিয়ায় যুক্ত হোন! কুষ্টিয়ার উদ্যোক্তা, উদ্ভাবক ও পেশাজীবীদের সাথে যুক্ত হয়ে নতুন সম্ভাবনার সূচনা করুন। Think Local, Build Global."
              : "🚀 Join Startup Kushtia as a Member! A platform to Innovate, Connect & Grow. Connect, collaborate, and build together. Think Local, Build Global."}
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
              ? "রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!"
              : "Registration Submitted Successfully!"}
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া পরিবারের সদস্য হওয়ার জন্য ধন্যবাদ। আপনার প্রদত্ত ইমেইল ও হোয়াটসঅ্যাপে গুগল মিট ইনভিটেশন লিংক ও পরবর্তী নির্দেশনা পাঠানো হবে।"
              : "Thank you for registering as a member! You will receive the Google Meet invitation link and onboarding details on your provided email & WhatsApp."}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              {isBn ? "অন্য রেজিস্ট্রেশন করুন" : "Submit Another Response"}
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
          {/* Error Message Box */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Field 0: Your Name */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার নাম (Your Name) *" : "Your Name *"}
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

          {/* Field 1 & 2: Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার ইমেইল (Your Email) *" : "Your Email *"}
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
              <p className="text-[11px] text-slate-500 mt-1.5 flex items-start gap-1">
                <Info className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                <span>
                  {isBn
                    ? "এই ইমেইলে গুগল মিট ইনভিটেশন লিংক ও পরবর্তী নির্দেশনা পাঠানো হবে।"
                    : "You will receive the Google Meet invitation link on the provided email."}
                </span>
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "আপনার ফোন নম্বর (Your Phone Number) *"
                  : "Your Phone Number *"}
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
              <p className="text-[11px] text-slate-500 mt-1.5">
                {isBn
                  ? "জরুরি নোটিফিকেশন ও যোগাযোগের জন্য সক্রিয় নম্বর দিন।"
                  : "Active phone or WhatsApp number for timely communication."}
              </p>
            </div>
          </div>

          {/* Field 3: Profession */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn ? "আপনার পেশা (Your profession) *" : "Your profession *"}
            </label>
            <select
              required
              value={formData.profession}
              onChange={(e) =>
                setFormData({ ...formData, profession: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            >
              <option value="Entrepreneur / Business Owner">
                {isBn
                  ? "উদ্যোক্তা / ব্যবসার মালিক (Entrepreneur / Business Owner)"
                  : "Entrepreneur / Business Owner"}
              </option>
              <option value="Student">
                {isBn ? "শিক্ষার্থী (Student)" : "Student"}
              </option>
              <option value="Graduate looking for opportunities">
                {isBn
                  ? "স্নাতক / সুযোগসন্ধানী (Graduate looking for opportunities)"
                  : "Graduate looking for opportunities"}
              </option>
              <option value="Job Holder">
                {isBn ? "চাকরিজীবী (Job Holder)" : "Job Holder"}
              </option>
              <option value="Homemaker">
                {isBn ? "হোমমেকার / গৃহিণী (Homemaker)" : "Homemaker"}
              </option>
              <option value="Other">
                {isBn ? "অন্যান্য (Other)" : "Other"}
              </option>
            </select>
          </div>

          {/* Field 4: Education Institution Name */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "শিক্ষাপ্রতিষ্ঠানের নাম - বর্তমান / পূর্ববর্তী (ঐচ্ছিক)"
                : "Your education institution name (former/current) (Optional)"}
            </label>
            <input
              type="text"
              placeholder={
                isBn
                  ? "উদা: ইসলামী বিশ্ববিদ্যালয় (IU) / কুষ্টিয়া সরকারি কলেজ / অন্যান্য"
                  : "e.g. Islamic University (IU) / Kushtia Govt College"
              }
              value={formData.institution}
              onChange={(e) =>
                setFormData({ ...formData, institution: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          {/* Field 5 & 6: Organization & Designation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "প্রতিষ্ঠানের নাম - যদি থাকে (ঐচ্ছিক)"
                  : "Your organization name (if any) (Optional)"}
              </label>
              <input
                type="text"
                placeholder={
                  isBn
                    ? "উদা: আপনার স্টার্টআপ বা কোম্পানি"
                    : "e.g. Your Startup / Workplace"
                }
                value={formData.organization}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organization: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "পদবী - যদি থাকে (ঐচ্ছিক)"
                  : "Your designation (if any) (Optional)"}
              </label>
              <input
                type="text"
                placeholder={
                  isBn
                    ? "উদা: প্রতিষ্ঠাতা, সফটওয়্যার ডেভেলপার, ম্যানেজার"
                    : "e.g. Founder, Manager, Developer"
                }
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
              />
            </div>
          </div>

          {/* Field 7: Are you from Kushtia */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-3">
              {isBn
                ? "আপনি কি কুষ্টিয়ার বাসিন্দা বা কুষ্টিয়ার সাথে সম্পৃক্ত? (Are you from Kushtia) *"
                : "Are you from Kushtia? *"}
            </label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-heading">
                <input
                  type="radio"
                  name="fromKushtia"
                  value="yes"
                  checked={formData.fromKushtia === "yes"}
                  onChange={() =>
                    setFormData({ ...formData, fromKushtia: "yes" })
                  }
                  className="w-4 h-4 text-brand focus:ring-brand border-slate-300"
                />
                <span>{isBn ? "হ্যাঁ (Yes)" : "Yes"}</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-heading">
                <input
                  type="radio"
                  name="fromKushtia"
                  value="no"
                  checked={formData.fromKushtia === "no"}
                  onChange={() =>
                    setFormData({ ...formData, fromKushtia: "no" })
                  }
                  className="w-4 h-4 text-brand focus:ring-brand border-slate-300"
                />
                <span>{isBn ? "না (No)" : "No"}</span>
              </label>
            </div>
          </div>

          {/* Additional Message / Note */}
          <div>
            <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
              {isBn
                ? "কোনো মন্তব্য বা প্রত্যাশা থাকলে লিখুন (ঐচ্ছিক)"
                : "Any comment or expectation from Startup Kushtia? (Optional)"}
            </label>
            <textarea
              rows={3}
              placeholder={
                isBn
                  ? "স্টার্টআপ কুষ্টিয়া প্ল্যাটফর্ম থেকে আপনার কী প্রত্যাশা বা কোনো নির্দিষ্ট আইডিয়া থাকলে লিখুন..."
                  : "What do you look forward to from Startup Kushtia..."
              }
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading text-sm bg-white"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              {isBn
                ? "যেকোনো প্রশ্নের জন্য পাশে থাকা অফিসিয়াল চ্যানেলে যোগাযোগ করতে পারেন।"
                : "For any questions, reach out via the official channels on the right."}
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-60 cursor-pointer"
            >
              {submitting ? (
                <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
              ) : (
                <>
                  <span>
                    {isBn ? "মেম্বার হিসেবে যোগ দিন" : "Register as Member"}
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