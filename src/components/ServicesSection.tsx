import React, { useState } from "react";
import { ShieldCheck, ArrowRight, Check, Eye } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../config/services";
import { ServiceDetailModal } from "./ServiceDetailModal";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Installation Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Safety Net &amp; Invisible Grill Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Professional installation solutions designed to protect your home, balconies, windows, and outdoor spaces across Hyderabad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={`${service.title} installation in Hyderabad`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-display font-bold text-xl drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-orange-50 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquire(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-sm transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForQuote={(title) => {
            setSelectedService(null);
            handleInquire({ ...selectedService, title });
          }}
        />
      )}
    </section>
  );
};
