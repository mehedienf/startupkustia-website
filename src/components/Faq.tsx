"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FAQ_ITEMS } from "@/data/content";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqProps {
  onOpenContact: () => void;
}

export default function Faq({ onOpenContact }: FaqProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white border-b border-slate-100 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] mb-3">
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
            <span>
              {isBn ? "সচরাচর জিজ্ঞাসা" : "Frequently Asked Questions"}
            </span>
            <span className="w-6 h-0.5 bg-[#A3E635]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061C14] tracking-tight">
            {isBn ? "দ্রুত উত্তর।" : "Quick Answers."}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "স্টার্টআপ কুষ্টিয়া সম্পর্কে সাধারণ প্রশ্ন ও উত্তরগুলো এক নজরে জেনে নিন।"
              : "Everything you need to know about our community, directory, and initiatives."}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#F7FEE7] shadow-sm"
                    : "bg-[#FAFCFF] hover:bg-[#F7FEE7] shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#061C14]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#65A30D] text-sm">✦</span>
                    <span>{isBn ? item.questionBn : item.questionEn}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#65A30D]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#444E69] leading-relaxed border-t border-slate-100">
                    <p className="pl-6">
                      {isBn ? item.answerBn : item.answerEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#ECFCCB] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="font-bold text-[#061C14] text-base">
              {isBn ? "আরও কোনো প্রশ্ন আছে?" : "Have more questions?"}
            </h4>
            <p className="text-xs text-[#444E69] mt-0.5">
              {isBn
                ? "আমাদের সাথে সরাসরি যোগাযোগ করুন বা হোয়াটসঅ্যাপে মেসেজ দিন।"
                : "Feel free to reach out to our team directly."}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full bg-[#061C14] hover:bg-[#84CC16] text-white font-bold text-xs btn-hard shrink-0"
          >
            {isBn ? "আমাদের লিখুন" : "Contact Us"}
          </button>
        </div>
      </div>
    </section>
  );
}
