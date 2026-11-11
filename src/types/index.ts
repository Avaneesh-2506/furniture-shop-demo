export interface NavLinkItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    instagram: string;
    pinterest: string;
    facebook: string;
    linkedin: string;
  };
  mapEmbedUrl: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  timeline: string;
  badge?: string;
}

export type GalleryCategory = 'all' | 'living' | 'bedroom' | 'dining' | 'office';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'living' | 'bedroom' | 'dining' | 'office';
  image: string;
  alt: string;
  spanClass: string;
  aspectRatio: '16/9' | '4/3' | '1/1' | '3/4' | '9/16';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  project: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  experienceYears: number;
  specialty: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustStat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface WorkshopStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

export interface WhyChooseUsCard {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'TreePine' | 'Clock';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface ContactFormData {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

