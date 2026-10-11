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
        return <GraduationCap className="w-6 h-6 text-[#0C4DEB]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#0C4DEB]" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-[#0C4DEB]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#0C4DEB]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#0C4DEB]" />;
      case "Code":
        return <Code className="w-6 h-6 text-[#0C4DEB]" />;
      default:
        return <Rocket className="w-6 h-6 text-[#0C4DEB]" />;
    }
  };

  return (
    <section id="audience" className="py-20 md:py-28 bg-[#F5F7FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C4DEB] mb-3">
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
            <span>{isBn ? "কাদের জন্য" : "Who It Is For"}</span>
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000A3C] tracking-tight">
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
              className="group cursor-pointer bg-white p-7 rounded-2xl border border-[#E2E7F1] hover:border-[#0C4DEB] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EDF2FE] flex items-center justify-center mb-5 group-hover:bg-[#48E2E7]/25 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#000A3C] mb-2.5 group-hover:text-[#0C4DEB] transition-colors">
                  {isBn ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? item.descBn : item.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0C4DEB] group-hover:text-[#083DB8]">
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
