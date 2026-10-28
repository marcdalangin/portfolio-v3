"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileBar } from "@/components/MobileBar";
import { DitherOverlay } from "@/components/DitherOverlay";
import { ContactModal } from "@/components/ContactModal";
import { ReachModal } from "@/components/ReachModal";
import { ServicesSection } from "@/components/explore/ServicesSection";
import { ToolsIUseSection } from "@/components/explore/ToolsIUseSection";
import { LinksSection } from "@/components/explore/LinksSection";

export default function ExplorePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReachOpen, setIsReachOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <DitherOverlay />

      {/* Top Mobile Bar */}
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
            {/* Page Intro Banner */}
            <div className="space-y-2 pt-2 border-b pb-4" style={{ borderColor: "var(--border)" }}>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>
                Explore & Resources
              </h1>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Commercial capabilities, active engineering stacks, and curated developer references.
              </p>
            </div>

            <ServicesSection />
            <ToolsIUseSection />
            <LinksSection />
          </div>
        </main>
      </div>

      {/* Floating Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ReachModal isOpen={isReachOpen} onClose={() => setIsReachOpen(false)} />
    </>
  );
}
