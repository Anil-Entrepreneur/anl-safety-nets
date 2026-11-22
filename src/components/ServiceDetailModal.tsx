import React, { useEffect } from "react";
import { X, Check, Phone, MessageSquare, HelpCircle, ArrowLeft } from "lucide-react";
import { ServiceItem } from "../config/services";
import { BUSINESS_CONFIG } from "../config/business";
import { SEO_CONFIG } from "../config/seo";

interface ServiceDetailModalProps {
  service: ServiceItem;
  onClose: () => void;
  onSelectForQuote: (title: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const previousTitle = document.title;
    document.title = `${service.title} Installation in Hyderabad | ANL Safety Nets`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `${service.shortDescription} Professional installation across Kukatpally, LB Nagar, and Hyderabad by ANL Safety Nets.`
      );
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  const whatsappInquireUrl = BUSINESS_CONFIG.getWhatsAppMessageUrl(
    `Hello ANL Safety Nets, I would like to inquire about ${service.title} installation for my space in Hyderabad.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`service-modal-title-${service.id}`}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close service details"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Image Header with explicit width/height */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} installation by ANL Safety Nets in Hyderabad`}
            width={672}
            height={378}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded bg-primary text-white text-xs font-bold uppercase mb-1">
              ANL Safety Nets Service
            </span>
            <h2
              id={`service-modal-title-${service.id}`}
              className="font-display font-extrabold text-2xl sm:text-3xl drop-shadow-sm"
            >
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Breadcrumb indicator */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-1.5">
            <a href="#home" onClick={onClose} className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="#services" onClick={onClose} className="hover:text-primary transition-colors">
              Services
            </a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </nav>

          {/* Full description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Overview &amp; Service Scope
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Key Features &amp; Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Varieties */}
          {service.varieties && service.varieties.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Common Application Areas in Hyderabad
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.varieties.map((v, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-primary" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">
                      {faq.q}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_CONFIG.callUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold hover:bg-orange-50 transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Call Us</span>
            </a>
            <a
              href={whatsappInquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => onSelectForQuote(service.title)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 text-white text-xs sm:text-sm font-bold shadow-md hover:from-primary-hover hover:to-orange-600 transition-all cursor-pointer"
          >
            Request Site Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
