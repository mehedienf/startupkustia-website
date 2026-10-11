"use client";

import AmbassadorTab from "@/components/contact/AmbassadorTab";
import CommunityTab from "@/components/contact/CommunityTab";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactSidebar from "@/components/contact/ContactSidebar";
import DirectContactTab from "@/components/contact/DirectContactTab";
import DirectoryTab from "@/components/contact/DirectoryTab";
import TabSwitcher, { TabType } from "@/components/contact/TabSwitcher";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyModal from "@/components/PolicyModal";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

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
      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
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
                {isBn
                  ? "যোগাযোগ ও আবেদন কেন্দ্র"
                  : "Connect & Applications Hub"}
              </span>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
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
          <TabSwitcher
            activeTab={activeTab}
            onTabChange={handleTabChange}
            isBn={isBn}
          />

          {/* Main Grid: Form Left, Contact Sidebar Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Panel (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10">
              {activeTab === "community" && <CommunityTab isBn={isBn} />}
              {activeTab === "ambassador" && <AmbassadorTab isBn={isBn} />}
              {activeTab === "directory" && <DirectoryTab isBn={isBn} />}
              {activeTab === "contact" && <DirectContactTab isBn={isBn} />}
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

export default function ContactPage() {
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
      <ContactPageInner />
    </Suspense>
  );
}
