'use client';

import React from 'react';
import {
  Users,
  Laptop,
  UserCheck,
  Layers,
  BookOpen,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PILLAR_ITEMS } from '@/data/content';

interface PillarsProps {
  onOpenJoin: () => void;
}

export default function Pillars({ onOpenJoin }: PillarsProps) {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#000A3C]" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#000A3C]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#000A3C]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#000A3C]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#000A3C]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#000A3C]" />;
      default:
        return <Laptop className="w-6 h-6 text-[#000A3C]" />;
    }
  };

  return (
    <section id="pillars" className="py-20 md:py-28 bg-white border-y border-[#E2E7F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C4DEB] mb-3">
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
            <span>{isBn ? 'আমরা যা করি' : 'What We Do'}</span>
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000A3C] tracking-tight">
            {isBn ? (
              <>
                ছয়ভাবে আমরা আপনার বিকাশে{' '}
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
              ? 'কুষ্টিয়ার উদ্যোক্তা ইকোসিস্টেমকে সক্রিয় ও স্বয়ংসম্পূর্ণ করে তুলতে আমাদের কার্যকরী উদ্যোগসমূহ।'
              : 'Actionable programs designed to empower and accelerate entrepreneurs in Kushtia.'}
          </p>
        </div>

        {/* 6 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLAR_ITEMS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-[#F5F7FC] border border-[#E2E7F1] hover:border-[#0C4DEB] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#48E2E7] flex items-center justify-center shadow-sm">
                    {getIcon(pillar.iconName)}
                  </div>
                  {pillar.tagBn && (
                    <span className="px-2.5 py-1 rounded-md bg-white text-[#000A3C] text-[11px] font-bold border border-[#E2E7F1] uppercase tracking-wider">
                      {isBn ? pillar.tagBn : pillar.tagEn}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#000A3C] mb-3">
                  {isBn ? pillar.titleBn : pillar.titleEn}
                </h3>
                <p className="text-sm text-[#444E69] leading-relaxed">
                  {isBn ? pillar.descBn : pillar.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E7F1]/70 flex items-center justify-between">
                <button
                  type="button"
                  onClick={pillar.id === 'directory' ? () => window.location.hash = 'directory' : onOpenJoin}
                  className="text-xs font-bold text-[#0C4DEB] hover:text-[#083DB8] flex items-center gap-1 group"
                >
                  <span>{isBn ? 'বিস্তারিত জানুন' : 'Learn More'}</span>
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
