import React from "react";
import { LayoutGrid, Sparkles, PhoneCall, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: "Tailored to Your Space",
      description: "Every balcony, window, and duct opening is measured on-site so the netting or invisible grills fit your building architecture precisely."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Nets & Invisible Grill Options",
      description: "Choose between traditional high-strength safety mesh netting or sleek invisible grills based on your aesthetic and budget preferences."
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      title: "Direct Quotation Assistance",
      description: "Speak directly with our team over phone, WhatsApp, or request an in-person assessment without middleman markups or hidden fees."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Dedicated Hyderabad Service",
      description: "Active local service coverage across Kukatpally, LB Nagar, and residential communities throughout Hyderabad, Telangana."
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full">
            Practical Customer Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Why Choose ANL Safety Nets
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We focus on honest advice, accurate measurements, and dependable installation to safeguard your home and family.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-orange-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,85,51,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                {b.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
              Need assistance measuring your balcony or windows?
            </h3>
            <p className="text-orange-100 text-sm sm:text-base max-w-xl">
              Contact ANL Safety Nets at {BUSINESS_CONFIG.displayPhone} to schedule a measurement visit in Kukatpally, LB Nagar, or Hyderabad.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.callUrl}
            className="shrink-0 px-6 py-3.5 bg-white text-slate-900 hover:bg-orange-50 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Call {BUSINESS_CONFIG.displayPhone}
          </a>
        </div>

      </div>
    </section>
  );
};
