"use client";

import AmbassadorModal from "@/components/AmbassadorModal";
import Ambassadors from "@/components/Ambassadors";
import Audience from "@/components/Audience";
import ContactModal from "@/components/ContactModal";
import CtaBanner from "@/components/CtaBanner";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinModal from "@/components/JoinModal";
import PolicyModal from "@/components/PolicyModal";
import Portfolio from "@/components/Portfolio";
import PortfolioModal from "@/components/PortfolioModal";
import Team from "@/components/Team";
import Values from "@/components/Values";
import WelcomeSplash from "@/components/WelcomeSplash";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [ambassadorModalOpen, setAmbassadorModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // If user lands with a hash, remove it immediately to keep URL clean, then smooth scroll to the section
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        window.history.replaceState(null, "", window.location.pathname);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const navHeight = 85;
            const pos =
              el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: pos, behavior: "smooth" });
          }
        }, 100);
      }

      // Handle cross-page section navigation queued via sessionStorage
      const target = sessionStorage.getItem("sk_scroll_target");
      if (target) {
        sessionStorage.removeItem("sk_scroll_target");
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            const navHeight = 85;
            const pos =
              el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: pos, behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--sk-shell)] text-[#444E69]">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* For Who / Audience Section */}
        <Audience onSelectCategory={() => setJoinModalOpen(true)} />

        {/* Events Section */}
        <Events onOpenJoin={() => setJoinModalOpen(true)} />

        {/* Portfolio & Kushtia Ecosystem Showcase */}
        <Portfolio onOpenListingModal={() => setPortfolioModalOpen(true)} />

        {/* Campus Ambassador Program */}
        <Ambassadors
          onOpenAmbassadorModal={() => setAmbassadorModalOpen(true)}
        />

        {/* Core Values */}
        <Values />

        {/* Founding Team */}
        <Team />

        {/* FAQ Accordion */}
        <Faq onOpenContact={() => setContactModalOpen(true)} />

        {/* Ready to Build Call to Action Banner */}
        <CtaBanner
          onOpenJoin={() => setJoinModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPolicy={(type) => setPolicyModalType(type)} />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />

      <AmbassadorModal
        isOpen={ambassadorModalOpen}
        onClose={() => setAmbassadorModalOpen(false)}
      />

      <PortfolioModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      {/* Launch / Welcome Splash Screen (Matches Screenshot) */}
      {showSplash && <WelcomeSplash onEnterSite={() => setShowSplash(false)} />}
    </div>
  );
}
