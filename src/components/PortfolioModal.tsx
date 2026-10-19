"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Building2, CheckCircle, Send, X } from "lucide-react";
import React, { useState } from "react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({
  isOpen,
  onClose,
}: PortfolioModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    founderName: "",
    category: "সফটওয়্যার ও আইটি",
    location: "",
    contact: "",
    website: "",
    description: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const isBn = language === "bn";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-dark text-white px-6 py-4 flex items-center justify-between border-b-2 border-brand-accent-light">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-brand-accent-light" />
            <h3 className="font-bold text-lg text-white">
              {isBn
                ? "পোর্টফোলিওতে তালিকাভুক্ত হোন"
                : "List in Startup Kushtia Portfolio"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-brand-soft2 text-brand rounded-full flex items-center justify-center mx-auto border-2 border-brand-accent-light">
                <CheckCircle className="w-8 h-8 text-brand" />
              </div>
              <h4 className="text-xl font-bold text-heading">
                {isBn
                  ? "আবেদনটি সফলভাবে জমা হয়েছে!"
                  : "Listing Submission Received!"}
              </h4>
              <p className="text-sm text-[#444E69] max-w-sm mx-auto">
                {isBn
                  ? "আপনার ব্যবসা বা স্টার্টআপের তথ্য যাচাই করে দ্রুত পোর্টফোলিওতে লাইভ করা হবে। কোনো তথ্যের প্রয়োজনে আমরা আপনার সাথে যোগাযোগ করব।"
                  : "Our admin team will review and verify the venture details before publishing to the public portfolio."}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-full btn-hard text-sm"
                >
                  {isBn ? "ধন্যবাদ" : "Done"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <p className="text-xs text-[#444E69]">
                {isBn
                  ? "কুষ্টিয়ার উদ্যোক্তাদের পাবলিক পোর্টফোলিওতে আপনার উদ্যোগ অন্তর্ভুক্ত করে আরও গ্রাহক, বিনিয়োগকারী ও পার্টনারদের দৃষ্টি আকর্ষণ করুন।"
                  : "Add your Kushtia venture to the public ecosystem portfolio for increased visibility."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "উদ্যোগের নাম *" : "Venture / Business Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={
                      isBn
                        ? "আপনার ব্যবসা বা স্টার্টআপের নাম"
                        : "e.g. Gorai Tech Labs"
                    }
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn
                      ? "প্রতিষ্ঠাতা / উদ্যোক্তা *"
                      : "Founder / Owner Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isBn ? "আপনার নাম" : "Founder Name"}
                    value={formData.founderName}
                    onChange={(e) =>
                      setFormData({ ...formData, founderName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "সেক্টর / ক্যাটাগরি *" : "Industry Category *"}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading bg-white"
                  >
                    <option value="সফটওয়্যার ও আইটি">
                      {isBn ? "সফটওয়্যার ও আইটি" : "Software & IT"}
                    </option>
                    <option value="এগ্রো ও ফুড-টেক">
                      {isBn ? "এগ্রো ও ফুড-টেক" : "Agro & FoodTech"}
                    </option>
                    <option value="হস্তশিল্প ও ফ্যাশন">
                      {isBn ? "হস্তশিল্প ও ফ্যাশন" : "Handicrafts & Fashion"}
                    </option>
                    <option value="লজিস্টিকস ও সেবা">
                      {isBn ? "লজিস্টিকস ও অন-ডিমান্ড" : "Logistics & Services"}
                    </option>
                    <option value="শিক্ষা ও এডটেক">
                      {isBn ? "শিক্ষা ও এডটেক" : "Education & EdTech"}
                    </option>
                    <option value="অন্যান্য এসএমই">
                      {isBn ? "অন্যান্য লোকাল ব্যবসা" : "Other Local Venture"}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn
                      ? "কুষ্টিয়ায় অবস্থান / ঠিকানা *"
                      : "Location in Kushtia *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={
                      isBn
                        ? "যেমন: মজমপুর, কুমারখালী, এনএস রোড"
                        : "e.g. Majampur, Kushtia"
                    }
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "মোবাইল / হোয়াটসঅ্যাপ *" : "Contact / WhatsApp *"}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn
                      ? "ওয়েবসাইট বা ফেসবুক পেজ"
                      : "Website or Social Link"}
                  </label>
                  <input
                    type="text"
                    placeholder="https://facebook.com/yourpage"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                  {isBn
                    ? "উদ্যোগ সম্পর্কে বিবরণ (১-২ বাক্য)"
                    : "Venture Description"}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isBn
                      ? "কী পণ্য বা সেবা প্রদান করেন..."
                      : "What product or service do you offer?"
                  }
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-[#444E69] hover:text-heading font-medium rounded-full hover:bg-slate-100 transition-colors"
                >
                  {isBn ? "বাতিল" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-bold rounded-full btn-hard text-sm flex items-center gap-2"
                >
                  {loading ? (
                    <span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
                  ) : (
                    <>
                      <span>
                        {isBn ? "তালিকাভুক্তির আবেদন পাঠান" : "Submit Listing"}
                      </span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
