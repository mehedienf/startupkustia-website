"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/content";
import { CheckCircle, Mail, Send, X } from "lucide-react";
import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
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
            <Mail className="w-5 h-5 text-brand-accent-light" />
            <h3 className="font-bold text-lg text-white">
              {isBn ? "যোগাযোগ করুন" : "Contact Startup Kushtia"}
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
                  ? "বার্তাটি সফলভাবে পাঠানো হয়েছে!"
                  : "Message Sent Successfully!"}
              </h4>
              <p className="text-sm text-[#444E69] max-w-sm mx-auto">
                {isBn
                  ? "আপনার বার্তার জন্য ধন্যবাদ। স্টার্টআপ কুষ্টিয়া টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
                  : "Thank you for reaching out. We will get back to you as soon as possible."}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-full btn-hard text-sm"
                >
                  {isBn ? "ঠিক আছে" : "Done"}
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Direct channels */}
              <div className="mb-4 p-3 bg-brand-soft rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-heading">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-brand transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand transition-colors"
                >
                  <Whatsapp className="w-4 h-4 text-brand" />
                  <span>{SITE_CONFIG.whatsapp} (WhatsApp)</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "আপনার নাম *" : "Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isBn ? "আপনার নাম" : "Your Name"}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "ইমেইল বা ফোন *" : "Email or Phone *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="email@example.com / 017XXXXXXXX"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "বিষয় *" : "Subject *"}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={
                      isBn
                        ? "পার্টনারশিপ / প্রশ্ন / অন্যান্য"
                        : "Partnership / Query / Other"
                    }
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-heading"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-heading uppercase tracking-wider mb-1">
                    {isBn ? "আপনার বার্তা *" : "Your Message *"}
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={
                      isBn
                        ? "কী বিষয়ে আলোচনা করতে চান..."
                        : "Type your message here..."
                    }
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
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
                      <span>{isBn ? "পাঠানো হচ্ছে..." : "Sending..."}</span>
                    ) : (
                      <>
                        <span>{isBn ? "বার্তা পাঠান" : "Send Message"}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
