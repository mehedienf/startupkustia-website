"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUp, Heart, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  onOpenJoin: () => void;
  onOpenAmbassador: () => void;
  onOpenContact: () => void;
  onOpenPolicy: (type: "privacy" | "terms") => void;
}

export default function Footer({
  onOpenJoin,
  onOpenAmbassador,
  onOpenContact,
  onOpenPolicy,
}: FooterProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000826] text-[#C9D2EA] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white shadow-md border border-white/20 inline-block">
                <Image
                  src="/logo.png"
                  alt="Startup Kushtia"
                  width={160}
                  height={58}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {isBn
                ? "কুষ্টিয়া, বাংলাদেশ থেকে একটি টেকসই ব্যবসায়ী ও প্রযুক্তিগত ইকোসিস্টেম গড়ে তোলার উদ্যোক্তা ও উদ্ভাবন প্ল্যাটফর্ম।"
                : "An entrepreneurship and innovation platform fostering a sustainable business ecosystem from Kushtia, Bangladesh."}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenJoin}
                className="px-5 py-2.5 rounded-xl bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold text-xs btn-hard"
              >
                {isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}
              </button>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {isBn ? "এক্সপ্লোর" : "Explore"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#audience"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "স্টার্টআপ কুষ্টিয়া সম্পর্কে" : "About Platform"}
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "ভিশন ও মিশন" : "Vision & Mission"}
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "আমাদের মূল্যবোধ" : "Our Values"}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "ফাউন্ডিং টিম" : "Founding Team"}
                </a>
              </li>
              <li>
                <a
                  href="#pillars"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "প্রোগ্রাম ও উদ্যোগ" : "Programs"}
                </a>
              </li>
            </ul>
          </div>

          {/* Join Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {isBn ? "যুক্ত হোন" : "Get Involved"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenJoin}
                  className="hover:text-[#48E2E7] transition-colors text-left"
                >
                  {isBn ? "সদস্য হোন" : "Become a Member"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAmbassador}
                  className="hover:text-[#48E2E7] transition-colors text-left"
                >
                  {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassador"}
                </button>
              </li>
              <li>
                <a
                  href="#directory"
                  className="hover:text-[#48E2E7] transition-colors"
                >
                  {isBn ? "ব্যবসার ডিরেক্টরি" : "Business Directory"}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenJoin}
                  className="hover:text-[#48E2E7] transition-colors text-left"
                >
                  {isBn ? "মেন্টর হোন" : "Become a Mentor"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#48E2E7] transition-colors text-left"
                >
                  {isBn ? "পৃষ্ঠপোষক ও পার্টনার" : "Partner & Sponsor"}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {isBn ? "যোগাযোগ" : "Contact"}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#48E2E7] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#48E2E7] shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.whatsapp} (হোয়াটসঅ্যাপ)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#48E2E7] shrink-0" />
                <span>
                  {isBn ? "কুষ্টিয়া, বাংলাদেশ" : "Kushtia, Bangladesh"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              &copy; 2026 {isBn ? "স্টার্টআপ কুষ্টিয়া" : "Startup Kushtia"}।{" "}
              {isBn ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
            </span>
            <span>&middot;</span>
            <button
              onClick={() => onOpenPolicy("privacy")}
              className="hover:text-white transition-colors underline"
            >
              {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </button>
            <span>&middot;</span>
            <button
              onClick={() => onOpenPolicy("terms")}
              className="hover:text-white transition-colors underline"
            >
              {isBn ? "শর্তাবলি" : "Terms & Conditions"}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for
              Kushtia
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
