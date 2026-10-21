import React, { useState } from "react";
import { ShieldCheck, Phone, Mail, MapPin, MessageSquare, X } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-50/10 border border-orange-500/30 p-1 flex items-center justify-center shadow-md bg-white overflow-hidden">
                <img
                  src="/assets/aistudio/logo_new_3c42c695.png"
                  alt="ANL Safety Nets Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-cinematic font-bold text-2xl text-white">
                ANL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Safety Nets</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Safety nets and invisible grill installation solutions for residential and commercial spaces across Hyderabad, Telangana.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={BUSINESS_CONFIG.callUrl} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={BUSINESS_CONFIG.emailUrl} className="hover:text-white transition-colors break-all">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Kukatpally &amp; LB Nagar, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#home" onClick={(e) => scrollTo("home", e)} className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo("services", e)} className="hover:text-primary transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#invisible-grills" onClick={(e) => scrollTo("invisible-grills", e)} className="hover:text-primary transition-colors">
                  Invisible Grills
                </a>
              </li>
              <li>
                <a href="#recent-works" onClick={(e) => scrollTo("recent-works", e)} className="hover:text-primary transition-colors">
                  Recent Works Gallery
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo("about", e)} className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => scrollTo("why-us", e)} className="hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="hover:text-primary transition-colors">
                  Contact &amp; Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#services" onClick={(e) => scrollTo("services", e)} className="hover:text-primary transition-colors">
                  Balcony Safety Nets
                </a>
              </li>
              <li>
                <a href="#invisible-grills" onClick={(e) => scrollTo("invisible-grills", e)} className="hover:text-primary transition-colors">
                  Invisible Grills for Balconies
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo("services", e)} className="hover:text-primary transition-colors">
                  Bird &amp; Pigeon Protection Nets
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo("services", e)} className="hover:text-primary transition-colors">
                  Children Safety Nets
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo("services", e)} className="hover:text-primary transition-colors">
                  Balcony Protection Solutions
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="hover:text-primary transition-colors">
                  Custom Residential Netting
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas & WhatsApp */}
          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wider mb-5">
              Service Areas
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Providing installation assistance across Kukatpally, LB Nagar, and all residential neighborhoods in Hyderabad.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Need an immediate estimate?
              </span>
              <a
                href={BUSINESS_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ANL Safety Nets. All rights reserved. Serving Hyderabad, Telangana.
          </p>

          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Privacy / Terms Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-display font-bold text-xl mb-3">
              {legalModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>

            <div className="text-xs text-slate-600 space-y-3 max-h-60 overflow-y-auto pr-2">
              {legalModal === "privacy" ? (
                <>
                  <p>
                    ANL Safety Nets respects your personal privacy. When you contact us or request an installation quotation via our website, phone, or WhatsApp, we only collect information necessary to prepare your estimate (such as name, phone number, and location).
                  </p>
                  <p>
                    We do not sell, rent, or distribute your contact details to third-party marketing companies. Information provided is strictly used to communicate regarding your safety net or invisible grill enquiry.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All quotes provided by ANL Safety Nets are based on specific measurements, material choices, and site conditions observed or provided by the customer.
                  </p>
                  <p>
                    Installation dates and times are scheduled directly with the customer. Quotations remain subject to final confirmation following on-site verification of dimensions in Hyderabad.
                  </p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="mt-5 w-full py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
