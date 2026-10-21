/**
 * Verified services offered by ANL Safety Nets in Hyderabad
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  varieties: string[];
  faqs: { q: string; a: string }[];
  ctaText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "balcony-safety-nets",
    title: "Balcony Safety Nets",
    shortDescription: "Protective netting installed across balcony railings and open perimeters to prevent accidental falls and secure residential spaces.",
    fullDescription: "Balcony safety nets provide essential safety for multi-story apartments and homes. Our installations use durable mesh tailored to your balcony dimensions, ensuring complete coverage while preserving natural light and ventilation.",
    image: "/images/projects/balcony-safety-net-city-view.jpeg",
    features: [
      "Secured along balcony railings and ceiling anchors",
      "Maintains natural airflow and daylight",
      "Custom measured for curved, straight, or corner balconies",
      "Suitable for high-rise apartments and individual houses"
    ],
    varieties: [
      "Apartment Balcony Enclosures",
      "Terrace & Open Railing Netting",
      "Curved Balcony Nets",
      "High-Tensile Polyethylene Mesh"
    ],
    faqs: [
      {
        q: "Does the balcony net block the outside view or air?",
        a: "No, the mesh design is thin and translucent, allowing natural air and light to pass through freely while providing a secure barrier."
      },
      {
        q: "How is the net anchored to the balcony?",
        a: "Technicians fix stainless steel hooks or fasteners into the concrete frame/ceiling and tie high-tensile perimeter ropes for firm tension."
      }
    ],
    ctaText: "Inquire Balcony Safety Nets"
  },
  {
    id: "invisible-grills",
    title: "Invisible Grills",
    shortDescription: "High-tensile stainless steel vertical cables that offer a strong safety barrier without blocking your panoramic balcony or window views.",
    fullDescription: "Invisible grills are the modern safety alternative to traditional iron or MS grills. Crafted with high-tensile stainless steel wire cables anchored into rigid tracks, they provide safety with zero visual obstruction and zero maintenance.",
    image: "/images/projects/invisible-grill-balcony-01.jpeg",
    features: [
      "High-tensile stainless steel cables",
      "Unobstructed panoramic city and nature views",
      "Rust-resistant and maintenance-free design",
      "Suitable for balconies, French windows, and open corridors"
    ],
    varieties: [
      "Vertical Balcony Invisible Grills",
      "Window & Sliding Door Grills",
      "High-Rise Apartment Cable Barriers",
      "Custom Spacing (2-inch & 3-inch gap options)"
    ],
    faqs: [
      {
        q: "What makes invisible grills different from traditional grills?",
        a: "Invisible grills use thin, high-tensile stainless steel cables spaced evenly. From a distance, they are almost invisible, leaving views open while preventing accidents."
      },
      {
        q: "Can invisible grills rust over time?",
        a: "They are manufactured with marine-grade stainless steel cables with transparent protective coating, designed to withstand rain and sunlight."
      }
    ],
    ctaText: "Inquire Invisible Grills"
  },
  {
    id: "bird-protection-nets",
    title: "Bird & Pigeon Protection Nets",
    shortDescription: "Humane and hygienic bird prevention netting for balconies, duct areas, and window ledges to keep spaces clean.",
    fullDescription: "Pigeons and birds frequently roost in apartment balconies and duct shafts, creating health hazards and fouling spaces. Our bird protection netting creates a physical barrier that prevents birds from entering or nesting without harming them.",
    image: "/images/projects/highrise-safety-net-protection.jpeg",
    features: [
      "Humane bird deterrence without injury",
      "Prevents droppings and nesting in balconies and utility ducts",
      "Weather-resistant and UV-treated mesh",
      "Neat, discreet installation with tight tensioning"
    ],
    varieties: [
      "Balcony Pigeon Netting",
      "AC Duct & Utility Shaft Netting",
      "Window & Ventilator Bird Nets",
      "Building Elevation Netting"
    ],
    faqs: [
      {
        q: "Will pigeons be able to cut through the netting?",
        a: "No, the durable nylon/copolymer mesh is tough, weather-resistant, and tightly knotted so birds cannot break through or squeeze past."
      },
      {
        q: "Can the nets be installed in narrow building duct areas?",
        a: "Yes, our team is equipped to install nets across deep duct shafts and plumbing areas in apartments."
      }
    ],
    ctaText: "Inquire Bird Protection Nets"
  },
  {
    id: "children-safety-nets",
    title: "Children Safety Nets",
    shortDescription: "Specialized safety net installations designed to prevent toddlers and young children from slipping through open balcony railings.",
    fullDescription: "Toddlers and energetic children are naturally curious, making open balcony railings and wide window gaps a serious concern for families living on higher floors. Our children safety net solutions reinforce railing gaps and balcony perimeters for peace of mind.",
    image: "/images/projects/safety-net-balcony-01.jpeg",
    features: [
      "Reinforced anchorage along lower and upper railings",
      "Dense mesh spacing to prevent climbing or squeezing through",
      "Smooth finish safe for children's hands",
      "Designed specifically for apartments and duplex stairs"
    ],
    varieties: [
      "Balcony Railing Child Safety Nets",
      "Staircase Gap & Banister Nets",
      "Window Opening Barriers",
      "Full Balcony Enclosure Nets"
    ],
    faqs: [
      {
        q: "Is the net strong enough if a child pushes against it?",
        a: "Yes, the net is anchored with heavy-duty fasteners into structural concrete or solid metal railings and tested for high impact resistance."
      }
    ],
    ctaText: "Inquire Children Safety Nets"
  },
  {
    id: "balcony-protection-solutions",
    title: "Balcony Protection Solutions",
    shortDescription: "Comprehensive safety net and grill combinations customized to your specific balcony architecture and residential preferences.",
    fullDescription: "Every balcony layout is distinct, from curved balconies and double-height ceilings to open corners. We evaluate your layout and offer suitable solutions combining netting or invisible grills to achieve both safety and aesthetic elegance.",
    image: "/images/projects/invisible-grill-sunset-view.jpeg",
    features: [
      "Site-specific measurement and planning",
      "Options for netting, invisible grills, or hybrid setups",
      "Clean aesthetic matching modern building designs",
      "Free quotation and consultation across Hyderabad"
    ],
    varieties: [
      "Curved Balcony Layouts",
      "Corner Balcony Protective Solutions",
      "High-Rise Penthouse Solutions",
      "Residential & Commercial Spaces"
    ],
    faqs: [
      {
        q: "How do I request a site inspection in Kukatpally or LB Nagar?",
        a: "You can click 'Request a Quote' or reach out via WhatsApp/Phone at 9704042577 to schedule a convenient inspection."
      }
    ],
    ctaText: "Get Balcony Protection Quote"
  }
];
