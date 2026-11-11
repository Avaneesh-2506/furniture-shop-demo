import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../../data';
import { Button } from '../ui/Button';

export const CtaStrip: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-walnut text-cream p-8 sm:p-14 lg:p-16 shadow-card">
          {/* Subtle architectural grain lines background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-oak-light mb-4">
              Begin Your Commission
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream leading-tight">
              Ready to Shape Something Enduring for Your Home?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-sand/90 leading-relaxed font-normal">
              Whether you possess full architectural blueprints or a simple sketch on a napkin, our artisans are ready to bring your vision into solid hardwood reality.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-cream text-walnut hover:bg-sand border-none shadow-card"
              >
                Book a Free Consultation
              </Button>

              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-walnut-dark/60 hover:bg-walnut-dark text-cream border border-sand/20 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream touch-target"
              >
                <Phone className="w-4 h-4 text-oak-light" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-sand/20 flex flex-wrap items-center gap-6 text-xs text-sand/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>Complimentary 3D Renderings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>Regional Timber Samples Shipped Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>10-Year Structural Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

