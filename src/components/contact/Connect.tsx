"use client";

import { SITE_CONFIG } from "@/data/content";
import {
  AlertCircle,
  Award,
  Briefcase,
  Building2,
  CheckCircle,
  GraduationCap,
  Info,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
  UserCheck,
} from "lucide-react";
import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

interface ConnectProps {
  isBn: boolean;
}

export default function Connect({ isBn }: ConnectProps) {
  // Google Apps Script Web App URL from NOTE.md
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyDO4rVzH-szFeuOV3p3Bqn3iB-x07IDrwZ4Vsu_vg4oW_e-hVgJCPnZXvqUbbNWvJ8zw/exec";

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
            ? "দুঃখিত, তথ্য জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
            : "Failed to submit. Please try again.",
        );
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      setErrorMessage(
        isBn
          ? "সার্ভারে যোগাযোগ করা যায়নি। ইন্টারনেট কানেকশন চেক করে আবার চেষ্টা করুন।"
          : "Could not connect to server. Check your connection and try again.",
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
        <div className="w-12 h-12 rounded-2xl bg-brand-soft2 text-brand flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
          <UserCheck className="w-6 h-6" />
        </div>
        <div>
          
          <h2 className="text-xl sm:text-2xl font-black text-heading">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া মেম্বার রেজিস্ট্রেশন"
              : "JOIN AS MEMBER: Startup Kushtia"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            {isBn
              ? "মেম্বার হিসেবে স্টার্টআপ কুষ্টিয়ায় যুক্ত হোন! কুষ্টিয়ার উদ্যোক্তা, উদ্ভাবক ও পেশাজীবীদের সাথে যুক্ত হয়ে নতুন সম্ভাবনার সূচনা করুন। স্থানীয়ভাবে ভাবুন, বিশ্বজুড়ে গড়ে তুলুন।"
              : "Join Startup Kushtia as a Member! A platform to Innovate, Connect & Grow. Connect, collaborate, and build together. Think Local, Build Global."}
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-6 animate-fade-in">
          {/* Success Animated Icon */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-11 h-11" />
            </div>
            <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping pointer-events-none" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-heading">
              {isBn
                ? "রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!"
                : "Registration Submitted Successfully!"}
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {isBn
                ? "স্টার্টআপ কুষ্টিয়া পরিবারের সদস্য হওয়ার জন্য আন্তরিক ধন্যবাদ। আপনার তথ্য সফলভাবে নথিভুক্ত করা হয়েছে।"
                : "Thank you for registering as a member! Your information has been successfully recorded."}
            </p>
          </div>

          {/* Next Steps Guidance Card */}
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3">
            <h4 className="text-xs font-black text-heading uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4 text-brand" />
              <span>{isBn ? "পরবর্তী ধাপসমূহ" : "What Happens Next"}</span>
            </h4>
            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-soft text-brand font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  ১
                </span>
                <span>
                  {isBn
                    ? "আপনার প্রদত্ত ইমেইল অ্যাড্রেসে গুগল মিট ইনভিটেশন ও কমিউনিটি অনবোর্ডিং নির্দেশিকা পাঠানো হবে।"
                    : "You will receive Google Meet invitation links & onboarding instructions on your email."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-soft text-brand font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  ২
                </span>
                <span>
                  {isBn
                    ? "তাৎক্ষণিক নেটওয়ার্কিং ও নোটিফিকেশনের জন্য আমাদের অফিশিয়াল হোয়াটসঅ্যাপ চ্যানেলে যুক্ত থাকুন।"
                    : "Join our official WhatsApp channel for real-time announcements and networking."}
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              {isBn ? "নতুন আরেকটি আবেদন করুন" : "Submit Another Response"}
            </button>
            <a
              href={SITE_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs btn-hard flex items-center gap-2 shadow-sm transition-all"
            >
              <Whatsapp className="w-4 h-4" />
              <span>
                {isBn
                  ? "হোয়াটসঅ্যাপ চ্যানেলে যুক্ত হোন"
                  : "Join WhatsApp Channel"}
              </span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Error Message Box */}
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-3 animate-fade-in shadow-xs">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <div className="flex-1">{errorMessage}</div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTION 1: Personal & Contact Information */}
          {/* ============================================================ */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-lg bg-brand-soft text-brand text-xs font-black flex items-center justify-center">
                ১
              </span>
              <h3 className="text-sm font-black text-heading uppercase tracking-wider">
                {isBn
                  ? "ব্যক্তিগত ও যোগাযোগের তথ্য"
                  : "Personal & Contact Information"}
              </h3>
            </div>

            {/* Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার পূর্ণ নাম *" : "Full Name *"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  required
                  type="text"
                  placeholder={isBn ? "উদা: মাহির আদনান" : "e.g. Mahir Adnan"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                />
              </div>
            </div>

            {/* Row: Email & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field: Email */}
              <div>
                <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                  {isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5 flex items-start gap-1">
                  <Info className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? "এই ইমেইলে গুগল মিট ইনভিটেশন লিংক ও পরবর্তী নির্দেশনা পাঠানো হবে।"
                      : "You will receive the Google Meet invitation link on the provided email."}
                  </span>
                </p>
              </div>

              {/* Field: Phone Number */}
              <div>
                <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                  {isBn
                    ? "ফোন / হোয়াটসঅ্যাপ নম্বর *"
                    : "Phone / WhatsApp Number *"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  {isBn
                    ? "জরুরি নোটিফিকেশন ও যোগাযোগের জন্য সক্রিয় নম্বর দিন।"
                    : "Active phone or WhatsApp number for timely communication."}
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SECTION 2: Professional & Institutional Details */}
          {/* ============================================================ */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-lg bg-brand-soft text-brand text-xs font-black flex items-center justify-center">
                ২
              </span>
              <h3 className="text-sm font-black text-heading uppercase tracking-wider">
                {isBn
                  ? "পেশাগত ও প্রাতিষ্ঠানিক তথ্য"
                  : "Professional & Institutional Details"}
              </h3>
            </div>

            {/* Field: Profession */}
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn ? "আপনার পেশা *" : "Your Profession *"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <select
                  required
                  value={formData.profession}
                  onChange={(e) =>
                    setFormData({ ...formData, profession: e.target.value })
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200 cursor-pointer appearance-none"
                >
                  <option value="Entrepreneur / Business Owner">
                    {isBn
                      ? "উদ্যোক্তা / ব্যবসার মালিক"
                      : "Entrepreneur / Business Owner"}
                  </option>
                  <option value="Student">
                    {isBn ? "শিক্ষার্থী" : "Student"}
                  </option>
                  <option value="Graduate looking for opportunities">
                    {isBn
                      ? "স্নাতক / সুযোগসন্ধানী"
                      : "Graduate looking for opportunities"}
                  </option>
                  <option value="Job Holder">
                    {isBn ? "চাকরিজীবী" : "Job Holder"}
                  </option>
                  <option value="Homemaker">
                    {isBn ? "হোমমেকার / গৃহিণী" : "Homemaker"}
                  </option>
                  <option value="Other">{isBn ? "অন্যান্য" : "Other"}</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field: Education Institution Name */}
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                {isBn
                  ? "শিক্ষাপ্রতিষ্ঠানের নাম - বর্তমান বা পূর্ববর্তী (ঐচ্ছিক)"
                  : "Education Institution - Current or Former (Optional)"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder={
                    isBn
                      ? "উদা: ইসলামী বিশ্ববিদ্যালয় / কুষ্টিয়া সরকারি কলেজ / অন্যান্য"
                      : "e.g. Islamic University / Kushtia Govt College"
                  }
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                />
              </div>
            </div>

            {/* Row: Organization & Designation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field: Organization */}
              <div>
                <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                  {isBn
                    ? "প্রতিষ্ঠানের নাম (যদি থাকে)"
                    : "Organization Name (if any)"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
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
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Field: Designation */}
              <div>
                <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2">
                  {isBn ? "পদবী (যদি থাকে)" : "Designation (if any)"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Award className="w-4 h-4" />
                  </div>
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
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SECTION 3: Kushtia Connection & Message */}
          {/* ============================================================ */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-lg bg-brand-soft text-brand text-xs font-black flex items-center justify-center">
                ৩
              </span>
              <h3 className="text-sm font-black text-heading uppercase tracking-wider">
                {isBn
                  ? "কুষ্টিয়া সম্পৃক্ততা ও অতিরিক্ত তথ্য"
                  : "Kushtia Connection & Notes"}
              </h3>
            </div>

            {/* Field: Are you from Kushtia (Enhanced Selectable Cards) */}
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>
                  {isBn
                    ? "আপনি কি কুষ্টিয়ার বাসিন্দা বা কুষ্টিয়ার সাথে সম্পৃক্ত? *"
                    : "Are you from Kushtia? *"}
                </span>
              </label>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* YES Card */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, fromKushtia: "yes" })
                  }
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    formData.fromKushtia === "yes"
                      ? "border-brand bg-brand-soft/70 shadow-xs ring-2 ring-brand/15"
                      : "border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.fromKushtia === "yes"
                          ? "border-brand bg-brand"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {formData.fromKushtia === "yes" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        formData.fromKushtia === "yes"
                          ? "text-brand"
                          : "text-heading"
                      }`}
                    >
                      {isBn ? "হ্যাঁ" : "Yes"}
                    </span>
                  </div>
                  <CheckCircle
                    className={`w-4 h-4 transition-colors ${
                      formData.fromKushtia === "yes"
                        ? "text-brand"
                        : "text-slate-300"
                    }`}
                  />
                </button>

                {/* NO Card */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, fromKushtia: "no" })
                  }
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    formData.fromKushtia === "no"
                      ? "border-brand bg-brand-soft/70 shadow-xs ring-2 ring-brand/15"
                      : "border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.fromKushtia === "no"
                          ? "border-brand bg-brand"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {formData.fromKushtia === "no" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        formData.fromKushtia === "no"
                          ? "text-brand"
                          : "text-heading"
                      }`}
                    >
                      {isBn ? "না" : "No"}
                    </span>
                  </div>
                  <CheckCircle
                    className={`w-4 h-4 transition-colors ${
                      formData.fromKushtia === "no"
                        ? "text-brand"
                        : "text-slate-300"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Field: Comment / Expectation */}
            <div>
              <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {isBn
                    ? "কোনো মন্তব্য বা প্রত্যাশা থাকলে লিখুন (ঐচ্ছিক)"
                    : "Any comment or expectation from Startup Kushtia? (Optional)"}
                </span>
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
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 text-heading text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* Submit Actions & Security Guarantee */}
          {/* ============================================================ */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isBn
                  ? "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপন রাখা হবে।"
                  : "Your information is secure & kept confidential."}
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
                </>
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
