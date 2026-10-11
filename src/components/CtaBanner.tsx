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
    <section className="py-20 md:py-24 bg-[#000A3C] relative overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0C4DEB]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48E2E7]/10 text-[#48E2E7] text-xs font-bold uppercase tracking-wider border border-[#48E2E7]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isBn ? "শুরু হোক আজই" : "Start Today"}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
          {isBn ? (
            <>
              কুষ্টিয়া থেকে গড়ে তুলতে{" "}
              <span className="text-[#48E2E7]">প্রস্তুত?</span>
            </>
          ) : (
            <>
              Ready to Build from{" "}
              <span className="text-[#48E2E7]">Kushtia?</span>
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold text-base btn-hard flex items-center justify-center gap-2 group"
          >
            <span>{isBn ? "কমিউনিটিতে যোগ দিন" : "Join the Community"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border-2 border-white/20 transition-all text-center"
          >
            {isBn ? "যোগাযোগ করুন" : "Contact Us"}
          </button>
        </div>
      </div>
    </section>
  );
}
