import React, { useState, useEffect } from "react";
import { ShieldCheck, Phone, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const AboutUs: React.FC = () => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const aboutImages = [
    {
      src: "/images/projects/invisible-grill-balcony-01.jpeg",
      alt: "ANL Safety Nets invisible grill installation on apartment balcony"
    },
    {
      src: "/images/projects/balcony-safety-net-city-view.jpeg",
      alt: "Balcony safety net installation for Hyderabad apartments"
    },
    {
      src: "/images/projects/invisible-grill-sunset-view.jpeg",
      alt: "Invisible grill protective barrier installation"
    },
    {
      src: "/images/projects/highrise-safety-net-protection.jpeg",
      alt: "Apartment balcony protective netting by ANL Safety Nets"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-transparent">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-200 to-red-200 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-90 transition duration-700" />
              
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[440px] w-full bg-slate-900">
                {aboutImages.map((img, idx) => (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      idx === activeImageIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ))}

                {/* Subtle bottom info bar */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-md p-4 text-white flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-xs font-semibold">Hyderabad, Telangana</span>
                  </div>
                  <div className="flex gap-1.5">
                    {aboutImages.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeImageIdx ? "w-4 bg-primary" : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Safety &amp; Protection Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
              About ANL Safety Nets
            </h2>

            {/* Preserved Authentic Copy */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                ANL Safety Nets provides safety net and balcony protection solutions for residential and commercial requirements in Hyderabad. We help customers explore suitable options for balcony safety, bird protection, and invisible grills based on their space and installation needs. Contact us to discuss your requirements and request a quotation.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Operating across key residential hubs in Hyderabad—including Kukatpally and LB Nagar—our team assists homeowners, apartment associations, and property managers in choosing reliable barriers that safeguard families without compromising ventilation or views.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Tailored Solutions</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Measurements customized to your balcony and window openings.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Durable Net &amp; Grill Materials</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High-tensile polyethylene netting and marine-grade stainless steel cables.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Quotation Assistance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Transparent consultation over phone, WhatsApp, or on-site visits.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Hyderabad Service Coverage</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Focus areas in Kukatpally, LB Nagar, and adjacent localities.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_CONFIG.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:from-primary-hover hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_CONFIG.displayPhone}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
              >
                <span>Request Site Inspection</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
