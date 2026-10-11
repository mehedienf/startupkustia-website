"use client";

import AmbassadorModal from "@/components/AmbassadorModal";
import Ambassadors from "@/components/Ambassadors";
import Audience from "@/components/Audience";
import ContactModal from "@/components/ContactModal";
import CtaBanner from "@/components/CtaBanner";
import Directory from "@/components/Directory";
import DirectoryModal from "@/components/DirectoryModal";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinModal from "@/components/JoinModal";
import Pillars from "@/components/Pillars";
import PolicyModal from "@/components/PolicyModal";
import Team from "@/components/Team";
import Values from "@/components/Values";
import { useState } from "react";

export default function HomePage() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [ambassadorModalOpen, setAmbassadorModalOpen] = useState(false);
  const [directoryModalOpen, setDirectoryModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FC] text-[#444E69]">
      {/* Navigation */}
      <Header onOpenJoin={() => setJoinModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenJoin={() => setJoinModalOpen(true)} />

        {/* For Who / Audience Section */}
        <Audience onSelectCategory={() => setJoinModalOpen(true)} />

        {/* 6 Ways We Support / Pillars */}
        <Pillars onOpenJoin={() => setJoinModalOpen(true)} />

        {/* Directory & Kushtia Ecosystem Showcase */}
        <Directory onOpenListingModal={() => setDirectoryModalOpen(true)} />

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

      <DirectoryModal
        isOpen={directoryModalOpen}
        onClose={() => setDirectoryModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
