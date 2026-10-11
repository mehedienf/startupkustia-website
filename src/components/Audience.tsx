"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AUDIENCE_ITEMS } from "@/data/content";
import {
  ArrowRight,
  Briefcase,
  Code,
  Compass,
  GraduationCap,
  Rocket,
  Store,
} from "lucide-react";

interface AudienceProps {
  onSelectCategory: () => void;
}

export default function Audience({ onSelectCategory }: AudienceProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-[#65A30D]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#65A30D]" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-[#65A30D]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#65A30D]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#65A30D]" />;
      case "Code":
        return <Code className="w-6 h-6 text-[#65A30D]" />;
      default:
        return <Rocket className="w-6 h-6 text-[#65A30D]" />;
    }
  };

  return (
    <section id="audience" className="py-20 md:py-28 bg-[#F7FEE7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] mb-3">
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
            <span>{isBn ? "কাদের জন্য" : "Who It Is For"}</span>
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061C14] tracking-tight">
            {isBn
              ? "যারা গড়ে তোলে, তাদের জন্য।"
              : "Built for Those Who Create & Scale."}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "আইডিয়া থেকে পূর্ণাঙ্গ ব্যবসা — কুষ্টিয়ার প্রতিটি স্তরের স্বপ্নদ্রষ্টাদের জন্য আমাদের সুনির্দিষ্ট প্রোগ্রাম।"
              : "From embryonic campus ideas to scaling enterprises across Kushtia."}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={onSelectCategory}
              className="group cursor-pointer bg-white p-7 rounded-2xl shadow-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ECFCCB] flex items-center justify-center mb-5 group-hover:bg-[#A3E635]/25 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#061C14] mb-2.5 group-hover:text-[#65A30D] transition-colors">
                  {isBn ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? item.descBn : item.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#65A30D] group-hover:text-[#4D7C0F]">
                <span>{isBn ? "যুক্ত হোন" : "Get Involved"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
