/**
 * Central business configuration for ANL Safety Nets
 * Used across components, contact handlers, metadata, and structured data
 */

export const BUSINESS_CONFIG = {
  name: "ANL Safety Nets",
  shortName: "ANL Safety Nets",
  tagline: "Safety Nets and Invisible Grills in Hyderabad",
  
  // Contact details
  phone: "9704042577",
  displayPhone: "+91 9704042577",
  internationalPhone: "+919704042577",
  whatsappNumber: "9704042577",
  whatsappInternational: "+919704042577",
  email: "harigosala2013@gmail.com",
  
  // Location & Service Area
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
  primaryLocalities: ["Kukatpally", "LB Nagar"],
  serviceAreasDescription: "Kukatpally, LB Nagar, and across Hyderabad, Telangana, India",
  
  // Direct Action URLs
  callUrl: "tel:+919704042577",
  emailUrl: "mailto:harigosala2013@gmail.com?subject=Installation%20Enquiry%20-%20ANL%20Safety%20Nets",
  whatsappDefaultUrl: `https://wa.me/919704042577?text=${encodeURIComponent(
    "Hello ANL Safety Nets, I am interested in your safety net or invisible grill installation services in Hyderabad. Please share the details and quotation."
  )}`,
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
    return `https://wa.me/919704042577?text=${text}`;
  },
  
  // Key categories
  categories: [
    "Balcony Safety Nets",
    "Bird & Pigeon Protection Nets",
    "Invisible Grills",
    "Balcony Protection Solutions",
    "Children Safety Nets",
  ]
} as const;
