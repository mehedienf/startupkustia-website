'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/data/content';

interface HeroProps {
  onOpenJoin: () => void;
}

export default function Hero({ onOpenJoin }: HeroProps) {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000A3C] via-[#0A1A55] to-[#000A3C] text-white pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background ambient decorative shapes & grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#48E2E7_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Glowing atmospheric circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0C4DEB]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#48E2E7]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#48E2E7]/40 text-[#48E2E7] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#48E2E7] animate-ping"></span>
          <span>{isBn ? SITE_CONFIG.locationBn : SITE_CONFIG.locationEn}</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.25] text-white font-display mb-6">
          {isBn ? (
            <>
              আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার{' '}
              <span className="sk-hl-dark inline-block px-3 py-0.5 rounded-md text-[#000A3C] shadow-lg">
                লঞ্চপ্যাড
              </span>
              ।
            </>
          ) : (
            <>
              Kushtia&apos;s Launchpad for Ideas &amp;{' '}
              <span className="sk-hl-dark inline-block px-3 py-0.5 rounded-md text-[#000A3C] shadow-lg">
                Businesses
              </span>
              .
            </>
          )}
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-base sm:text-xl text-[#C9D2EA] max-w-2xl leading-relaxed mb-10 font-normal">
          {isBn ? SITE_CONFIG.heroSubtitleBn : SITE_CONFIG.heroSubtitleEn}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          <button
            type="button"
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold text-base btn-hard flex items-center justify-center gap-2.5 group"
          >
            <span>{isBn ? 'কমিউনিটিতে যোগ দিন' : 'Join the Community'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#directory"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border-2 border-white/20 hover:border-white/40 transition-all text-center backdrop-blur-sm"
          >
            {isBn ? 'ডিরেক্টরি দেখুন' : 'Explore Directory'}
          </a>
        </div>

        {/* Metrics Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="text-center p-3 border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#48E2E7] font-display">
              {isBn ? '৫০০+' : '500+'}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              {isBn ? 'কমিউনিটি মেম্বার' : 'Community Members'}
            </div>
          </div>

          <div className="text-center p-3 border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#48E2E7] font-display">
              {isBn ? '৫০+' : '50+'}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              {isBn ? 'স্টার্টআপ ও ব্যবসা' : 'Startups & Ventures'}
            </div>
          </div>

          <div className="text-center p-3 border-r border-white/10 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#48E2E7] font-display">
              {isBn ? '১২+' : '12+'}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              {isBn ? 'ক্যাম্পাস পার্টনার' : 'Campus Partners'}
            </div>
          </div>

          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#48E2E7] font-display">
              {isBn ? '২০+' : '20+'}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              {isBn ? 'মেন্টর ও বিশেষজ্ঞ' : 'Mentors & Advisors'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
