import React, { Suspense, lazy } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../components/layout/PageLayout';
import { HeroBanner } from '../components/home/HeroBanner';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { CtaStrip } from '../components/home/CtaStrip';
import { SectionHeading } from '../components/ui/SectionHeading';

const BentoGallery = lazy(() =>
  import('../components/gallery/BentoGallery').then(module => ({ default: module.BentoGallery }))
);

const GallerySkeleton: React.FC = () => (
  <div
    aria-label="Loading portfolio gallery"
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]"
  >
    <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl bg-sand/50 animate-pulse" />
    <div className="rounded-2xl bg-sand/50 animate-pulse" />
    <div className="rounded-2xl bg-sand/50 animate-pulse" />
    <div className="rounded-2xl bg-sand/50 animate-pulse" />
    <div className="rounded-2xl bg-sand/50 animate-pulse" />
  </div>
);

const Home: React.FC = () => {
  useDocumentMeta({
    title: 'WoodCraft Furniture | Handcrafted Artisan Furniture & Bespoke Interiors',
    description:
      'Discover heirloom-grade solid wood dining suites, modular kitchens, custom bedroom suites, and architectural woodwork sustainably crafted in Portland, OR.',
  });

  return (
    <PageLayout>
      {/* 1. Hero banner */}
      <HeroBanner />

      {/* 2. Featured categories */}
      <FeaturedCategories />

      {/* 3. Services gallery (Lazy-loaded Bento-grid gallery) */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Portfolio"
            title="A Living Gallery of Recent Commissions"
            subtitle="Explore our 2026 bento curation of private residences, executive libraries, and architectural woodwork."
            align="center"
          />
          <Suspense fallback={<GallerySkeleton />}>
            <BentoGallery />
          </Suspense>
        </div>
      </section>

      {/* 4. Why choose us */}
      <WhyChooseUs />

      {/* 5. Testimonials (CSS scroll-snap carousel) */}
      <TestimonialsCarousel />

      {/* 6. Final CTA strip */}
      <CtaStrip />
    </PageLayout>
  );
};

export default Home;
