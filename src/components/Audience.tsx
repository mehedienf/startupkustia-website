"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Heart,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light sm:font-normal text-heading tracking-tight">
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

        {/* Modern Bento Grid — 100% Relatable to Startup Kushtia (No Photo Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* ========================================================
              COLUMN 1 (Left): Campus Innovations + Gorai Tech Builders
             ======================================================== */}
          <div className="flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 1A: Islamic University & Campus Innovations */}
            <div
              onClick={onSelectCategory}
              className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer flex-1 min-h-[310px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/75 border border-white/80 text-brand flex items-center justify-center shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    {isBn ? "ক্যাম্পাস ইনোভেশন" : "Campus Hub"}
                  </span>
                </div>

                <p className="text-xs font-bold text-slate-800 tracking-tight uppercase">
                  {isBn
                    ? "ইসলামী বিশ্ববিদ্যালয় ও তরুণ মেধা"
                    : "IU Campus & Youth Hub"}
                </p>

                {/* Circular Progress Ring: Validation Rate */}
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
                      strokeDashoffset="37.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {isBn ? "৮৫%" : "85%"}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {isBn ? "আইডিয়া যাচাই" : "Validated"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {isBn ? "১২+" : "12+"}
                </div>
                <p className="text-xs text-[#525D7A] font-medium mt-1 leading-snug">
                  {isBn
                    ? "ইসলামী বিশ্ববিদ্যালয় ও কুষ্টিয়ার কলেজ ক্যাম্পাস"
                    : "Islamic University & Kushtia Colleges"}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-2.5 flex-wrap">
                  <span className="text-[10px] font-semibold bg-white/80 px-2 py-0.5 rounded-md text-slate-700 border border-white/60">
                    IU Campus
                  </span>
                  <span className="text-[10px] font-semibold bg-white/80 px-2 py-0.5 rounded-md text-slate-700 border border-white/60">
                    {isBn ? "পলিটেকনিক" : "Polytechnic"}
                  </span>
                  <span className="text-[10px] font-semibold bg-white/80 px-2 py-0.5 rounded-md text-slate-700 border border-white/60">
                    {isBn ? "কুষ্টিয়া সদর" : "Kushtia Sadar"}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 1B: Gorai Tech / Freelancers to SaaS Builders */}
            <div
              onClick={onSelectCategory}
              className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer flex-1 min-h-[340px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/75 border border-white/80 text-brand flex items-center justify-center shadow-2xs">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="inline-block bg-[#18181B] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg tracking-wide">
                    {isBn ? "গড়াই টেক" : "Gorai Tech"}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {isBn
                    ? "ফ্রিল্যান্সার থেকে নিজস্ব SaaS ও সফটওয়্যার স্টার্টআপ"
                    : "Freelancers to Global SaaS Founders"}
                </h3>

                {/* Sleek Terminal / Code Interface Visual (No Photo) */}
                <div className="my-5 p-3.5 rounded-2xl bg-slate-900/95 text-white shadow-inner font-mono text-xs space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-sans font-semibold">
                      gorai.tech
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    <span>$ launch-saas --kushtia</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-300 pt-0.5">
                    <span className="text-rose-300 font-bold">✓ AI & SaaS</span>
                    <span className="text-emerald-400 font-bold">100% Local</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs font-bold text-brand group-hover:text-brand-hover transition-colors">
                <span>
                  {isBn ? "টেক কমিউনিটিতে যুক্ত হোন" : "Join Tech Circle"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMNS 2 & 3 (Center): Kushtia Launchpad Hero + Building Blocks
             ======================================================== */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 2A: Large Centerpiece Hero with Authentic Kushtia Startup Pulse (No Photo) */}
            <div
              onClick={onSelectCategory}
              className="bg-white/50 backdrop-blur-md rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer flex-1 min-h-[440px] border border-white/85 shadow-[0_8px_30px_-4px_rgba(217,38,86,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
            >
              {/* Top Metrics Row: Upazilas & Community Network */}
              <div className="flex items-start justify-between relative z-10 mb-4">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{isBn ? "৬টি উপজেলা" : "6 Upazilas"}</span>
                    <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {isBn
                      ? "সমন্বিত কুষ্টিয়া জেলা নেটওয়ার্ক"
                      : "6 Upazilas of Kushtia Connected"}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 font-medium">
                    {isBn ? "কমিউনিটি উদ্যোক্তা" : "Active Founders"}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-end gap-2">
                    <span>{isBn ? "৫০০+" : "500+"}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {isBn ? "+৭৫% গ্রোথ" : "+75% Growth"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Central Ecosystem Impact Hub Visual (Vector & Data Based, No Photo) */}
              <div className="my-5 relative flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-white/40 border border-white/75 backdrop-blur-xs">
                {/* Visual Launchpad Icon Pod */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand to-rose-400 text-white flex items-center justify-center shadow-lg shadow-brand/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    {isBn
                      ? "কুষ্টিয়া স্টার্টআপ ইকোসিস্টেম হাব"
                      : "Kushtia Startup Ecosystem Hub"}
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {isBn
                      ? "আইডিয়া ইনকিউবেশন · টেক মেন্টরশিপ · সিড নেটওয়ার্ক"
                      : "Idea Incubation · Tech Mentorship · Seed Network"}
                  </p>
                </div>

                {/* 3 Impact Micro Badges Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mt-5">
                  {/* Pod 1: Pipeline */}
                  <div className="p-3 rounded-xl bg-white/75 border border-white/80 shadow-2xs">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      {isBn ? "আইডিয়া ➔ এমভিপি" : "Ideate ➔ MVP"}
                    </span>
                    <div className="flex items-end gap-1.5 h-6">
                      <span
                        className="w-1.5 h-2 rounded-xs bg-amber-400"
                        title={isBn ? "আইডিয়া" : "Idea"}
                      />
                      <span
                        className="w-1.5 h-3.5 rounded-xs bg-orange-500"
                        title={isBn ? "টিম" : "Team"}
                      />
                      <span
                        className="w-1.5 h-3 rounded-xs bg-rose-400"
                        title={isBn ? "ভ্যালিডেশন" : "Validation"}
                      />
                      <span
                        className="w-1.5 h-6 rounded-xs bg-brand"
                        title={isBn ? "এমভিপি" : "MVP"}
                      />
                      <span
                        className="w-1.5 h-4.5 rounded-xs bg-emerald-500"
                        title={isBn ? "মার্কেট লঞ্চ" : "Market Launch"}
                      />
                    </div>
                  </div>

                  {/* Pod 2: Community Attendees */}
                  <div className="p-3 rounded-xl bg-white/75 border border-white/80 shadow-2xs flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        {isBn ? "মিটআপ উপস্থিতি" : "Attendees"}
                      </span>
                      <span className="text-sm font-extrabold text-slate-900 block leading-tight mt-0.5">
                        {isBn ? "১,২০০+" : "1,200+"}
                      </span>
                    </div>
                    <span className="text-[9px] text-emerald-600 font-bold mt-1">
                      {isBn ? "নিয়মিত সেশন" : "Regular Sessions"}
                    </span>
                  </div>

                  {/* Pod 3: Regional Scope */}
                  <div className="p-3 rounded-xl bg-white/75 border border-white/80 shadow-2xs flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        {isBn ? "তৃণমূল উদ্ভাবন" : "Grassroots"}
                      </span>
                      <span className="text-xs font-bold text-slate-900 block leading-tight mt-0.5">
                        {isBn ? "পদ্মা ও গড়াই" : "Padma & Gorai"}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-brand mt-1">
                      {isBn ? "▲ রিজিওনাল টু গ্লোবাল" : "▲ Regional to Global"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Official Slogan */}
              <div className="relative z-10 pt-2 text-center sm:text-left">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  {isBn
                    ? "বিল্ডিং ব্লকস · কানেক্টিং ডটস"
                    : "Building Blocks · Connecting Dots"}
                </span>
                <p className="text-sm font-bold text-heading mt-0.5">
                  {isBn
                    ? "জ্ঞান, মেন্টরশিপ, প্রযুক্তি ও নেটওয়ার্কে কুষ্টিয়ার উদ্যোক্তাদের ঐক্যবদ্ধ প্ল্যাটফর্ম"
                    : "Connecting ideas, founders & capital across Kushtia"}
                </p>
              </div>
            </div>

            {/* Bottom Two Cards: 4 Building Blocks & Heritage Meets Tech */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 2B: 4 Core Building Blocks of Startup Kushtia */}
              <div
                onClick={onSelectCategory}
                className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 flex flex-col justify-between group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer min-h-[170px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
              >
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {isBn ? "৪টি কোর বিল্ডিং ব্লক" : "4 Building Blocks"}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {isBn
                      ? "উদ্যোগকে সফল করার ৪ ধাপ"
                      : "How We Accelerate Founders"}
                  </p>
                </div>

                {/* The 4 Building Block Swatches */}
                <div className="flex items-center gap-2 my-2.5">
                  <div className="flex-1 text-center">
                    <span className="w-full h-7 rounded-lg bg-[#18181B] flex items-center justify-center text-[10px] font-bold text-white shadow-2xs">
                      {isBn ? "জ্ঞান" : "Info"}
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="w-full h-7 rounded-lg bg-[#64748B] flex items-center justify-center text-[10px] font-bold text-white shadow-2xs">
                      {isBn ? "মেন্টর" : "Mentor"}
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="w-full h-7 rounded-lg bg-[#D92656] flex items-center justify-center text-[10px] font-bold text-white shadow-2xs">
                      {isBn ? "প্রযুক্তি" : "Tech"}
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="w-full h-7 rounded-lg bg-[#FDECEF] border border-brand/20 flex items-center justify-center text-[10px] font-bold text-brand shadow-2xs">
                      {isBn ? "নেটওয়ার্ক" : "Capital"}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#525D7A] font-medium leading-relaxed">
                  {isBn
                    ? "জ্ঞান · মেন্টরশিপ · প্রযুক্তি · নেটওয়ার্ক"
                    : "Knowledge · Mentorship · Technology · Network"}
                </p>
              </div>

              {/* Card 2C: Lalon & Tagore Heritage to Tech Innovation */}
              <div
                onClick={onSelectCategory}
                className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 flex items-center justify-between gap-3 group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer min-h-[170px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
              >
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {isBn
                      ? "ঐতিহ্যের মাটি থেকে টেক-উদ্ভাবন"
                      : "Heritage Soil to Modern Tech"}
                  </h4>
                  <p className="text-xs text-[#525D7A] font-medium mt-1.5 leading-relaxed">
                    {isBn
                      ? "তাঁত, জৈব কৃষি ও কুষ্টিয়ার সৃজনশীল মেধা — আধুনিক প্রযুক্তিতে বৈশ্বিক প্রসার।"
                      : "Preserving cultural heritage with modern tech solutions."}
                  </p>
                </div>

                {/* 3D Asterisk / River Confluence Star Vector */}
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
              COLUMN 4 (Right): Founding Circle & Regional Hub
             ======================================================== */}
          <div className="flex flex-col gap-4 sm:gap-5 h-full">
            {/* Card 3A: Kushtia Founding Circle & Mentors (No Photos) */}
            <div
              onClick={onSelectCategory}
              className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[340px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/75 border border-white/80 text-brand flex items-center justify-center shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    {isBn ? "মেন্টর সার্কেল" : "Mentor Circle"}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {isBn
                    ? "ফাউন্ডিং লিডারশিপ ও মেন্টর সার্কেল"
                    : "Founding Leadership & Mentor Circle"}
                </h3>

                {/* Stylized Discipline Icon Badges (Clean vector icons, no face photos) */}
                <div className="flex items-center -space-x-2 my-4">
                  <div
                    className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center border-2 border-white shadow-2xs shrink-0"
                    title="Tech & Software"
                  >
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center border-2 border-white shadow-2xs shrink-0"
                    title="Innovation & Launchpad"
                  >
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-2xs shrink-0"
                    title="Business & SME"
                  >
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center text-[11px] font-bold border-2 border-white shadow-2xs shrink-0">
                    {isBn ? "+৫০" : "+50"}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-500 font-medium">
                    {isBn
                      ? "তালিকাভুক্ত স্থানীয় ব্যবসা"
                      : "Listed Regional Ventures"}
                  </span>
                  <div className="text-4xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    {isBn ? "৩০+" : "30+"}
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 inline-block mt-1">
                    {isBn ? "+৪০% নতুন উদ্যোগ" : "+40% New Ventures"}
                  </span>
                </div>
              </div>

              {/* 3D Chrome Metallic Spring Element: Dynamic Growth Momentum */}
              <div className="self-end -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-500">
                <svg
                  viewBox="0 0 100 130"
                  className="w-20 h-24 filter drop-shadow-2xs"
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

            {/* Card 3B: Startup Kushtia Hub — 3 Triple Helix Rings (Education ⋂ Business ⋂ Tech) */}
            <div
              onClick={onSelectCategory}
              className="bg-white/45 backdrop-blur-md rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-between text-center group hover:-translate-y-1 hover:bg-white/65 transition-all duration-300 cursor-pointer flex-1 min-h-[250px] border border-white/80 shadow-[0_4px_20px_-2px_rgba(217,38,86,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                {isBn ? "শিক্ষা ⋂ ব্যবসা ⋂ প্রযুক্তি" : "Academia ⋂ SME ⋂ Tech"}
              </span>

              {/* Geometric Interlocking Rings (Triple Helix of Kushtia) */}
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
                  {isBn ? "স্টার্টআপ কুষ্টিয়া হাব" : "STARTUP KUSHTIA HUB"}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1.5 max-w-[210px] leading-relaxed">
                  {isBn
                    ? "তাঁত, তিলের খাজা, জৈব কৃষি ও সফটওয়্যার — স্থানীয় পণ্যকে জাতীয় বাজারে পৌঁছানোর সেতুবন্ধন।"
                    : "Connecting Kumarkhali handloom, agro & software to wider markets."}
                </p>

                <div className="flex items-center justify-center gap-1 mt-2.5 flex-wrap">
                  <span className="text-[9px] font-semibold bg-white/80 px-2 py-0.5 rounded text-slate-700 border border-white/60">
                    {isBn ? "কুমারখালী তাঁত" : "Kumarkhali Handloom"}
                  </span>
                  <span className="text-[9px] font-semibold bg-white/80 px-2 py-0.5 rounded text-slate-700 border border-white/60">
                    {isBn ? "শিলাইদহ এগ্রো" : "Shilaidaha Agro"}
                  </span>
                  <span className="text-[9px] font-semibold bg-white/80 px-2 py-0.5 rounded text-slate-700 border border-white/60">
                    {isBn ? "তিলের খাজা" : "Tiler Khaja"}
                  </span>
                </div>
              </div>

              {/* Bottom interactive link */}
              <div className="pt-3 border-t border-brand-border/40 w-full flex items-center justify-between text-xs font-bold text-brand group-hover:text-brand-hover transition-colors">
                <span>
                  {isBn ? "আপনার উদ্যোগ যুক্ত করুন" : "Get Listed in Hub"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic river wave transition into dark Events section */}
      <RiverWaveDivider position="bottom" color="text-dark" flip={true} />
    </section>
  );
}
