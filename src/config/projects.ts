/**
 * Genuine installation photographs supplied for ANL Safety Nets.
 * Note: hari_1_-_Copy_874b6f1b.jpeg is an exact duplicate of hari_1_874b6f1b.jpeg (excluded).
 * All 6 unique images showcase real installations in Hyderabad residential spaces.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: "Balcony Safety Nets" | "Invisible Grills" | "Bird Protection Nets" | "Balcony Protection";
  tag: string;
  description: string;
  image: string;
  alt: string;
  aspectRatio?: string;
}

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Balcony Safety Net Installation",
    category: "Balcony Safety Nets",
    tag: "Balcony Nets",
    description: "Durable square-mesh balcony safety net installed securely along the railing perimeter for residential fall protection.",
    image: "/images/projects/safety-net-balcony-01.jpeg",
    alt: "Balcony safety net installation with high tensile white mesh netting secured to balcony railings",
    aspectRatio: "3/4"
  },
  {
    id: "proj-2",
    title: "High-Rise Balcony Invisible Grill",
    category: "Invisible Grills",
    tag: "Invisible Grills",
    description: "Vertical high-tensile stainless steel invisible grill wires ensuring unhindered panoramic views with dependable safety.",
    image: "/images/projects/invisible-grill-balcony-01.jpeg",
    alt: "Vertical invisible grill cables installed on modern high-rise apartment balcony railing overlooking twilight sky",
    aspectRatio: "9/16"
  },
  {
    id: "proj-3",
    title: "Residential Balcony Invisible Grill",
    category: "Invisible Grills",
    tag: "Invisible Grills",
    description: "Sleek vertical invisible grill installation providing an unobtrusive barrier for balcony window openings.",
    image: "/images/projects/invisible-grill-residential-02.jpeg",
    alt: "Resident standing inside apartment behind installed vertical invisible grill wires on balcony",
    aspectRatio: "16/9"
  },
  {
    id: "proj-4",
    title: "Curved Balcony Safety & Bird Net",
    category: "Bird Protection Nets",
    tag: "Bird Protection",
    description: "Full-height balcony protection netting preventing pigeon entry while maintaining airflow and clear city view.",
    image: "/images/projects/balcony-safety-net-city-view.jpeg",
    alt: "Curved apartment balcony fully enclosed with white safety net mesh overlooking urban buildings",
    aspectRatio: "16/9"
  },
  {
    id: "proj-5",
    title: "Apartment Balcony Invisible Grill",
    category: "Invisible Grills",
    tag: "Invisible Grills",
    description: "Modern invisible grill cables installed from railing to ceiling for unobstructed scenic views without sacrificing balcony security.",
    image: "/images/projects/invisible-grill-sunset-view.jpeg",
    alt: "Invisible grill vertical cables on balcony overlooking green fields and apartment community at sunset",
    aspectRatio: "16/9"
  },
  {
    id: "proj-6",
    title: "High-Rise Apartment Balcony Netting",
    category: "Balcony Protection",
    tag: "Balcony Protection",
    description: "Comprehensive protective netting installed across multi-story apartment balcony opening overlooking residential towers.",
    image: "/images/projects/highrise-safety-net-protection.jpeg",
    alt: "White safety net mesh covering high-rise apartment balcony facing opposite residential towers",
    aspectRatio: "4/3"
  }
];

export const HERO_CAROUSEL_IMAGES = [
  {
    image: "/images/projects/invisible-grill-balcony-01.jpeg",
    title: "Invisible Grills",
    caption: "Modern high-tensile stainless steel invisible grills preserving open balcony views"
  },
  {
    image: "/images/projects/balcony-safety-net-city-view.jpeg",
    title: "Balcony Safety Nets",
    caption: "Reliable balcony safety netting and pigeon protection for residential apartments"
  },
  {
    image: "/images/projects/invisible-grill-sunset-view.jpeg",
    title: "Balcony Protection Solutions",
    caption: "Clean, professional barrier installations tailored to balcony dimensions"
  },
  {
    image: "/images/projects/safety-net-balcony-01.jpeg",
    title: "Mesh Safety Netting",
    caption: "Square-mesh protective netting secured to balcony railings"
  }
];
