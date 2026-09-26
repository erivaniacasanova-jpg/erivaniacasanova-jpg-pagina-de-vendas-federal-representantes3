import { LucideIcon } from 'lucide-react';

export interface Plan {
  id: string;
  name: string;
  dataAmount: string;
  price: string;
  period: string;
  features: string[];
  isBestValue?: boolean;
  operator?: 'vivo' | 'tim' | 'claro' | 'multi';
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}