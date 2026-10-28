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

      {/* Main Full-Width Shell */}
      <div className="relative z-10 flex w-full min-h-screen">
        
        {/* Left Sticky Capsule Sidebar (Desktop) */}
        <Sidebar
          onOpenContact={() => setIsContactOpen(true)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Main Canvas: Centers content column in available viewport space */}
        <main className="flex-1 min-w-0 flex justify-center px-4 sm:px-6 md:px-8 py-6 md:py-10 transition-all duration-300">
          <div className="w-full max-w-2xl lg:max-w-3xl space-y-12 pb-24">
            <Hero onOpenReach={() => setIsReachOpen(true)} />
            <ExperienceSection onOpenContact={() => setIsContactOpen(true)} />
            <ProjectsSection />
            <TechStackSection />
            <GitHubHeatmap />
          </div>
        </main>
      </div>

      {/* Floating Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ReachModal isOpen={isReachOpen} onClose={() => setIsReachOpen(false)} />
    </>
  );
}
