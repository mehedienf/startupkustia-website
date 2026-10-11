"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUp, Heart, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onOpenPolicy: (type: "privacy" | "terms") => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03140E] text-[#C9D2EA] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white shadow-md inline-block">
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
              <Link
                href="/contact?tab=community"
                className="inline-block px-5 py-2.5 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold text-xs btn-hard"
              >
                {isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}
              </Link>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {isBn ? "এক্সপ্লোর" : "Explore"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/#audience"
                  className="hover:text-[#A3E635] transition-colors"
                >
                  {isBn ? "স্টার্টআপ কুষ্টিয়া সম্পর্কে" : "About Platform"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#values"
                  className="hover:text-[#A3E635] transition-colors"
                >
                  {isBn ? "ভিশন ও মিশন" : "Vision & Mission"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#values"
                  className="hover:text-[#A3E635] transition-colors"
                >
                  {isBn ? "আমাদের মূল্যবোধ" : "Our Values"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="hover:text-[#A3E635] transition-colors"
                >
                  {isBn ? "ফাউন্ডিং টিম" : "Founding Team"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pillars"
                  className="hover:text-[#A3E635] transition-colors"
                >
                  {isBn ? "প্রোগ্রাম ও উদ্যোগ" : "Programs"}
                </Link>
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
                <Link
                  href="/contact?tab=community"
                  className="hover:text-[#A3E635] transition-colors text-left block"
                >
                  {isBn ? "সদস্য হোন" : "Become a Member"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?tab=ambassador"
                  className="hover:text-[#A3E635] transition-colors text-left block"
                >
                  {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassador"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#directory"
                  className="hover:text-[#A3E635] transition-colors block"
                >
                  {isBn ? "ব্যবসার ডিরেক্টরি" : "Business Directory"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?tab=community"
                  className="hover:text-[#A3E635] transition-colors text-left block"
                >
                  {isBn ? "মেন্টর হোন" : "Become a Mentor"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?tab=contact"
                  className="hover:text-[#A3E635] transition-colors text-left block"
                >
                  {isBn ? "পৃষ্ঠপোষক ও পার্টনার" : "Partner & Sponsor"}
                </Link>
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
                <Mail className="w-4 h-4 text-[#A3E635] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A3E635] shrink-0" />
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
                <MapPin className="w-4 h-4 text-[#A3E635] shrink-0" />
                <span>
                  {isBn ? "কুষ্টিয়া, বাংলাদেশ" : "Kushtia, Bangladesh"}
                </span>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A3E635] hover:text-white transition-colors font-semibold"
                >
                  <span>
                    {isBn
                      ? "যোগাযোগ ও আবেদন কেন্দ্র →"
                      : "Connect & Apply Hub →"}
                  </span>
                </Link>
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
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
