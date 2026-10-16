"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/connect/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FC] text-brand">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-brand animate-ping"></span>
        <span className="text-sm font-bold text-heading">
          রিডাইরেক্ট হচ্ছে...
        </span>
      </div>
    </div>
  );
}
