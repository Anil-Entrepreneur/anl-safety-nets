import React, { useState, useEffect } from "react";
import { ShieldCheck, Phone, MessageSquare, Menu, X } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-md py-3 border-b border-orange-100/60" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection("home", e)}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 border border-orange-200/80 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/assets/aistudio/logo_new_3c42c695.png"
                  alt="ANL Safety Nets Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinematic font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                  ANL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Safety Nets</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 hidden sm:block">
                  Hyderabad • Kukatpally &amp; LB Nagar
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 font-medium text-slate-700 text-sm">
              <a
                href="#home"
                onClick={(e) => scrollToSection("home", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection("services", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="#invisible-grills"
                onClick={(e) => scrollToSection("invisible-grills", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Invisible Grills
              </a>
              <a
                href="#recent-works"
                onClick={(e) => scrollToSection("recent-works", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Recent Works
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection("about", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#why-us"
                onClick={(e) => scrollToSection("why-us", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.callUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-primary to-orange-500 hover:from-primary-hover hover:to-orange-600 rounded-xl shadow-md shadow-orange-500/25 transition-all hover:scale-102"
                aria-label={`Call ANL Safety Nets at ${BUSINESS_CONFIG.displayPhone}`}
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS_CONFIG.displayPhone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={BUSINESS_CONFIG.callUrl}
                className="p-2 rounded-xl bg-orange-50 text-primary border border-orange-200 sm:hidden"
                aria-label="Call ANL Safety Nets"
              >
                <Phone className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-orange-50 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-b border-orange-100 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800">
              <button
                onClick={(e) => scrollToSection("home", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={(e) => scrollToSection("services", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={(e) => scrollToSection("invisible-grills", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Invisible Grills
              </button>
              <button
                onClick={(e) => scrollToSection("recent-works", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Recent Works
              </button>
              <button
                onClick={(e) => scrollToSection("about", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={(e) => scrollToSection("why-us", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={(e) => scrollToSection("contact", e)}
                className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors"
              >
                Contact &amp; Quote
              </button>
            </nav>

            <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2">
              <a
                href={BUSINESS_CONFIG.callUrl}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-xl shadow-md text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_CONFIG.displayPhone}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-500 text-white font-bold rounded-xl shadow-sm text-sm hover:bg-emerald-600 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
