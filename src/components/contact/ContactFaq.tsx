"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface ContactFaqProps {
  isBn: boolean;
}

export default function ContactFaq({ isBn }: ContactFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      qBn: "আবেদন জমা দেওয়ার পর পরবর্তী পদক্ষেপ কী?",
      qEn: "What happens after submitting an application?",
      aBn: "আমাদের কমিউনিটি টিম প্রতিটি আবেদন যত্ন সহকারে পর্যালোচনা করে। সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আমরা আপনার প্রদত্ত হোয়াটসঅ্যাপ বা ইমেইলে পরবর্তী নির্দেশনা জানিয়ে যোগাযোগ করি।",
      aEn: "Our team reviews each submission carefully and connects back via WhatsApp or Email within 24 to 48 hours with next steps.",
    },
    {
      qBn: "কমিউনিটি বা অ্যাম্বাসেডর প্রোগ্রামে যুক্ত হতে কোনো ফি দিতে হবে কি?",
      qEn: "Is there any fee to join the community or ambassador program?",
      aBn: "না, স্টার্টআপ কুষ্টিয়ার সাধারণ সদস্যপদ, ক্যাম্পাস অ্যাম্বাসেডর প্রোগ্রাম এবং প্রাথমিক জ্ঞান বিনিময় সেশনগুলো সম্পূর্ণ বিনামূল্যে উন্মুক্ত।",
      aEn: "No, general membership, campus ambassador roles, and peer knowledge meetups are completely free of charge.",
    },
    {
      qBn: "পোর্টফোলিওতে আমার ব্যবসা লাইভ হতে কত সময় লাগে?",
      qEn: "How long does it take for a portfolio listing to go live?",
      aBn: "ব্যবসার মৌলিক তথ্য এবং কুষ্টিয়াভিত্তিক সত্যতা যাচাই করার পর ২-৩ কার্যদিবসের মধ্যে আমাদের পাবলিক পোর্টফোলিওতে তালিকাটি যুক্ত করা হয়।",
      aEn: "After basic verification of your venture details and Kushtia presence, listings go live within 2-3 business days.",
    },
    {
      qBn: "আমরা কীভাবে প্রাতিষ্ঠানিক পার্টনার বা স্পনসর হতে পারি?",
      qEn: "How can our organization become a partner or sponsor?",
      aBn: "সরাসরি যোগাযোগ ট্যাবের মাধ্যমে অথবা আমাদের অফিশিয়াল ইমেইল startupkushtia@gmail.com এ পার্টনারশিপ আগ্রহ জানিয়ে লিখলে আমাদের টিম বিস্তারিত পার্টনারশিপ ডেক পাঠাবে।",
      aEn: "Choose the Direct Inquiry tab or email startupkushtia@gmail.com with your proposal; we will share our partnership deck promptly.",
    },
  ];

  return (
    <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft2 text-brand-hover text-xs font-bold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{isBn ? "প্রশ্নোত্তর" : "FAQ"}</span>
        </div>
        <h3 className="text-2xl font-black text-heading">
          {isBn
            ? "আবেদন ও যোগাযোগ সম্পর্কিত সাধারণ প্রশ্ন"
            : "Frequently Asked Questions"}
        </h3>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-slate-50/70 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-heading hover:text-brand transition-colors"
              >
                <span>{isBn ? faq.qBn : faq.qEn}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in border-t border-slate-200/50 pt-3">
                  {isBn ? faq.aBn : faq.aEn}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
