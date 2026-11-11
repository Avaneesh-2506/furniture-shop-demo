import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { Badge } from '../components/ui/Badge';
import { services, processSteps, faqs } from '../data';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { CtaStrip } from '../components/home/CtaStrip';

const Services: React.FC = () => {
  useDocumentMeta({
    title: 'Bespoke Services & Architectural Woodworking',
    description:
      'Explore our woodworking services: custom solid wood furniture, residential architectural interiors, modular kitchens, French polishing, and white-glove installation.',
  });

  return (
    <PageLayout>
      {/* Compact Hero Banner */}
      <section className="pt-12 pb-16 sm:pb-20 bg-sand/30 border-b border-sand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-oak block mb-3">
            Artisan Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-walnut max-w-4xl mx-auto leading-tight">
            Tailored Woodworking Services from Concept to Installation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            From single statement pieces to full architectural millwork, we manage timber selection, 3D prototyping, hand joinery, and perfectionist fitting.
          </p>
        </div>
      </section>

      {/* 6 Services Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Specialties"
            title="Six Dedicated Areas of Craftsmanship"
            subtitle="Explore each service line tailored to private residences, interior architects, and corporate executives."
            align="center"
          />

          <div className="space-y-16 sm:space-y-24">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-sand group">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        aspectRatio="16/9"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {service.badge && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="oak" className="bg-white/90 shadow-soft">
                            {service.badge}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl font-bold text-oak">
                        0{idx + 1}
                      </span>
                      <span className="h-0.5 w-8 bg-sand-dark" />
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-muted">
                        <Clock className="w-3.5 h-3.5 text-oak" />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-walnut leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-charcoal-light leading-relaxed text-sm sm:text-base">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                        Included In Every Commission:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal-light">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* "How It Works" 4-Step Process */}
      <section className="py-16 sm:py-24 bg-sand/40 border-t border-sand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The Commission Journey"
            title="How We Bring Your Vision to Life"
            subtitle="From the preliminary design consultation to white-glove placement, our 4-step process ensures transparency and perfection."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map(step => (
              <div
                key={step.step}
                className="bg-white p-8 rounded-3xl border border-sand-dark/60 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-oak mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-walnut mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-dark/30 text-[11px] text-charcoal-muted leading-tight">
                  <span className="font-medium text-walnut block mb-0.5">Focus:</span>
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Frequently Asked Questions"
            title="Common Inquiries About Commissioning"
            subtitle="Have questions about wood species, lead times, or custom measurements? Find quick answers below."
            align="center"
          />

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Final CTA Strip */}
      <CtaStrip />
    </PageLayout>
  );
};

export default Services;

