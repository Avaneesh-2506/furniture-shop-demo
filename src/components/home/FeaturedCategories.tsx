import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data';
import { SectionHeading } from '../ui/SectionHeading';
import { OptimizedImage } from '../ui/OptimizedImage';

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-sand/40 border-y border-sand-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Curated Living Spaces"
          title="Explore Our Core Collections"
          subtitle="From sculpted solid walnut dining tables to whisper-quiet acoustic storage credenzas, explore pieces made to elevate your rituals."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              to={category.href}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-dark/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
            >
              {/* Category Image */}
              <div className="overflow-hidden relative">
                <OptimizedImage
                  src={category.image}
                  alt={category.name}
                  aspectRatio="16/9"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm text-walnut text-xs font-medium px-3 py-1 rounded-full shadow-soft border border-sand-dark/60">
                  {category.itemCount} Designs
                </span>
              </div>

              {/* Category Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-walnut group-hover:text-oak transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-charcoal-light mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-dark/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-walnut group-hover:text-oak transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

