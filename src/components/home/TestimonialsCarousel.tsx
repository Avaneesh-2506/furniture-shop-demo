import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data';
import { SectionHeading } from '../ui/SectionHeading';
import { OptimizedImage } from '../ui/OptimizedImage';
import { cn } from '../../utils/cn';

export const TestimonialsCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>('[data-carousel-item]');
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % testimonials.length;
    scrollToIndex(nextIdx);
  };

  // Sync active dot on native scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const items = container.querySelectorAll<HTMLElement>('[data-carousel-item]');
      const containerLeft = container.getBoundingClientRect().left;

      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((item, idx) => {
        const itemLeft = item.getBoundingClientRect().left;
        const distance = Math.abs(itemLeft - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-sand/40 border-t border-sand-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            kicker="Voices of Ownership"
            title="Stories from Homes We Have Touched"
            subtitle="Read experiences from homeowners, architects, and designers living with WoodCraft creations."
            align="left"
            className="mb-0 max-w-xl"
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-cream border border-sand-dark text-walnut hover:bg-white hover:border-oak transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut touch-target shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-cream border border-sand-dark text-walnut hover:bg-white hover:border-oak transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut touch-target shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Snap Carousel Track */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollSnapType: 'x mandatory' }}
          role="region"
          aria-label="Client Testimonials Carousel"
        >
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              data-carousel-item
              className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[460px] bg-white rounded-3xl p-6 sm:p-8 border border-sand-dark/60 shadow-soft flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-oak">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-sand-dark/80" />
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-charcoal leading-relaxed font-normal italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Project info */}
              <div className="mt-8 pt-6 border-t border-sand-dark/50 flex items-center gap-4">
                <OptimizedImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  aspectRatio="1/1"
                  containerClassName="w-12 h-12 rounded-full border border-sand-dark shrink-0"
                  className="w-full h-full object-cover rounded-full"
                  sizes="48px"
                />

                <div className="overflow-hidden">
                  <h4 className="font-serif font-semibold text-walnut text-base leading-tight truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 truncate">
                    {testimonial.role} &bull; {testimonial.location}
                  </p>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-oak block mt-1 truncate">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut',
                activeIndex === idx ? 'w-8 bg-walnut' : 'w-2 bg-sand-dark hover:bg-oak'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

