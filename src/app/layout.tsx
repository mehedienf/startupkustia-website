import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tiroBangla = localFont({
  src: [
    {
      path: "./fonts/TiroBangla-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TiroBangla-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tiro-bangla",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0980-09FF, U+200C-200D, U+25CC",
    },
  ],
});

export const metadata: Metadata = {
  title: "Startup Kushtia – Building Blocks Connecting Dots",
  description:
    "আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার লঞ্চপ্যাড। কুষ্টিয়া, বাংলাদেশ থেকে একটি শক্তিশালী উদ্যোক্তা ও ব্যবসায়িক ইকোসিস্টেম গড়ে তোলার প্ল্যাটফর্ম।",
  keywords: [
    "Startup Kushtia",
    "স্টার্টআপ কুষ্টিয়া",
    "উদ্যোক্তা",
    "কুষ্টিয়া",
    "বাংলাদেশ",
    "Entrepreneurship",
    "Kushtia Startups",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/icon.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/favicon.ico",
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Startup Kushtia – Building Blocks Connecting Dots",
    description:
      "আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার লঞ্চপ্যাড। কুষ্টিয়া, বাংলাদেশ থেকে একটি শক্তিশালী উদ্যোক্তা ও ব্যবসায়িক ইকোসিস্টেম গড়ে তোলার প্ল্যাটফর্ম।",
    siteName: "Startup Kushtia",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`scroll-smooth ${tiroBangla.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--sk-shell)] text-[var(--sk-body)] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
