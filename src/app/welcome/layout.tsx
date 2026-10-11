import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Kushtia – অফিসিয়াল লঞ্চ | আমরা এখন লাইভ!",
  description:
    "কুষ্টিয়ার উদ্যোক্তা ও উদ্ভাবনী কমিউনিটি। Learn. Lead. Connect. Impact. আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার লঞ্চপ্যাড।",
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
