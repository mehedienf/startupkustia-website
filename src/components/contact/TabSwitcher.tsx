"use client";

import { Building2, GraduationCap, MessageSquare, Users } from "lucide-react";

export type TabType = "community" | "ambassador" | "directory" | "contact";

interface TabSwitcherProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isBn: boolean;
}

export default function TabSwitcher({
  activeTab,
  onTabChange,
  isBn,
}: TabSwitcherProps) {
  return (
    <div className="bg-white p-2 rounded-2xl mb-10 overflow-x-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 min-w-[620px] md:min-w-0">
        {/* Tab 1: Community */}
        <button
          type="button"
          onClick={() => onTabChange("community")}
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
          onClick={() => onTabChange("ambassador")}
          className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
            activeTab === "ambassador"
              ? "bg-brand text-white shadow-sm"
              : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
          }`}
        >
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span>{isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassador"}</span>
        </button>

        {/* Tab 3: Directory */}
        <button
          type="button"
          onClick={() => onTabChange("directory")}
          className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
            activeTab === "directory"
              ? "bg-brand text-white shadow-sm"
              : "bg-slate-50/80 text-slate-700 hover:bg-brand-soft hover:text-brand"
          }`}
        >
          <Building2 className="w-4 h-4 shrink-0" />
          <span>{isBn ? "ডিরেক্টরিতে তালিকাভুক্তি" : "Directory Listing"}</span>
        </button>

        {/* Tab 4: Direct Contact */}
        <button
          type="button"
          onClick={() => onTabChange("contact")}
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
  );
}
