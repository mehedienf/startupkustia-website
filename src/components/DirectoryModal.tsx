'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Building2, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DirectoryModal({ isOpen, onClose }: DirectoryModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    founderName: '',
    category: 'সফটওয়্যার ও আইটি',
    location: '',
    contact: '',
    website: '',
    description: '',
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

  const isBn = language === 'bn';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000A3C]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#000A3C] overflow-hidden">
        <div className="bg-[#000A3C] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#48E2E7]">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#48E2E7]" />
            <h3 className="font-bold text-lg text-white">
              {isBn ? 'ডিরেক্টরিতে তালিকাভুক্ত হোন' : 'List in Startup Kushtia Directory'}
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

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#E6FAFB] text-[#0C4DEB] rounded-full flex items-center justify-center mx-auto border-2 border-[#48E2E7]">
                <CheckCircle className="w-8 h-8 text-[#0C4DEB]" />
              </div>
              <h4 className="text-xl font-bold text-[#000A3C]">
                {isBn ? 'আবেদনটি সফলভাবে জমা হয়েছে!' : 'Listing Submission Received!'}
              </h4>
              <p className="text-sm text-[#444E69] max-w-sm mx-auto">
                {isBn
                  ? 'আপনার ব্যবসা বা স্টার্টআপের তথ্য যাচাই করে দ্রুত ডিরেক্টরিতে লাইভ করা হবে। কোনো তথ্যের প্রয়োজনে আমরা আপনার সাথে যোগাযোগ করব।'
                  : 'Our admin team will review and verify the listing details before publishing to the public directory.'}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0C4DEB] text-white font-semibold rounded-xl btn-hard text-sm"
                >
                  {isBn ? 'ধন্যবাদ' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <p className="text-xs text-[#444E69]">
                {isBn
                  ? 'কুষ্টিয়ার উদ্যোক্তাদের পাবলিক ডিরেক্টরিতে আপনার উদ্যোগ অন্তর্ভুক্ত করে আরও গ্রাহক, বিনিয়োগকারী ও পার্টনারদের দৃষ্টি আকর্ষণ করুন।'
                  : 'Add your Kushtia venture to the public ecosystem directory for increased visibility.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'উদ্যোগের নাম *' : 'Venture / Business Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isBn ? 'আপনার ব্যবসা বা স্টার্টআপের নাম' : 'e.g. Gorai Tech Labs'}
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'প্রতিষ্ঠাতা / উদ্যোক্তা *' : 'Founder / Owner Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isBn ? 'আপনার নাম' : 'Founder Name'}
                    value={formData.founderName}
                    onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'সেক্টর / ক্যাটাগরি *' : 'Industry Category *'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C] bg-white"
                  >
                    <option value="সফটওয়্যার ও আইটি">{isBn ? 'সফটওয়্যার ও আইটি' : 'Software & IT'}</option>
                    <option value="এগ্রো ও ফুড-টেক">{isBn ? 'এগ্রো ও ফুড-টেক' : 'Agro & FoodTech'}</option>
                    <option value="হস্তশিল্প ও ফ্যাশন">{isBn ? 'হস্তশিল্প ও ফ্যাশন' : 'Handicrafts & Fashion'}</option>
                    <option value="লজিস্টিকস ও সেবা">{isBn ? 'লজিস্টিকস ও অন-ডিমান্ড' : 'Logistics & Services'}</option>
                    <option value="শিক্ষা ও এডটেক">{isBn ? 'শিক্ষা ও এডটেক' : 'Education & EdTech'}</option>
                    <option value="অন্যান্য এসএমই">{isBn ? 'অন্যান্য লোকাল ব্যবসা' : 'Other Local Venture'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'কুষ্টিয়ায় অবস্থান / ঠিকানা *' : 'Location in Kushtia *'}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isBn ? 'যেমন: মজমপুর, কুমারখালী, এনএস রোড' : 'e.g. Majampur, Kushtia'}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'মোবাইল / হোয়াটসঅ্যাপ *' : 'Contact / WhatsApp *'}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                    {isBn ? 'ওয়েবসাইট বা ফেসবুক পেজ' : 'Website or Social Link'}
                  </label>
                  <input
                    type="text"
                    placeholder="https://facebook.com/yourpage"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#000A3C] uppercase tracking-wider mb-1">
                  {isBn ? 'উদ্যোগ সম্পর্কে বিবরণ (১-২ বাক্য)' : 'Venture Description'}
                </label>
                <textarea
                  rows={2}
                  placeholder={isBn ? 'কী পণ্য বা সেবা প্রদান করেন...' : 'What product or service do you offer?'}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E7F1] focus:outline-none focus:border-[#0C4DEB] text-[#000A3C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-[#444E69] hover:text-[#000A3C] font-medium"
                >
                  {isBn ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-[#0C4DEB] hover:bg-[#083DB8] text-white font-bold rounded-xl btn-hard text-sm flex items-center gap-2"
                >
                  {loading ? (
                    <span>{isBn ? 'জমা হচ্ছে...' : 'Submitting...'}</span>
                  ) : (
                    <>
                      <span>{isBn ? 'তালিকাভুক্তির আবেদন পাঠান' : 'Submit Listing'}</span>
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
