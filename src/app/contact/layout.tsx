import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "যোগাযোগ ও আবেদন কেন্দ্র | Startup Kushtia",
  description:
    "কমিউনিটিতে যোগদান, ক্যাম্পাস অ্যাম্বাসেডর আবেদন, ব্যবসায়িক পোর্টফোলিওতে অন্তর্ভুক্তি এবং সরাসরি যোগাযোগের কেন্দ্রীয় প্ল্যাটফর্ম।",
  keywords: [
    "Startup Kushtia Contact",
    "স্টার্টআপ কুষ্টিয়া যোগাযোগ",
    "ক্যাম্পাস অ্যাম্বাসেডর আবেদন",
    "পোর্টফোলিও তালিকাভুক্তি",
    "কুষ্টিয়া উদ্যোক্তা আবেদন",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
