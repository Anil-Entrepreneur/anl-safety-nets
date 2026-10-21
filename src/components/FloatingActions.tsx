import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Buttons (bottom-right) */}
      <div className="fixed right-6 bottom-6 z-40 hidden sm:flex flex-col gap-3.5 animate-in slide-in-from-right-10 duration-700">
        {/* Call Button */}
        <a
          href={BUSINESS_CONFIG.callUrl}
          className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-500 text-white rounded-full shadow-[0_4px_16px_rgba(37,99,235,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label={`Call ANL Safety Nets at ${BUSINESS_CONFIG.displayPhone}`}
          title="Call Now"
        >
          <Phone size={24} className="group-hover:animate-pulse" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_CONFIG.whatsappDefaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-[0_4px_16px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* Email Button */}
        <a
          href={BUSINESS_CONFIG.emailUrl}
          className="w-14 h-14 bg-gradient-to-tr from-slate-800 to-slate-700 text-white rounded-full shadow-[0_4px_16px_rgba(30,41,59,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Send Email"
          title="Send Email"
        >
          <Mail size={22} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Mobile Sticky Bar (bottom of screen for phone users) */}
      <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-2xl flex items-center gap-3">
        <a
          href={BUSINESS_CONFIG.callUrl}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-orange-500 text-white font-bold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_CONFIG.whatsappDefaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
