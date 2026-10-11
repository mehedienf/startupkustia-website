"use client";

import { useLanguage } from "@/context/LanguageContext";
import { VALUES_ITEMS } from "@/data/content";
import {
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Values() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-5 h-5 text-[#65A30D]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#65A30D]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#65A30D]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#65A30D]" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-[#65A30D]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#65A30D]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#65A30D]" />;
    }
  };

  return (
    <section
      id="values"
      className="py-20 md:py-28 bg-white border-b border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] mb-3">
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
            <span>{isBn ? "আমাদের মূল্যবোধ" : "Our Core Values"}</span>
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061C14] tracking-tight">
            {isBn ? "আমরা যা বিশ্বাস করি।" : "What We Stand For."}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়ার প্রতিটি সিদ্ধান্ত ও পদক্ষেপে পরিচালিত হয় এই ৬টি মৌলিক মূলনীতি দ্বারা।"
              : "The principles steering every initiative and partnership across Startup Kushtia."}
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES_ITEMS.map((val) => (
            <div
              key={val.id}
              className="p-7 rounded-2xl bg-[#F7FEE7] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 shadow-xs">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#061C14] mb-2">
                  {isBn ? val.titleBn : val.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? val.descBn : val.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
