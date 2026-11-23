/**
 * Centralized SEO & Domain Configuration for ANL Safety Nets
 * 
 * ============================================================================
 * CUSTOM DOMAIN CONFIGURATION INSTRUCTION:
 * When you connect your custom domain (e.g. https://www.anlsafetynets.com):
 * Simply update `PRODUCTION_DOMAIN` below to your new domain.
 * All canonical tags, Open Graph tags, Twitter cards, JSON-LD schemas,
 * and sitemaps will automatically use the updated custom domain!
 * ============================================================================
 */

export const SEO_CONFIG = {
  // Current production domain on Netlify (change here when custom domain is connected)
  productionDomain: "https://anlsafetynets.netlify.app",
  
  siteName: "ANL Safety Nets",
  defaultTitle: "ANL Safety Nets – Safety Nets and Invisible Grills in Hyderabad, Tamil Nadu & Andhra Pradesh",
  titleTemplate: "%s | ANL Safety Nets Hyderabad",
  
  defaultDescription:
    "Professional safety nets and invisible grill installation in Hyderabad. Solutions for balconies, bird & pigeon protection, sports nets, and children safety in Kukatpally & Tambaram, Tamil Nadu.",
  
  keywords: [
    "Safety nets installation",
    "Balcony safety nets",
    "Pigeon safety nets",
    "Bird protection nets",
    "Children's safety nets",
    "Invisible grills",
    "Residential safety nets",
    "Commercial safety nets",
    "Sports nets installation Hyderabad",
    "Cricket practice nets Hyderabad",
    "Safety nets in Kukatpally",
    "Safety nets in Tambaram, Tamil Nadu",
    "Balcony protection nets Hyderabad"
  ],
  
  defaultOgImage: "/images/projects/invisible-grill-balcony-01.jpeg",
  logoImage: "/assets/aistudio/logo_new_3c42c695.png",
  
  locale: "en_IN",
  region: "IN-TG", // Telangana, India
  city: "Hyderabad",
  
  // Helper to build canonical URLs
  getCanonicalUrl: (path: string = "") => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${SEO_CONFIG.productionDomain}${cleanPath === "/" ? "" : cleanPath}`;
  },
  
  // Helper to get absolute asset URLs for Open Graph / Structured Data
  getAbsoluteAssetUrl: (path: string) => {
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${SEO_CONFIG.productionDomain}${cleanPath}`;
  }
} as const;
