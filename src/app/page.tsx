"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileBar } from "@/components/MobileBar";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { GitHubHeatmap } from "@/components/GitHubHeatmap";
import { ContactModal } from "@/components/ContactModal";
import { ReachModal } from "@/components/ReachModal";
import { DitherOverlay } from "@/components/DitherOverlay";

export default function PortfolioHome() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReachOpen, setIsReachOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <DitherOverlay />

      {/* Top Mobile Bar (Visible on mobile/tablet viewports) */}
      <MobileBar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Two-Column Shell */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl gap-6 p-4 md:p-6 lg:p-8 min-h-screen">
        
        {/* Left Sticky Capsule Sidebar (Desktop) */}
        <Sidebar
          onOpenContact={() => setIsContactOpen(true)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Right Main Content Column */}
        <main
          className={`w-full max-w-3xl flex-1 space-y-12 pb-24 transition-all duration-300 ${
            isSidebarCollapsed ? "mx-auto max-w-4xl" : ""
          }`}
        >
          <Hero onOpenReach={() => setIsReachOpen(true)} />
          <ExperienceSection onOpenContact={() => setIsContactOpen(true)} />
          <ProjectsSection />
          <TechStackSection />
          <GitHubHeatmap />
        </main>
      </div>

      {/* Floating Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ReachModal isOpen={isReachOpen} onClose={() => setIsReachOpen(false)} />
    </>
  );
}
