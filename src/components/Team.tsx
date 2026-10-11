"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TEAM_MEMBERS } from "@/data/content";
import { Globe, Mail } from "lucide-react";

export default function Team() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section id="team" className="py-20 md:py-28 bg-brand-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
            <span>{isBn ? "কোর টিম" : "Core Leadership"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            {isBn ? "যাঁদের হাত ধরে শুরু" : "Meet the Founding Team"}
          </h2>
          <p className="mt-3 text-base text-[#444E69]">
            {isBn
              ? "সাত সদস্যের একটি ফাউন্ডিং টিম, যাঁদের প্রত্যেকের রয়েছে নির্দিষ্ট দায়িত্ব ও কুষ্টিয়াকে এগিয়ে নেওয়ার অঙ্গীকার।"
              : "Dedicated leaders committed to catalyzing Kushtia’s entrepreneurship ecosystem."}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className={`bg-white p-6 rounded-2xl shadow-sm card-hover flex flex-col justify-between ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Avatar with initial */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-dark to-dark-surface text-white flex items-center justify-center font-bold text-xl mb-5 shadow-xs">
                  <span className="text-brand-accent-light">
                    {member.nameEn.split(" ")[0][0]}
                  </span>
                  <span>{member.nameEn.split(" ")[1]?.[0] || ""}</span>
                </div>

                <div className="text-[11px] font-bold text-brand uppercase tracking-wider mb-1">
                  {isBn ? member.roleBn : member.roleEn}
                </div>

                <h3 className="text-lg font-bold text-heading mb-1">
                  {isBn ? member.nameBn : member.nameEn}
                </h3>

                <p className="text-xs text-[#6B7591] leading-relaxed mt-2">
                  {isBn ? member.designationBn : member.designationEn}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-gray-500">
                <span className="text-[11px] font-medium text-gray-400">
                  {isBn ? "কুষ্টিয়া চ্যাপ্টার" : "Kushtia Chapter"}
                </span>
                <div className="flex items-center gap-2 text-gray-400">
                  <a
                    href="mailto:startupkushtia@gmail.com"
                    aria-label={`Email ${member.nameEn}`}
                    className="hover:text-brand transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn for ${member.nameEn}`}
                    className="hover:text-brand transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
