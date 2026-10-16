import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "কানেক্ট ও মেম্বার রেজিস্ট্রেশন | Startup Kushtia",
  description:
    "স্টার্টআপ কুষ্টিয়া মেম্বার হিসেবে রেজিস্ট্রেশন ও যোগাযোগের অফিসিয়াল প্ল্যাটফর্ম। Think Local, Build Global.",
  keywords: [
    "Startup Kushtia Connect",
    "স্টার্টআপ কুষ্টিয়া কানেক্ট",
    "মেম্বার রেজিস্ট্রেশন",
    "কুষ্টিয়া উদ্যোক্তা আবেদন",
    "Startup Kushtia Member Registration",
  ],
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
