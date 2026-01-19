import React from 'react';

export interface HeroData {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  logoColor?: string;
  logoText?: string;
  textColor?: string;
  logo?: string; // Logo image path
  duration: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface ContactData {
  email: string;
  phone: string;
  formSparkId?: string; // FormSpark form ID
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  backgroundColor: string; // Tailwind class for background color
  iconColor?: string; // Tailwind class for icon color (defaults to white)
}

export interface AppData {
  hero: HeroData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  interests: string[];
  testimonials: TestimonialItem[];
  contact: ContactData;
  social: SocialLink[];
}
