"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenJoin: () => void;
  onOpenContact: () => void;
}

export default function CtaBanner({
  onOpenJoin,
  onOpenContact,
}: CtaBannerProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="py-20 md:py-24 bg-dark relative overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-accent-light text-xs font-bold backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-light ring-4 ring-brand-accent-light/25 animate-pulse"></span>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isBn ? "শুরু হোক আজই" : "Start Today"}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
          {isBn ? (
            <>
              কুষ্টিয়া থেকে গড়ে তুলতে{" "}
              <span className="text-brand-accent-light">প্রস্তুত?</span>
            </>
          ) : (
            <>
              Ready to Build from{" "}
              <span className="text-brand-accent-light">Kushtia?</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "কুষ্টিয়া, বাংলাদেশ থেকে একটি গতিশীল উদ্যোক্তা ও প্রযুক্তি ইকোসিস্টেম গড়ে তোলার যাত্রায় আপনিও শামিল হোন।"
            : "Join a thriving community of founders, students, and leaders shaping the future of regional innovation."}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-base btn-hard flex items-center justify-center gap-2 group shadow-lg"
          >
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all text-center"
          >
            {isBn ? "যোগাযোগ করুন" : "Contact Us"}
          </button>
        </div>
      </div>
    </section>
  );
}
