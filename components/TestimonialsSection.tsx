import React from 'react';
import { VideoTestimonialsCarousel } from './VideoTestimonialsCarousel';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <VideoTestimonialsCarousel />
      </div>
    </section>
  );
};
