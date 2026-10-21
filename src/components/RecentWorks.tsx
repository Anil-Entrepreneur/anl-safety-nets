import React, { useState } from "react";
import { Eye, X, ZoomIn, Shield, MapPin } from "lucide-react";
import { REAL_PROJECTS, ProjectItem } from "../config/projects";
import { BUSINESS_CONFIG } from "../config/business";

export const RecentWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Balcony Safety Nets",
    "Invisible Grills",
    "Bird Protection Nets",
    "Balcony Protection"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="recent-works" className="py-20 sm:py-28 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="h-3.5 w-3.5" />
            <span>Genuine Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Recent Works &amp; Real Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Examine real installations of safety nets and invisible grills completed for residential balconies and apartments across Hyderabad.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-white text-slate-600 hover:bg-orange-50 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setLightboxProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
                    {project.tag}
                  </span>
                </div>

                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                    <ZoomIn className="h-4 w-4 text-primary" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Hyderabad, Telangana</span>
                  </div>

                  <a
                    href={`https://wa.me/919704042577?text=${encodeURIComponent(
                      `Hello ANL Safety Nets, I am inquiring about the ${project.title} installation for my space.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:text-orange-600 flex items-center gap-1"
                  >
                    <span>Inquire this Setup</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          * All photographs shown above represent genuine, unmanipulated safety net and invisible grill installations.
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image container preserving aspect ratio without distortion */}
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black/60 p-2 sm:p-4">
              <img
                src={lightboxProject.image}
                alt={lightboxProject.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal caption */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-primary text-white text-xs font-bold uppercase mb-1">
                  {lightboxProject.category}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {lightboxProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {lightboxProject.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/919704042577?text=${encodeURIComponent(
                    `Hello ANL Safety Nets, I saw your ${lightboxProject.title} photograph and would like to request a quote for my apartment in Hyderabad.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  WhatsApp Enquiry
                </a>
                <a
                  href={BUSINESS_CONFIG.callUrl}
                  className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
