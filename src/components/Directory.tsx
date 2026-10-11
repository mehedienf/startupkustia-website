"use client";

import { useLanguage } from "@/context/LanguageContext";
import { DIRECTORY_ITEMS } from "@/data/content";
import { ExternalLink, MapPin, Plus, Search, User } from "lucide-react";
import { useMemo, useState } from "react";

interface DirectoryProps {
  onOpenListingModal: () => void;
}

export default function Directory({ onOpenListingModal }: DirectoryProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", labelBn: "সকল উদ্যোগ", labelEn: "All Ventures" },
    { id: "startup", labelBn: "স্টার্টআপ", labelEn: "Startups" },
    { id: "agency", labelBn: "এজেন্সি ও আইটি", labelEn: "Agencies & IT" },
    { id: "sme", labelBn: "ব্যবসা ও এসএমই", labelEn: "SMEs & Retail" },
    { id: "community", labelBn: "কমিউনিটি", labelEn: "Communities" },
  ];

  const filteredItems = useMemo(() => {
    return DIRECTORY_ITEMS.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;

      const matchName = item.name.toLowerCase().includes(q);
      const matchDescBn = item.descriptionBn.toLowerCase().includes(q);
      const matchDescEn = item.descriptionEn.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      const matchLoc =
        item.location.toLowerCase().includes(q) ||
        item.locationEn.toLowerCase().includes(q);

      return (
        matchCat &&
        (matchName || matchDescBn || matchDescEn || matchTags || matchLoc)
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="directory" className="py-20 md:py-28 bg-brand-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border/60 text-brand text-xs font-bold shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand ring-4 ring-brand/15 animate-pulse"></span>
              <span>{isBn ? "ডিরেক্টরি" : "Ecosystem Directory"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
              {isBn
                ? "কুষ্টিয়ার স্টার্টআপ ও ব্যবসা খুঁজে নিন।"
                : "Explore Kushtia Startups & Businesses."}
            </h2>
            <p className="mt-2 text-base text-[#444E69] max-w-xl">
              {isBn
                ? "স্থানীয় উদ্ভাবন, সফল স্টার্টআপ এবং প্রতিষ্ঠিত ব্যবসাগুলোকে জানুন ও যুক্ত হোন।"
                : "Discover and connect with ventures shaping Kushtia’s economic landscape."}
            </p>
          </div>

          {/* List business CTA button */}
          <button
            type="button"
            onClick={onOpenListingModal}
            className="px-6 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm btn-hard flex items-center justify-center gap-2 shrink-0 self-start md:self-auto shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>{isBn ? "তালিকাভুক্ত হোন" : "List Your Venture"}</span>
          </button>
        </div>

        {/* Filter bar and Search */}
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-heading text-white shadow-sm"
                    : "text-[#444E69] hover:bg-brand-soft"
                }`}
              >
                {isBn ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                isBn
                  ? "খুঁজুন (নাম, ট্যাগ, এলাকা)..."
                  : "Search ventures, tags..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-[#E2E7F1] bg-brand-soft focus:bg-white focus:outline-none focus:border-brand text-heading"
            />
          </div>
        </div>

        {/* Directory Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">
              {isBn
                ? "কোনো ফলাফল পাওয়া যায়নি।"
                : "No matching ventures found."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-brand underline"
            >
              {isBn ? "ফিল্টার রিসেট করুন" : "Reset filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl shadow-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-soft2 text-heading">
                      {isBn ? item.badge : item.badgeEn}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#6B7591]">
                      <MapPin className="w-3 h-3 text-brand" />
                      <span>{isBn ? item.location : item.locationEn}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-heading mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#444E69] leading-relaxed mb-4">
                    {isBn ? item.descriptionBn : item.descriptionEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] bg-brand-soft text-brand-hover font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  {item.founder && (
                    <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.founder}</span>
                    </div>
                  )}

                  {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand hover:text-brand-hover font-bold"
                    >
                      <span>{isBn ? "ভিজিট করুন" : "Visit"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      {isBn ? "তালিকাভুক্ত" : "Verified"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
