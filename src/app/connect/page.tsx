"use client";

import Connect from "@/components/contact/Connect";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactSidebar from "@/components/contact/ContactSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyModal from "@/components/PolicyModal";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Suspense, useState } from "react";

function ConnectPageInner() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [policyModalType, setPolicyModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FC] text-[#444E69]">
      {/* Navigation */}
      <Header
        onOpenJoin={() => {
          window.scrollTo({ top: 380, behavior: "smooth" });
        }}
      />

      {/* Main Content Area - Generous top padding to prevent fixed navbar overlap */}
      <main className="flex-1 pt-36 sm:pt-40 md:pt-44 pb-20 relative overflow-hidden">
        {/* Subtle topographic river contour pattern */}
        <div
          className="absolute inset-0 bg-topography pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Breadcrumb & Hero Header */}
          <div className="mb-10 text-center sm:text-left">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link href="/" className="hover:text-brand transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <span>/</span>
              <span className="text-heading">
                {isBn ? "কানেক্ট" : "Connect"}
              </span>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
              <span>
                {isBn
                  ? "স্টার্টআপ কুষ্টিয়া কানেক্ট হাব"
                  : "Startup Kushtia Connect Hub"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading tracking-tight mb-4">
              {isBn
                ? "কানেক্ট ও মেম্বার রেজিস্ট্রেশন"
                : "Connect & Member Registration"}
            </h1>

            <p className="text-base sm:text-lg text-[#444E69] max-w-3xl leading-relaxed">
              {isBn
                ? "কুষ্টিয়ার উদ্যোক্তা, পেশাজীবী ও শিক্ষার্থীদের সাথে সংযোগ গড়তে এবং নতুন উদ্ভাবনী যাত্রার অংশ হতে নিচের রেজিস্ট্রেশন ফরমটি পূরণ করুন।"
                : "Fill out the member registration form below to connect, collaborate, and grow with entrepreneurs, professionals, and innovators in Kushtia."}
            </p>
          </div>

          {/* Main Grid: Connect Form Left (8 Cols), Contact Sidebar Right (4 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Panel (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100">
              <Connect isBn={isBn} />
            </div>

            {/* Right Column: Direct Channels & Hub Info (4 Cols) */}
            <div className="lg:col-span-4">
              <ContactSidebar isBn={isBn} />
            </div>
          </div>

          {/* Bottom Accordion FAQ Section */}
          <ContactFaq isBn={isBn} />
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

export default function ConnectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FC] text-brand">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-brand animate-ping"></span>
            <span className="text-sm font-bold text-heading">লোড হচ্ছে...</span>
          </div>
        </div>
      }
    >
      <ConnectPageInner />
    </Suspense>
  );
}
