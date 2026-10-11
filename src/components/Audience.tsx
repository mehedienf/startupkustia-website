"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Heart, Play } from "lucide-react";
import Image from "next/image";

interface AudienceProps {
  onSelectCategory: () => void;
}

export default function Audience({ onSelectCategory }: AudienceProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section
      id="audience"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-brand-soft relative overflow-hidden"
    >
      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse" />
            <span>{isBn ? "পরিচিতি ও ইকোসিস্টেম" : "About Ecosystem"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            {isBn
              ? "যাঁরা নতুন কিছু গড়েন, তাঁদের জন্য।"
              : "Built for Those Who Create & Scale."}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "আইডিয়া থেকে পূর্ণাঙ্গ ব্যবসা — কুষ্টিয়ার প্রতিটি স্তরের স্বপ্নদ্রষ্টাদের জন্য আমাদের সুনির্দিষ্ট উদ্যোগ।"
              : "From embryonic campus ideas to scaling enterprises across Kushtia."}
          </p>
        </div>

        {/* Modern Bento Grid (Inspired by the Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* ========================================================
              COLUMN 1 (Left): Top Pink Stat Card + Bottom Tech Card
             ======================================================== */}
          <div className="flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 1A: First Round / Campus Validation (Pink Blush Card) */}
            <div
              onClick={onSelectCategory}
              className="bg-[#FDECEF] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[300px]"
            >
              <div>
                <p className="text-xs font-bold text-slate-800 tracking-tight text-center">
                  {isBn
                    ? "প্রথম রাউন্ডের ভ্যালিডেশন"
                    : "First Round of Validation"}
                </p>

                {/* Circular Progress Ring */}
                <div className="relative my-6 flex items-center justify-center">
                  <svg
                    className="w-28 h-28 -rotate-90"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FAD2DA"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#D92656"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      ৭৫%
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {isBn ? "প্রগ্রেস" : "In Progress"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  ২.৫K+
                </div>
                <p className="text-xs text-[#525D7A] font-medium mt-1 leading-snug">
                  {isBn
                    ? "শিক্ষার্থী ও প্রাথমিক পর্যায়ের উদ্যোগ"
                    : "Student innovations & early founders"}
                </p>
              </div>
            </div>

            {/* Card 1B: Smart Digital / Tech Freelancers (White Card with Dual Capsule Photos) */}
            <div
              onClick={onSelectCategory}
              className="bg-white rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[340px]"
            >
              <div>
                <span className="inline-block bg-[#18181B] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-xl mb-3 tracking-wide">
                  {isBn ? "স্মার্ট ডিজিটাল উদ্যোক্তা" : "Smart Tech Builders"}
                </span>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {isBn
                    ? "ফ্রিল্যান্সার থেকে নিজস্ব প্রোডাক্ট প্রতিষ্ঠাতা"
                    : "Empowering Freelancers to Build Tech Products"}
                </h3>
              </div>

              {/* Dual Rounded Capsule Portraits */}
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="w-20 h-28 rounded-full overflow-hidden relative border-2 border-slate-100 bg-slate-100">
                  <Image
                    src="/images/team/shourov.jpg"
                    alt="Builder"
                    fill
                    sizes="80px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-20 h-28 rounded-full overflow-hidden relative border-2 border-slate-100 bg-slate-100 translate-y-3">
                  <Image
                    src="/images/team/saqlaen.jpg"
                    alt="Developer"
                    fill
                    sizes="80px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-emerald-500 border border-white" />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand">
                <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Explore Community"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMNS 2 & 3 (Center): Big Hero Showcase + 2 Mini Cards
             ======================================================== */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 2A: Large Centerpiece Hero with Floating UI Badges */}
            <div
              onClick={onSelectCategory}
              className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[440px]"
            >
              {/* Top Metrics Row */}
              <div className="flex items-start justify-between relative z-10 mb-4">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>৪.৮৭৫</span>
                    <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {isBn ? "বাৎসরিক ইকোসিস্টেম রিচ" : "Annual Project Views"}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 font-medium">
                    {isBn ? "নতুন কানেকশন" : "New Members"}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-end gap-2">
                    <span>৫৭K</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +১০%
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Portrait and Floating UI Cards */}
              <div className="relative my-2 flex items-center justify-center">
                {/* Central Founder Portrait Frame */}
                <div className="relative w-48 sm:w-56 h-56 sm:h-64 rounded-3xl overflow-hidden bg-slate-100 z-0">
                  <Image
                    src="/images/team/farhana.jpg"
                    alt="Startup Leader"
                    fill
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Widget 1: Bar Chart (Top Right of Photo) */}
                <div className="absolute top-2 right-0 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 border border-slate-100/90 shadow-xs z-10 hidden sm:block">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {isBn ? "অ্যাক্টিভিটি" : "Growth Activity"}
                  </span>
                  <div className="flex items-end gap-1.5 h-8">
                    <span className="w-1.5 h-3 rounded-xs bg-amber-400" />
                    <span className="w-1.5 h-6 rounded-xs bg-orange-500" />
                    <span className="w-1.5 h-4 rounded-xs bg-brand" />
                    <span className="w-1.5 h-8 rounded-xs bg-brand" />
                    <span className="w-1.5 h-5 rounded-xs bg-amber-500" />
                  </div>
                </div>

                {/* Floating Widget 2: Sparkline / Views (Left of Photo) */}
                <div className="absolute bottom-10 left-0 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-slate-100/90 shadow-xs z-10 flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-none">
                      ২৬,৮০৭
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {isBn ? "কমিউনিটি ইম্প্রেশন" : "Impressions"}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 50 16"
                    className="w-12 h-4 text-brand ml-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 13 Q 12 15 22 8 T 38 5 T 48 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Floating Widget 3: Engagement Rate Card (Bottom Right of Photo) */}
                <div className="absolute -bottom-2 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-100/90 shadow-xs z-10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center">
                      <Heart className="w-2.5 h-2.5 fill-brand text-brand" />
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      ১৯.৪৬%
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {isBn ? "এনগেজমেন্ট রেট" : "Engagement Rate"}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full inline-block mt-1">
                    ▲ +১০২.৪৮%
                  </span>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="relative z-10 pt-4 text-center sm:text-left">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  {isBn ? "কুষ্টিয়া লঞ্চপ্যাড" : "Kushtia Launchpad"}
                </span>
                <p className="text-sm font-bold text-heading mt-0.5">
                  {isBn
                    ? "উদ্ভাবন, তরুণ মেধা ও ব্যবসার সংযোগস্থল"
                    : "Catalyzing Founders & Scale-ups from Kushtia"}
                </p>
              </div>
            </div>

            {/* Bottom Two Cards of Center Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 2B: Founder Roadmap / Color Swatches */}
              <div
                onClick={onSelectCategory}
                className="bg-white rounded-[28px] p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[170px]"
              >
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {isBn ? "রোডম্যাপ" : "Roadmap"}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {isBn
                      ? "০ থেকে ১ স্টার্টআপ গাইড"
                      : "0 to 1 Founder Journey"}
                  </p>
                </div>

                {/* Color Swatch Pills (Direct homage to screenshot) */}
                <div className="flex items-center gap-2.5 my-3">
                  <span
                    className="w-8 h-8 rounded-xl bg-[#18181B] inline-block shadow-xs"
                    title="আইডিয়া"
                  />
                  <span
                    className="w-8 h-8 rounded-xl bg-[#94A3B8] inline-block shadow-xs"
                    title="টিম"
                  />
                  <span
                    className="w-8 h-8 rounded-xl bg-[#D92656] inline-block shadow-xs"
                    title="এমভিপি"
                  />
                  <span
                    className="w-8 h-8 rounded-xl bg-[#FDECEF] inline-block shadow-xs"
                    title="স্কেল"
                  />
                </div>

                <p className="text-[11px] text-[#525D7A] font-medium leading-relaxed">
                  {isBn
                    ? "আইডিয়া যাচাই · টিম গঠন · প্রোডাক্ট লঞ্চ"
                    : "Ideate · Team · MVP · Scale"}
                </p>
              </div>

              {/* Card 2C: Future Vision + 3D Asterisk Icon (Blush Pink Card) */}
              <div
                onClick={onSelectCategory}
                className="bg-[#FDECEF] rounded-[28px] p-6 flex items-center justify-between gap-3 group hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[170px]"
              >
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {isBn
                      ? "কুষ্টিয়ার ভবিষ্যৎ ইকোসিস্টেম তৈরি করছি"
                      : "We Build Future of Regional Startups"}
                  </h4>
                  <p className="text-xs text-[#525D7A] font-medium mt-1.5 leading-relaxed">
                    {isBn
                      ? "উদ্ভাবন, মেন্টরশিপ ও বৈশ্বিক সংযোগ।"
                      : "Crafting sustainable regional impact."}
                  </p>
                </div>

                {/* 3D Asterisk Star Vector */}
                <div className="shrink-0 group-hover:rotate-45 transition-transform duration-500">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="astGrad" cx="35%" cy="30%" r="75%">
                        <stop offset="0%" stopColor="#52525b" />
                        <stop offset="45%" stopColor="#18181b" />
                        <stop offset="100%" stopColor="#09090b" />
                      </radialGradient>
                    </defs>
                    <g fill="url(#astGrad)">
                      {[0, 45, 90, 135].map((angle) => (
                        <rect
                          key={angle}
                          x="42"
                          y="10"
                          width="16"
                          height="80"
                          rx="8"
                          transform={`rotate(${angle} 50 50)`}
                        />
                      ))}
                    </g>
                    <circle cx="50" cy="50" r="14" fill="#09090b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMN 4 (Right): Team + Spring Card & Logo Hub Card
             ======================================================== */}
          <div className="flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 3A: Team & Passionate Builders + 3D Spring (White Card) */}
            <div
              onClick={onSelectCategory}
              className="bg-white rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[340px]"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {isBn
                    ? "উদ্যোক্তা, ডিজাইনার ও মেন্টরদের ঐক্যবদ্ধ দল"
                    : "Team of passionate founders and mentors"}
                </h3>

                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2.5 my-4">
                  {[
                    "/images/team/shourov.jpg",
                    "/images/team/saqlaen.jpg",
                    "/images/team/farhana.jpg",
                    "/images/team/xahid.jpg",
                  ].map((imgSrc, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white bg-slate-100 shrink-0"
                    >
                      <Image
                        src={imgSrc}
                        alt="Member"
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold border-2 border-white shrink-0">
                    +৫০
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-500 font-medium">
                    {isBn ? "নিয়মিত নতুন উদ্যোগ" : "Daily New Ventures"}
                  </span>
                  <div className="text-4xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    ৫৪+
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
                    +৪০% প্রবৃদ্ধি
                  </span>
                </div>
              </div>

              {/* 3D Chrome Metallic Spring Element */}
              <div className="self-end -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-500">
                <svg
                  viewBox="0 0 100 130"
                  className="w-20 h-24 filter drop-shadow-sm"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="springChrome"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="20%" stopColor="#94a3b8" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="80%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>
                  {/* Coiled loops */}
                  <path
                    d="M 25 20 C 70 8 95 24 80 42 C 60 62 20 48 20 58 C 20 68 70 54 85 72 C 95 86 65 102 30 96 C 15 92 40 114 75 110"
                    fill="none"
                    stroke="url(#springChrome)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Card 3B: Geometric Logo / Hub Card - Stretches down to bottom baseline */}
            <div
              onClick={onSelectCategory}
              className="bg-white rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-between text-center group hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[240px]"
            >
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {isBn ? "ইকোসিস্টেম নেটওয়ার্ক" : "Ecosystem Network"}
              </span>

              {/* Geometric Interlocking Rings (Venn) */}
              <div className="my-auto py-2 group-hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                <svg
                  viewBox="0 0 100 85"
                  className="w-16 h-14"
                  aria-hidden="true"
                >
                  <circle
                    cx="36"
                    cy="35"
                    r="22"
                    fill="none"
                    stroke="#18181B"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="64"
                    cy="35"
                    r="22"
                    fill="none"
                    stroke="#18181B"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="50"
                    cy="58"
                    r="22"
                    fill="none"
                    stroke="#18181B"
                    strokeWidth="3.5"
                  />
                </svg>

                <h4 className="text-xl font-black tracking-widest text-slate-900 uppercase mt-3">
                  {isBn ? "কুষ্টিয়া হাব" : "KUSHTIA HUB"}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1 max-w-[210px] leading-relaxed">
                  {isBn
                    ? "এসএমই, ঐতিহ্যবাহী তাঁত ও এগ্রো-টেক পার্টনারশিপ"
                    : "SMEs, Crafts & Regional Ventures"}
                </p>
              </div>

              {/* Bottom interactive link */}
              <div className="pt-3 border-t border-slate-100 w-full flex items-center justify-between text-xs font-bold text-brand">
                <span>{isBn ? "যুক্ত হোন" : "Connect Now"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic river wave transition into Pillars section */}
      <RiverWaveDivider position="bottom" color="text-white" flip={true} />
    </section>
  );
}
