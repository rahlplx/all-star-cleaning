// Core Domain Types — All Star Cleaning — Astro v6

export interface Service {
  slug: string;
  name: string;
  frSlug: string;
  frName: string;
  description: string;
  frDescription: string;
  icon: string;
  features: string[];
  frFeatures: string[];
  metaTitle: string;
  metaDescription: string;
  frMetaTitle: string;
  frMetaDescription: string;
  cta: string;
  frCta: string;
  faqs: FAQItem[];
}

export interface Location {
  slug: string;
  name: string;
  frName: string;
  area: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
  neighbours: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  service: string;
  location: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  frRole: string;
  image: string;
  bio: string;
  frBio: string;
}

export interface SiteSettings {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  frAddress: string;
  googleMapsUrl: string;
  socialLinks: { facebook: string; instagram: string; tiktok: string; google: string };
}

export interface NavItem {
  label: string;
  frLabel: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  frLabel: string;
  href: string;
}

export interface FAQItem {
  question: string;
  frQuestion: string;
  answer: string;
  frAnswer: string;
}
