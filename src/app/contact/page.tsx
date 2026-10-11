"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyModal from "@/components/PolicyModal";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import {
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

type TabType = "community" | "ambassador" | "directory" | "contact";

function ContactPageInner() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const isBn = language === "bn";

  const tabParam = (searchParams.get("tab") ||
    searchParams.get("type")) as TabType | null;
  const validUrlTab: TabType =
    tabParam &&
    ["community", "ambassador", "directory", "contact"].includes(tabParam)
      ? tabParam
      : "community";

  const [userSelectedTab, setUserSelectedTab] = useState<TabType | null>(null);
  const [prevUrlTab, setPrevUrlTab] = useState<TabType>(validUrlTab);

  if (validUrlTab !== prevUrlTab) {
    setPrevUrlTab(validUrlTab);
    setUserSelectedTab(null);
  }

  const activeTab = userSelectedTab ?? validUrlTab;

  const [policyModalType, setPolicyModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  // Tab change handler that updates URL query without full reload
  const handleTabChange = (tab: TabType) => {
    setUserSelectedTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Form 1: Community State
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

  // Form 2: Campus Ambassador State
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

  // Form 3: Directory State
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

  // Form 4: Direct Contact State
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

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      qBn: "আবেদন জমা দেওয়ার পর পরবর্তী পদক্ষেপ কী?",
      qEn: "What happens after submitting an application?",
      aBn: "আমাদের কমিউনিটি টিম প্রতিটি আবেদন যত্ন সহকারে পর্যালোচনা করে। সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আমরা আপনার প্রদত্ত হোয়াটসঅ্যাপ বা ইমেইলে পরবর্তী নির্দেশনা জানিয়ে যোগাযোগ করি।",
      aEn: "Our team reviews each submission carefully and connects back via WhatsApp or Email within 24 to 48 hours with next steps.",
    },
    {
      qBn: "কমিউনিটি বা অ্যাম্বাসেডর প্রোগ্রামে যুক্ত হতে কোনো ফি দিতে হবে কি?",
      qEn: "Is there any fee to join the community or ambassador program?",
      aBn: "না, স্টার্টআপ কুষ্টিয়ার সাধারণ সদস্যপদ, ক্যাম্পাস অ্যাম্বাসেডর প্রোগ্রাম এবং প্রাথমিক জ্ঞান বিনিময় সেশনগুলো সম্পূর্ণ বিনামূল্যে উন্মুক্ত।",
      aEn: "No, general membership, campus ambassador roles, and peer knowledge meetups are completely free of charge.",
    },
    {
      qBn: "ডিরেক্টরিতে আমার ব্যবসা লাইভ হতে কত সময় লাগে?",
      qEn: "How long does it take for a directory listing to go live?",
      aBn: "ব্যবসার মৌলিক তথ্য এবং কুষ্টিয়াভিত্তিক সত্যতা যাচাই করার পর ২-৩ কার্যদিবসের মধ্যে আমাদের পাবলিক ডিরেক্টরিতে তালিকাটি যুক্ত করা হয়।",
      aEn: "After basic verification of your venture details and Kushtia presence, listings go live within 2-3 business days.",
    },
    {
      qBn: "আমরা কীভাবে প্রাতিষ্ঠানিক পার্টনার বা স্পনসর হতে পারি?",
      qEn: "How can our organization become a partner or sponsor?",
      aBn: "সরাসরি যোগাযোগ ট্যাবের মাধ্যমে অথবা আমাদের অফিশিয়াল ইমেইল startupkushtia@gmail.com এ পার্টনারশিপ আগ্রহ জানিয়ে লিখলে আমাদের টিম বিস্তারিত পার্টনারশিপ ডেক পাঠাবে।",
      aEn: "Choose the Direct Inquiry tab or email startupkushtia@gmail.com with your proposal; we will share our partnership deck promptly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FC] text-[#444E69]">
      {/* Navigation */}
      <Header
        onOpenJoin={() => {
          handleTabChange("community");
          window.scrollTo({ top: 400, behavior: "smooth" });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb & Hero Header */}
          <div className="mb-10 text-center sm:text-left">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link href="/" className="hover:text-brand transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <span>/</span>
              <span className="text-heading">
                {isBn
                  ? "যোগাযোগ ও আবেদন কেন্দ্র"
                  : "Connect & Applications Hub"}
              </span>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft2 text-brand-hover text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span>
                {isBn
                  ? "একটিমাত্র প্ল্যাটফর্মে সব সুবিধা"
                  : "All Application & Contact Channels in One Hub"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading tracking-tight mb-4">
              {isBn ? "যোগাযোগ ও আবেদন কেন্দ্র" : "Connect & Applications Hub"}
            </h1>

            <p className="text-base sm:text-lg text-[#444E69] max-w-3xl leading-relaxed">
              {isBn
                ? "কমিউনিটিতে যোগদান, ক্যাম্পাস অ্যাম্বাসেডর আবেদন, ব্যবসায়িক ডিরেক্টরিতে অন্তর্ভুক্তি কিংবা পার্টনারশিপ ও সরাসরি বার্তা — আপনার প্রয়োজনীয় বিকল্পটি নির্বাচন করে এগিয়ে যান।"
                : "Join the community, apply as a campus ambassador, register your local venture in the directory, or get in touch for partnerships — everything in one central place."}
            </p>
          </div>

          {/* Tab Switcher - 4 Interactive Categories */}
          <div className="bg-white p-2 rounded-2xl shadow-sm mb-10 overflow-x-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 min-w-[620px] md:min-w-0">
              {/* Tab 1: Community */}
              <button
                type="button"
                onClick={() => handleTabChange("community")}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === "community"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}</span>
              </button>

              {/* Tab 2: Campus Ambassador */}
              <button
                type="button"
                onClick={() => handleTabChange("ambassador")}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === "ambassador"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
                }`}
              >
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>
                  {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassador"}
                </span>
              </button>

              {/* Tab 3: Directory */}
              <button
                type="button"
                onClick={() => handleTabChange("directory")}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === "directory"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span>
                  {isBn ? "ডিরেক্টরিতে তালিকাভুক্তি" : "Directory Listing"}
                </span>
              </button>

              {/* Tab 4: Direct Contact */}
              <button
                type="button"
                onClick={() => handleTabChange("contact")}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === "contact"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
                }`}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>{isBn ? "সরাসরি যোগাযোগ" : "Direct Inquiry"}</span>
              </button>
            </div>
          </div>

          {/* Main Grid: Form Left, Contact Sidebar Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Panel (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
              {/* TAB 1: Join Community Form */}
              {activeTab === "community" && (
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
                          href={SITE_CONFIG.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs btn-hard flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>
                            {isBn
                              ? "হোয়াটসঅ্যাপে চ্যাট করুন"
                              : "Chat on WhatsApp"}
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
                          placeholder={
                            isBn ? "উদা: মাহির আদনান" : "e.g. Mahir Adnan"
                          }
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
                            {isBn
                              ? "হোয়াটসঅ্যাপ / ফোন নম্বর *"
                              : "WhatsApp / Phone *"}
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
                            {isBn
                              ? "আপনার ভূমিকা / ক্যাটাগরি *"
                              : "Role / Category *"}
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
                              {isBn
                                ? "মেন্টর বা বিনিয়োগকারী"
                                : "Mentor / Investor"}
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
                            <span>
                              {isBn ? "জমা হচ্ছে..." : "Submitting..."}
                            </span>
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
              )}

              {/* TAB 2: Campus Ambassador Form */}
              {activeTab === "ambassador" && (
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
                          placeholder={
                            isBn ? "আপনার পূর্ণ নাম" : "Your Full Name"
                          }
                          value={ambData.name}
                          onChange={(e) =>
                            setAmbData({ ...ambData, name: e.target.value })
                          }
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
                            {isBn
                              ? "হোয়াটসঅ্যাপ / ফোন *"
                              : "WhatsApp / Phone *"}
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
                            {isBn
                              ? "কুষ্টিয়া সরকারি কলেজ"
                              : "Kushtia Govt College"}
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
                            placeholder={
                              isBn ? "যেমন: ২য় বর্ষ" : "e.g. 2nd Year"
                            }
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
                            <span>
                              {isBn ? "জমা হচ্ছে..." : "Submitting..."}
                            </span>
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
              )}

              {/* TAB 3: Directory Listing Form */}
              {activeTab === "directory" && (
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
                            {isBn
                              ? "উদ্যোগ / ব্যবসার নাম *"
                              : "Business / Venture Name *"}
                          </label>
                          <input
                            required
                            type="text"
                            placeholder={
                              isBn
                                ? "যেমন: গড়াই টেক ল্যাবস"
                                : "e.g. Gorai Tech Labs"
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
                            {isBn
                              ? "ইন্ডাস্ট্রি / ক্যাটাগরি *"
                              : "Industry Category *"}
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
                              {isBn
                                ? "হস্তশিল্প ও ফ্যাশন"
                                : "Handicrafts & Fashion"}
                            </option>
                            <option value="লজিস্টিকস ও সেবা">
                              {isBn
                                ? "লজিস্টিকস ও ডেলিভারি"
                                : "Logistics & Delivery"}
                            </option>
                            <option value="শিক্ষা ও এডটেক">
                              {isBn ? "শিক্ষা ও এডটেক" : "Education & EdTech"}
                            </option>
                            <option value="অন্যান্য এসএমই">
                              {isBn
                                ? "অন্যান্য লোকাল ব্যবসা"
                                : "Other Local Venture"}
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
                            {isBn
                              ? "যোগাযোগ / হোয়াটসঅ্যাপ *"
                              : "Contact / WhatsApp *"}
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
                            <span>
                              {isBn ? "জমা হচ্ছে..." : "Submitting..."}
                            </span>
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
              )}

              {/* TAB 4: Direct Inquiry & Partnership Form */}
              {activeTab === "contact" && (
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
                            {isBn
                              ? "যোগাযোগের উদ্দেশ্য *"
                              : "Inquiry Purpose *"}
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
                              {isBn
                                ? "প্রেস ও মিডিয়া জিজ্ঞাসা"
                                : "Media & Press"}
                            </option>
                            <option value="general">
                              {isBn
                                ? "সাধারণ জিজ্ঞাসা ও মতামত"
                                : "General Inquiry"}
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
                            <span>
                              {isBn ? "পাঠানো হচ্ছে..." : "Sending..."}
                            </span>
                          ) : (
                            <>
                              <span>
                                {isBn ? "বার্তা পাঠান" : "Send Message"}
                              </span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Direct Channels & Hub Info (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* WhatsApp Fast Channel Card */}
              <div className="bg-dark text-white rounded-3xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-light/15 text-brand-accent-light text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-accent-light animate-pulse"></span>
                    <span>{isBn ? "লাইভ রেসপন্স" : "Live Hotline"}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-2">
                  {isBn ? "তাৎক্ষণিক হোয়াটসঅ্যাপ সাপোর্ট" : "Instant WhatsApp"}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {isBn
                    ? "জরুরি প্রশ্ন বা দ্রুত সংযোগের জন্য আমাদের অফিশিয়াল হোয়াটসঅ্যাপ নম্বরে সরাসরি বার্তা পাঠান।"
                    : "For rapid replies and live support, reach out to our official WhatsApp helpline directly."}
                </p>

                <div className="text-sm font-black text-brand-accent-light mb-5 tracking-wide">
                  {SITE_CONFIG.whatsapp}
                </div>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs btn-hard flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {isBn ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Start WhatsApp Chat"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Info Card: Email & Location */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
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

                {/* Phone Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {isBn ? "ফোন / হেল্পলাইন" : "Phone / Helpline"}
                    </div>
                    <div className="text-sm font-bold text-heading">
                      {SITE_CONFIG.whatsapp}
                    </div>
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
          </div>

          {/* Bottom Accordion FAQ Section */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft2 text-brand-hover text-xs font-bold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{isBn ? "প্রশ্নোত্তর" : "FAQ"}</span>
              </div>
              <h3 className="text-2xl font-black text-heading">
                {isBn
                  ? "আবেদন ও যোগাযোগ সম্পর্কিত সাধারণ প্রশ্ন"
                  : "Frequently Asked Questions"}
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50/70 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-heading hover:text-brand transition-colors"
                    >
                      <span>{isBn ? faq.qBn : faq.qEn}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in border-t border-slate-200/50 pt-3">
                        {isBn ? faq.aBn : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenPolicy={(type) => setPolicyModalType(type)} />

      {/* Policy Modal */}
      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FC] text-brand">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-brand animate-ping"></span>
            <span className="text-sm font-bold text-heading">
              লোড হচ্ছে...
            </span>
          </div>
        </div>
      }
    >
      <ContactPageInner />
    </Suspense>
  );
}
