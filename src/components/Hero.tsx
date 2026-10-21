import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, FileText, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";
import { HERO_CAROUSEL_IMAGES } from "../config/projects";

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background ambient gradient glow blobs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-orange-200/30 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-200/25 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-display font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
              ANL Safety Nets –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">
                Safety Nets and Invisible Grills
              </span>{" "}
              in Hyderabad
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Explore practical safety net and invisible grill solutions for balconies, windows, and residential spaces. ANL Safety Nets helps customers in Hyderabad find suitable protection options for their requirements.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <button
                onClick={scrollToQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-primary to-orange-500 hover:from-primary-hover hover:to-orange-600 rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-102 cursor-pointer"
              >
                <FileText className="h-5 w-5" />
                <span>Request a Quote</span>
              </button>

              <a
                href={BUSINESS_CONFIG.callUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-orange-50/80 border border-slate-200 hover:border-orange-200 rounded-xl shadow-sm transition-all hover:scale-102"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
              >
                <MessageSquare className="h-5 w-5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/70 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Tailored Balcony Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Invisible Grills &amp; Nets</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Direct Site Quotation</span>
              </div>
            </div>
          </div>

          {/* Right Image Carousel Column */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Aspect container */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4] w-full overflow-hidden">
                {HERO_CAROUSEL_IMAGES.map((item, index) => (
                  <div
                    key={item.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover object-center"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    
                    {/* Bottom gradient overlay with real caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-5 sm:p-6 text-white">
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wider mb-2">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev/Next arrows */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
                aria-label="Next photograph"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Slide dots */}
              <div className="absolute bottom-2.5 right-4 z-20 flex gap-1.5">
                {HERO_CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? "w-6 bg-primary" : "w-2 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-orange-100 items-center gap-3 z-30 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Authentic Installations</p>
                <p className="text-[11px] text-slate-500">Real Project Photographs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
