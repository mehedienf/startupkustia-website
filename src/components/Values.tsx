"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
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
        return <Lightbulb className="w-5 h-5 text-brand" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-brand" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-brand" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-brand" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-brand" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-brand" />;
      default:
        return <Lightbulb className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <section
      id="values"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-white relative overflow-hidden"
    >
      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
            <span>{isBn ? "আমাদের মূল্যবোধ" : "Our Core Values"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
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
              className="p-7 rounded-2xl bg-brand-soft card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 shadow-xs">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
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

      {/* Organic river wave transition into Team section */}
      <RiverWaveDivider position="bottom" color="text-brand-soft" flip={true} />
    </section>
  );
}
