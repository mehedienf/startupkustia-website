'use client';

import React from 'react';
import {
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Scale,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { VALUES_ITEMS } from '@/data/content';

export default function Values() {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#0C4DEB]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#0C4DEB]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0C4DEB]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0C4DEB]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#0C4DEB]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#0C4DEB]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#0C4DEB]" />;
    }
  };

  return (
    <section id="values" className="py-20 md:py-28 bg-white border-b border-[#E2E7F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C4DEB] mb-3">
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
            <span>{isBn ? 'আমাদের মূল্যবোধ' : 'Our Core Values'}</span>
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000A3C] tracking-tight">
            {isBn ? 'আমরা যা বিশ্বাস করি।' : 'What We Stand For.'}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? 'স্টার্টআপ কুষ্টিয়ার প্রতিটি সিদ্ধান্ত ও পদক্ষেপে পরিচালিত হয় এই ৬টি মৌলিক মূলনীতি দ্বারা।'
              : 'The principles steering every initiative and partnership across Startup Kushtia.'}
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES_ITEMS.map((val) => (
            <div
              key={val.id}
              className="p-7 rounded-2xl bg-[#F5F7FC] border border-[#E2E7F1] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E7F1] flex items-center justify-center mb-4 shadow-sm">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#000A3C] mb-2">
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
