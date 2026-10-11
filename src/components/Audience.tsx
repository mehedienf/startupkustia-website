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
        return <GraduationCap className="w-6 h-6 text-brand" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-brand" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-brand" />;
      case "Store":
        return <Store className="w-6 h-6 text-brand" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-brand" />;
      case "Code":
        return <Code className="w-6 h-6 text-brand" />;
      default:
        return <Rocket className="w-6 h-6 text-brand" />;
    }
  };

  return (
    <section id="audience" className="py-20 md:py-28 bg-brand-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
            <span>{isBn ? "কাদের জন্য" : "Who It Is For"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
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
                <div className="w-12 h-12 rounded-xl bg-brand-soft2 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-heading mb-2.5 group-hover:text-brand transition-colors">
                  {isBn ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? item.descBn : item.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand group-hover:text-brand-hover">
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
