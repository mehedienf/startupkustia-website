"use client";

import RiverWaveDivider from "@/components/RiverWaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AmbassadorsProps {
  onOpenAmbassadorModal: () => void;
}

export default function Ambassadors({
  onOpenAmbassadorModal,
}: AmbassadorsProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section
      id="ambassadors"
      className="pt-20 pb-28 md:pt-28 md:pb-36 bg-dark text-white relative overflow-hidden"
    >
      {/* Subtle topographic river contour pattern */}
      <div
        className="absolute inset-0 bg-topography-dark pointer-events-none opacity-50"
        aria-hidden="true"
      />

      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent-light/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light sm:font-normal text-white tracking-tight leading-tight">
              {isBn ? (
                <>
                  হোন{" "}
                  <span className="text-brand-accent-light">
                    ক্যাম্পাস অ্যাম্বাসেডর
                  </span>
                  ।
                </>
              ) : (
                <>
                  Become a{" "}
                  <span className="text-brand-accent-light">
                    Campus Ambassador
                  </span>
                  .
                </>
              )}
            </h2>

            <p className="text-xl font-semibold text-white/90">
              {isBn
                ? "আপনার ক্যাম্পাসে স্টার্টআপ কুষ্টিয়ার নেতৃত্ব দিন।"
                : "Lead the innovation movement on your campus across Kushtia."}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              {isBn
                ? "ইসলামী বিশ্ববিদ্যালয় (IU), কুষ্টিয়া সরকারি কলেজ, কুষ্টিয়া পলিটেকনিক বা যেকোনো শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের জন্য এটি একটি অসামান্য সুযোগ। সহপাঠীদের মধ্যে স্টার্টআপ মানসিকতা ছড়িয়ে দিন এবং নিজ ক্যাম্পাসে উদ্যোক্তা ইভেন্ট ও নলেজ সেশনের নেতৃত্ব দিন।"
                : "Open for students at Islamic University (IU), Kushtia Govt College, Polytechnics, and institutes. Champion the startup culture, host hackathons, and represent Kushtia on national stages."}
            </p>

            {/* Benefits check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-accent-light shrink-0" />
                <span>
                  {isBn
                    ? "বাস্তব লিডারশিপ ও অর্গানাইজিং স্কিল"
                    : "Hands-on leadership experience"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-accent-light shrink-0" />
                <span>
                  {isBn
                    ? "স্টার্টআপ ফাউন্ডার ও মেন্টর নেটওয়ার্ক"
                    : "Direct founder & mentor network"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-accent-light shrink-0" />
                <span>
                  {isBn
                    ? "এক্সক্লুসিভ ন্যাশনাল ইভেন্ট অ্যাক্সেস"
                    : "Priority national event passes"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-accent-light shrink-0" />
                <span>
                  {isBn
                    ? "অফিসিয়াল সার্টিফিকেট ও রিকগনিশন"
                    : "Official recognition certificate"}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenAmbassadorModal}
                className="px-8 py-4 rounded-full bg-brand hover:bg-white text-white hover:text-heading font-bold text-base btn-hard-cyan flex items-center gap-2 shadow-lg transition-colors"
              >
                <span>{isBn ? "এখনই আবেদন করুন" : "Apply Right Now"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Card Callout */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md relative space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-accent-light tracking-wider uppercase">
                  {isBn ? "ক্যাম্পাস নেটওয়ার্ক" : "Campus Chapters"}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brand text-white text-[11px] font-bold">
                  {isBn ? "সেশন ২০২৬" : "Cohort 2026"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center font-bold text-white text-sm">
                    IU
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {isBn
                        ? "ইসলামী বিশ্ববিদ্যালয় কুষ্টিয়া"
                        : "Islamic University, Kushtia"}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {isBn
                        ? "ক্যাম্পাস ইনোভেশন ও স্টুডেন্ট চ্যাপ্টার"
                        : "Campus Innovation Chapter"}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent-light text-heading flex items-center justify-center font-bold text-sm">
                    KGC
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {isBn ? "কুষ্টিয়া সরকারি কলেজ" : "Kushtia Govt College"}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {isBn ? "ইয়ুথ লিডারশিপ হাব" : "Youth Leadership Hub"}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center font-bold text-white text-sm">
                    KPI
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {isBn
                        ? "কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট"
                        : "Kushtia Polytechnic Institute"}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {isBn
                        ? "টেক ও ইঞ্জিনিয়ারিং স্টার্টআপ গ্রুপ"
                        : "Engineering & Tech Innovators"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-300 text-center italic">
                {isBn
                  ? "“নতুন কিছু গড়ে তোলার সূচনা হোক নিজের ক্যাম্পাস থেকেই।”"
                  : '"Great ventures often ignite from campus dorms and labs."'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Organic river wave transition into Values section */}
      <RiverWaveDivider position="bottom" color="text-white" />
    </section>
  );
}
