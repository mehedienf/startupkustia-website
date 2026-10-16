"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Whatsapp } from "react-bootstrap-icons";

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
    <footer className="bg-dark text-[#C9D2EA] border-t border-white/10 pt-16 pb-12">
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

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Link
                href="/connect"
                className="inline-block px-5 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs btn-hard"
              >
                {isBn ? "কমিউনিটিতে যোগ দিন" : "Join Community"}
              </Link>
              <a
                href={SITE_CONFIG.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-all shadow-sm flex items-center justify-center"
                title={isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
                aria-label="WhatsApp Channel"
              >
                <Whatsapp className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#1877F2] text-white transition-all shadow-sm flex items-center justify-center"
                title={isBn ? "ফেসবুক পেজ" : "Facebook Page"}
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
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
                  className="hover:text-brand-accent-light transition-colors"
                >
                  {isBn ? "স্টার্টআপ কুষ্টিয়া সম্পর্কে" : "About Platform"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#values"
                  className="hover:text-brand-accent-light transition-colors"
                >
                  {isBn ? "ভিশন ও মিশন" : "Vision & Mission"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#values"
                  className="hover:text-brand-accent-light transition-colors"
                >
                  {isBn ? "আমাদের মূল্যবোধ" : "Our Values"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="hover:text-brand-accent-light transition-colors"
                >
                  {isBn ? "ফাউন্ডিং টিম" : "Founding Team"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pillars"
                  className="hover:text-brand-accent-light transition-colors"
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
                  href="/connect"
                  className="hover:text-brand-accent-light transition-colors text-left block"
                >
                  {isBn ? "সদস্য হোন" : "Become a Member"}
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  className="hover:text-brand-accent-light transition-colors text-left block"
                >
                  {isBn ? "ক্যাম্পাস অ্যাম্বাসেডর" : "Campus Ambassador"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#directory"
                  className="hover:text-brand-accent-light transition-colors block"
                >
                  {isBn ? "ব্যবসার ডিরেক্টরি" : "Business Directory"}
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  className="hover:text-brand-accent-light transition-colors text-left block"
                >
                  {isBn ? "মেন্টর হোন" : "Become a Mentor"}
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  className="hover:text-brand-accent-light transition-colors text-left block"
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
                <Mail className="w-4 h-4 text-brand-accent-light shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Whatsapp className="w-4 h-4 text-brand-accent-light shrink-0" />
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
                <MapPin className="w-4 h-4 text-brand-accent-light shrink-0" />
                <span>
                  {isBn ? "কুষ্টিয়া, বাংলাদেশ" : "Kushtia, Bangladesh"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Whatsapp className="w-4 h-4 text-brand-accent-light shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {isBn ? "হোয়াটসঅ্যাপ চ্যানেল" : "WhatsApp Channel"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-brand-accent-light shrink-0" />
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {isBn ? "অফিসিয়াল ফেসবুক পেজ" : "Official Facebook Page"}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-accent-light hover:text-white transition-colors font-semibold"
                >
                  <span>
                    {isBn
                      ? "কানেক্ট ও মেম্বার রেজিস্ট্রেশন →"
                      : "Connect & Member Hub →"}
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
            <span className="flex items-center gap-1.5 text-gray-400">
              {isBn ? (
                <>
                  <span>কুষ্টিয়ার জন্য তৈরি করেছে</span>
                  <a
                    href="https://www.olivosoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-brand-accent-light transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand-accent-light"
                  >
                    Olivosoft
                  </a>
                </>
              ) : (
                <>
                  <span>Made by</span>
                  <a
                    href="https://www.olivosoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-brand-accent-light transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand-accent-light"
                  >
                    Olivosoft
                  </a>
                  <span>for Kushtia</span>
                </>
              )}
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
