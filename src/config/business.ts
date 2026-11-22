/**
 * Central business configuration for ANL Safety Nets
 * Used across components, contact handlers, metadata, and structured data
 */

import { SEO_CONFIG } from "./seo";

export const BUSINESS_CONFIG = {
  name: "ANL Safety Nets",
  shortName: "ANL Safety Nets",
  tagline: "Safety Nets and Invisible Grills in Hyderabad",
  siteUrl: SEO_CONFIG.productionDomain,
  
  // Contact details
  phone: "95773 93999",
  displayPhone: "+91 95773 93999",
  internationalPhone: "+919577393999",
  whatsappNumber: "95773 93999",
  whatsappInternational: "+919577393999",
  email: "harigosala2013@gmail.com",
  
  // Location & Service Area
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
  primaryLocalities: ["Kukatpally", "LB Nagar"],
  serviceAreasDescription: "Kukatpally, LB Nagar, and across Hyderabad, Telangana, India",
  
  // Direct Action URLs
  callUrl: "tel:+919577393999",
  emailUrl: "mailto:harigosala2013@gmail.com?subject=Installation%20Enquiry%20-%20ANL%20Safety%20Nets",
  whatsappDefaultUrl: `https://wa.me/919577393999?text=${encodeURIComponent(
    "Hello ANL Safety Nets, I am interested in your safety net or invisible grill installation services in Hyderabad. Please share the details and quotation."
  )}`,
  getWhatsAppMessageUrl: (message: string) =>
    `https://wa.me/919577393999?text=${encodeURIComponent(message)}`,
  getWhatsAppQuoteUrl: (details: {
    name: string;
    phone: string;
    email?: string;
    serviceType: string;
    locality?: string;
    message?: string;
  }) => {
    const text = `*New Quote Request - ANL Safety Nets*%0a%0a` +
      `*Name:* ${encodeURIComponent(details.name)}%0a` +
      `*Phone:* ${encodeURIComponent(details.phone)}%0a` +
      `*Service Required:* ${encodeURIComponent(details.serviceType)}%0a` +
      `*Locality / Area:* ${encodeURIComponent(details.locality || "Hyderabad")}%0a` +
      (details.email ? `*Email:* ${encodeURIComponent(details.email)}%0a` : "") +
      (details.message ? `*Notes:* ${encodeURIComponent(details.message)}` : "");
    return `https://wa.me/919577393999?text=${text}`;
  },
  
  // Key categories
  categories: [
    "Balcony Safety Nets",
    "Bird & Pigeon Protection Nets",
    "Invisible Grills",
    "Sports Nets",
    "Children Safety Nets",
    "Balcony Protection Solutions"
  ]
} as const;
