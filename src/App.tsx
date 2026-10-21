/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { RecentWorks } from "./components/RecentWorks";
import { ServicesSection } from "./components/ServicesSection";
import { InvisibleGrillsFeature } from "./components/InvisibleGrillsFeature";
import { AboutUs } from "./components/AboutUs";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ContactAndQuote } from "./components/ContactAndQuote";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>("Balcony Safety Nets");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 scroll-smooth relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Background grid overlay */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <div className="relative">
              {/* Recent Works Gallery with 100% Real Photographs */}
              <RecentWorks />

              {/* Service Cards & Showcase */}
              <ServicesSection onSelectService={handleSelectService} />

              {/* Modern Invisible Grills Spotlight */}
              <InvisibleGrillsFeature />

              {/* About ANL Safety Nets */}
              <AboutUs />

              {/* Why Choose Us */}
              <WhyChooseUs />
            </div>
          </div>

          {/* Contact & Quotation Section */}
          <ContactAndQuote initialService={selectedServiceForQuote} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Call, WhatsApp & Email Action Buttons */}
        <FloatingActions />
      </div>
    </div>
  );
}
