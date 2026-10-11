import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="bn" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F5F7FC] text-[#444E69] antialiased">
        {children}
      </body>
    </html>
  );
}
