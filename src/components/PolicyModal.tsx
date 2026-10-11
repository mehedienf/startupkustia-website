"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FileText, Shield, X } from "lucide-react";

interface PolicyModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  if (!type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000A3C]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border-2 border-[#000A3C] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#000A3C] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#48E2E7] shrink-0">
          <div className="flex items-center gap-2">
            {isPrivacy ? (
              <Shield className="w-5 h-5 text-[#48E2E7]" />
            ) : (
              <FileText className="w-5 h-5 text-[#48E2E7]" />
            )}
            <h3 className="font-bold text-lg text-white">
              {isPrivacy
                ? isBn
                  ? "গোপনীয়তা নীতি (Privacy Policy)"
                  : "Privacy Policy"
                : isBn
                  ? "শর্তাবলি ও নীতিমালা (Terms of Use)"
                  : "Terms of Use"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#444E69] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                {isBn
                  ? "স্টার্টআপ কুষ্টিয়া তার সদস্য এবং ওয়েবসাইটে আগত সকল ব্যবহারকারীর ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।"
                  : "Startup Kushtia values and protects the privacy of our community members, entrepreneurs, and visitors."}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "১. তথ্য সংগ্রহ ও ব্যবহার"
                  : "1. Information Collection"}
              </h4>
              <p>
                {isBn
                  ? "কমিউনিটি মেম্বারশিপ ফর্ম, ডিরেক্টরি সাবমিশন অথবা অ্যাম্বাসেডর আবেদনের মাধ্যমে আপনি যে নাম, ইমেইল, মোবাইল নম্বর এবং প্রাতিষ্ঠানিক তথ্য প্রদান করেন, তা শুধুমাত্র কমিউনিটি যোগাযোগ, নেটওয়ার্কিং ও অনুমোদিত প্ল্যাটফর্ম কার্যক্রমের জন্য সংরক্ষিত হয়।"
                  : "We collect relevant contact details like name, email, phone number, and venture information strictly to facilitate networking, mentorship, and ecosystem matchmaking."}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "২. ডিরেক্টরি ডেটা ও দৃশ্যমানতা"
                  : "2. Directory Visibility"}
              </h4>
              <p>
                {isBn
                  ? "পাবলিক ডিরেক্টরিতে কেবল মাত্র আপনার প্রদত্ত ব্যবসার নাম, বিবরণ ও সর্বজনীন যোগাযোগের তথ্য প্রদর্শিত হবে। আপনি যেকোনো সময় আপনার তথ্য হালনাগাদ বা মুছে ফেলার জন্য অনুরোধ করতে পারেন।"
                  : "Only authorized public information will be published in the public directory. You may request modifications or deletions at any time."}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "৩. তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং"
                  : "3. Non-Disclosure"}
              </h4>
              <p>
                {isBn
                  ? "আমরা কোনো বাণিজ্যিক বিজ্ঞাপন সংস্থা বা তৃতীয় পক্ষের কাছে সদস্যদের তথ্য বিক্রি বা অপব্যবহার করি না।"
                  : "We do not sell, rent, or trade community member data to commercial advertisers."}
              </p>
            </>
          ) : (
            <>
              <p>
                {isBn
                  ? "স্টার্টআপ কুষ্টিয়া প্ল্যাটফর্ম এবং এর সকল ডিজিটাল ও অফলাইন প্রোগ্রাম ব্যবহারের শর্তাবলি নিচে উল্লেখিত হলো:"
                  : "By participating in Startup Kushtia programs and directories, you agree to the following community guidelines:"}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "১. কমিউনিটি আচরণবিধি ও সহযোগিতা"
                  : "1. Code of Conduct"}
              </h4>
              <p>
                {isBn
                  ? "সকল সদস্য, উদ্যোক্তা, শিক্ষার্থী ও মেন্টরদের মধ্যে পারস্পরিক শ্রদ্ধা, পেশাদার আচরণ ও সহমর্মিতা বজায় রাখতে হবে। কোনো ধরনের অনৈতিক বা বিভ্রান্তিকর আচরণ কঠোরভাবে নিষিদ্ধ।"
                  : "Members agree to foster a supportive, respectful, and safe collaborative space for all entrepreneurs regardless of background."}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "২. আইডিয়ার সুরক্ষা ও মেধা সম্পত্তি"
                  : "2. Intellectual Property"}
              </h4>
              <p>
                {isBn
                  ? "অন্য কোনো উদ্যোক্তা বা শিক্ষার্থীর আইডিয়া, কোড বা ব্যবসায়িক বুদ্ধিবৃত্তিক সম্পদ অনুমতি ছাড়া অনুকরণ বা অসদুপায়ে ব্যবহার করা যাবে না।"
                  : "Respect for peers intellectual property is paramount. Unauthorized duplication or misappropriation of peer ideas is strictly prohibited."}
              </p>
              <h4 className="font-bold text-[#000A3C] text-base">
                {isBn
                  ? "৩. অলাভজনক ও সহায়তামূলক নীতি"
                  : "3. Ecosystem Commitment"}
              </h4>
              <p>
                {isBn
                  ? "স্টার্টআপ কুষ্টিয়া কোনো বিনিয়োগ তহবিল নয়, বরং একটি সহযোগিতামূলক লঞ্চপ্যাড। আমরা সুযোগ সৃষ্টি করি কিন্তু কোনো ব্যবসার নির্দিষ্ট আর্থিক সফলতার প্রতিশ্রুতি বহন করি না।"
                  : "Startup Kushtia acts as an ecosystem catalyst and connector, without guaranteeing individual commercial outcomes."}
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F5F7FC] px-6 py-3 border-t border-[#E2E7F1] flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#000A3C] text-white font-semibold rounded-xl text-xs"
          >
            {isBn ? "বন্ধ করুন" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
