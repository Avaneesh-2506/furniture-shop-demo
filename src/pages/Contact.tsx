import React, { Suspense, lazy } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../components/layout/PageLayout';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfoCards } from '../components/contact/ContactInfoCards';

const MapEmbed = lazy(() =>
  import('../components/contact/MapEmbed').then(module => ({ default: module.MapEmbed }))
);

const MapSkeleton: React.FC = () => (
  <div
    aria-label="Loading map"
    className="bg-white/80 p-4 sm:p-6 rounded-3xl border border-sand-dark/60 shadow-soft"
  >
    <div className="w-full h-64 sm:h-80 rounded-2xl bg-sand/60 animate-pulse" />
  </div>
);

const Contact: React.FC = () => {
  useDocumentMeta({
    title: 'Contact Our Design Desk & Workshop',
    description:
      'Schedule a bespoke furniture design consultation, request wood sample swatches, or visit our Portland artisan workshop.',
  });

  return (
    <PageLayout>
      {/* Compact Hero Banner */}
      <section className="pt-12 pb-16 sm:pb-20 bg-sand/30 border-b border-sand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-oak block mb-3">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-walnut max-w-4xl mx-auto leading-tight">
            Let's Discuss Your Custom Woodwork Commission
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Reach out to discuss custom dining suites, full-home built-ins, or workshop visits. We provide complimentary estimates and timber sample swatches.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Info Cards + Lazy-loaded Map Embed */}
            <div className="lg:col-span-5 space-y-8">
              <ContactInfoCards />
              <Suspense fallback={<MapSkeleton />}>
                <MapEmbed />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
