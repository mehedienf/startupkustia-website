"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TEAM_MEMBERS } from "@/data/content";
import { Globe, Mail } from "lucide-react";

export default function Team() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section id="team" className="py-20 md:py-28 bg-[#F5F7FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C4DEB] mb-3">
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
            <span>{isBn ? "কোর টিম" : "Core Leadership"}</span>
            <span className="w-6 h-0.5 bg-[#48E2E7]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000A3C] tracking-tight">
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
              className={`bg-white p-6 rounded-2xl border border-[#E2E7F1] card-hover flex flex-col justify-between ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-1 border-t-4 border-t-[#0C4DEB]"
                  : ""
              }`}
            >
              <div>
                {/* Avatar with initial */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#000A3C] to-[#0A1A55] text-white flex items-center justify-center font-bold text-xl mb-5 shadow-sm border border-[#E2E7F1]">
                  <span className="text-[#48E2E7]">
                    {member.nameEn.split(" ")[0][0]}
                  </span>
                  <span>{member.nameEn.split(" ")[1]?.[0] || ""}</span>
                </div>

                <div className="text-[11px] font-bold text-[#0C4DEB] uppercase tracking-wider mb-1">
                  {isBn ? member.roleBn : member.roleEn}
                </div>

                <h3 className="text-lg font-bold text-[#000A3C] mb-1">
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
                    className="hover:text-[#0C4DEB] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn for ${member.nameEn}`}
                    className="hover:text-[#0C4DEB] transition-colors"
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
