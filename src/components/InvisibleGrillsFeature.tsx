import React, { useState } from "react";
import { Eye, ShieldCheck, Check, Sparkles, MessageSquare, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const InvisibleGrillsFeature: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const grillImages = [
    {
      src: "/images/projects/invisible-grill-balcony-01.jpeg",
      title: "Panoramic Balcony Railing",
      caption: "High-tensile SS vertical cables installed along high-rise apartment balcony"
    },
    {
      src: "/images/projects/invisible-grill-residential-02.jpeg",
      title: "Balcony & Window Barrier",
      caption: "Sleek, unobtrusive barrier preserving daylight and ventilation"
    },
    {
      src: "/images/projects/invisible-grill-sunset-view.jpeg",
      title: "Balcony Full-Height Protection",
      caption: "Floor-to-ceiling installation providing safety without feeling enclosed"
    }
  ];

  return (
    <section id="invisible-grills" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modern Safety Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
            Invisible Grills for Balconies &amp; Windows
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Preserve your uninterrupted views while ensuring robust perimeter protection for high-rise apartments and homes in Hyderabad.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={grillImages[activeImage].src}
                  alt={grillImages[activeImage].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Overlay info */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 sm:p-6">
                  <span className="px-2.5 py-0.5 rounded bg-primary text-white text-xs font-bold uppercase mb-1 inline-block">
                    {grillImages[activeImage].title}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {grillImages[activeImage].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/90 border-t border-slate-800">
                {grillImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[16/10] cursor-pointer ${
                      activeImage === idx ? "border-primary scale-[1.02]" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Why Install Invisible Grills?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traditional metal grills create a caged feeling and obstruct beautiful outdoor horizons. Invisible grills utilize slim, high-tensile stainless steel cables positioned at secure intervals, delivering safety without compromise.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Eye className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Unobstructed Panoramic Views</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Almost invisible from a distance; enjoy scenic sunsets and daylight freely.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <ShieldCheck className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">High Tensile Stainless Steel</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Reinforced steel cables anchored with heavy-duty structural tracks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Check className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Rust-Resistant &amp; Low Maintenance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No periodic repainting needed, unlike conventional wrought-iron grills.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/919704042577?text=${encodeURIComponent(
                  "Hello ANL Safety Nets, I am interested in getting Invisible Grills installed on my balcony in Hyderabad. Please share quotation details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Inquire Invisible Grills</span>
              </a>

              <a
                href={BUSINESS_CONFIG.callUrl}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call {BUSINESS_CONFIG.displayPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
