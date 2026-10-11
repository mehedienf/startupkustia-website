"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PILLAR_ITEMS } from "@/data/content";
import {
  ArrowUpRight,
  BookOpen,
  Cpu,
  Laptop,
  Layers,
  UserCheck,
  Users,
} from "lucide-react";

interface PillarsProps {
  onOpenJoin: () => void;
}

export default function Pillars({ onOpenJoin }: PillarsProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-6 h-6 text-[#061C14]" />;
      case "Laptop":
        return <Laptop className="w-6 h-6 text-[#061C14]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#061C14]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#061C14]" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#061C14]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#061C14]" />;
      default:
        return <Laptop className="w-6 h-6 text-[#061C14]" />;
    }
  };

  return (
    <section
      id="pillars"
      className="py-20 md:py-28 bg-white border-y border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] mb-3">
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
            <span>{isBn ? "আমরা যা করি" : "What We Do"}</span>
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061C14] tracking-tight">
            {isBn ? (
              <>
                ছয়ভাবে আমরা আপনার বিকাশে{" "}
                <span className="sk-hl">পাশে আছি</span>।
              </>
            ) : (
              <>
                Six Ways We Back Your <span className="sk-hl">Growth</span>.
              </>
            )}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "কুষ্টিয়ার উদ্যোক্তা ইকোসিস্টেমকে সক্রিয় ও স্বয়ংসম্পূর্ণ করে তুলতে আমাদের কার্যকরী উদ্যোগসমূহ।"
              : "Actionable programs designed to empower and accelerate entrepreneurs in Kushtia."}
          </p>
        </div>

        {/* 6 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLAR_ITEMS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-[#F7FEE7] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#A3E635] flex items-center justify-center shadow-xs">
                    {getIcon(pillar.iconName)}
                  </div>
                  {pillar.tagBn && (
                    <span className="px-2.5 py-1 rounded-md bg-white text-[#061C14] text-[11px] font-bold shadow-xs uppercase tracking-wider">
                      {isBn ? pillar.tagBn : pillar.tagEn}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#061C14] mb-3">
                  {isBn ? pillar.titleBn : pillar.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? pillar.descBn : pillar.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={
                    pillar.id === "directory"
                      ? () => (window.location.hash = "directory")
                      : onOpenJoin
                  }
                  className="text-xs font-bold text-[#65A30D] hover:text-[#4D7C0F] flex items-center gap-1 group"
                >
                  <span>{isBn ? "বিস্তারিত জানুন" : "Learn More"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
