'use client';

import React, { createContext, useContext, useState, useSyncExternalStore } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot(): Language {
  if (typeof window === 'undefined') return 'bn';
  const saved = localStorage.getItem('sk_lang');
  return saved === 'en' ? 'en' : 'bn';
}

function getServerSnapshot(): Language {
  return 'bn';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const storeLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [overrideLang, setOverrideLang] = useState<Language | null>(null);

  const language = overrideLang ?? storeLang;

  const setLanguage = (lang: Language) => {
    setOverrideLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sk_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const next = language === 'bn' ? 'en' : 'bn';
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
