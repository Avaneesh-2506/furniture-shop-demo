import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { trustStats } from '../../data';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 sm:pb-24 lg:pt-10 lg:pb-32 overflow-hidden">
      {/* Decorative subtle background aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sand/50 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, subtext, CTAs, trust stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/80 border border-sand-dark text-walnut text-xs font-medium shadow-soft">
              <Sparkles className="w-3.5 h-3.5 text-oak shrink-0" />
              <span>Slow, Generational Craftsmanship &bull; Est. 1998</span>
            </div>

            {/* H1 - Exactly one per page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-walnut tracking-tight leading-[1.12]">
              Timeless Solid Wood Furniture Crafted for Mindful Living
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-2xl font-normal">
              We design and hand-chisel bespoke hardwood dining tables, architectural millwork, and heirloom suites. Built with zero shortcuts using certified sustainable lumber.
            </p>

            {/* 2 CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-card"
              >
                Explore Bespoke Services
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="lg"
              >
                Request a Custom Quote
              </Button>
            </div>

            {/* Trust Stats Bar */}
            <div className="pt-8 sm:pt-10 border-t border-sand-dark/60 grid grid-cols-3 gap-4 sm:gap-8">
              {trustStats.map(stat => (
                <div key={stat.id} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-walnut">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-charcoal">
                    {stat.label}
                  </div>
                  <p className="text-[11px] text-charcoal-muted hidden sm:block leading-tight">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Optimized LCP Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-sand">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="WoodCraft Furniture artisan living space featuring handcrafted walnut furniture"
                aspectRatio="4/3"
                priority={true}
                containerClassName="w-full h-full min-h-[360px] sm:min-h-[460px]"
                className="w-full h-full object-cover scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating artisan certification tag */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-cream/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-sand-dark max-w-[260px] text-xs">
                <div className="flex items-center gap-2 text-walnut font-serif font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sage-dark shrink-0" />
                  <span>100% Solid Timber</span>
                </div>
                <p className="text-charcoal-muted mt-1 leading-snug">
                  No engineered particle board. Pure kiln-dried walnut and white oak.
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-3xl border border-oak/20 -z-10 translate-x-2 translate-y-2 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

