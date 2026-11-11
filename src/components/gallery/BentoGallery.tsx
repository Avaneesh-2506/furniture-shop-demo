import React, { useState, useMemo, Suspense, lazy } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { galleryItems } from '../../data';
import { GalleryCategory, GalleryItem } from '../../types';
import { OptimizedImage } from '../ui/OptimizedImage';
import { cn } from '../../utils/cn';

const LightboxModal = lazy(() =>
  import('./LightboxModal').then(module => ({ default: module.LightboxModal }))
);

const categories: { label: string; value: GalleryCategory }[] = [
  { label: 'All Works', value: 'all' },
  { label: 'Living', value: 'living' },
  { label: 'Bedroom', value: 'bedroom' },
  { label: 'Dining', value: 'dining' },
  { label: 'Office', value: 'office' },
];

export const BentoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div id="gallery" className="w-full">
      {/* Category Filter Chips (Animated with CSS only) */}
      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12"
      >
        {categories.map(cat => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                'relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut border touch-target',
                isActive
                  ? 'bg-walnut text-cream border-walnut shadow-soft scale-[1.03]'
                  : 'bg-white/70 text-charcoal border-sand-dark hover:bg-sand hover:text-walnut'
              )}
            >
              <span>{cat.label}</span>
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-oak rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Bento Grid: 1 col on small phones, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
        {filteredItems.map((item: GalleryItem, index: number) => {
          const span = activeCategory === 'all' ? item.spanClass : 'col-span-1 row-span-1';

          return (
            <div
              key={`${activeCategory}-${item.id}`}
              onClick={() => handleOpenLightbox(index)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} in lightbox`}
              className={cn(
                'group relative rounded-2xl overflow-hidden cursor-pointer bg-sand/60 border border-sand-dark/60 shadow-soft hover:shadow-card transition-all duration-500 animate-fadeIn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut',
                span
              )}
            >
              <OptimizedImage
                src={item.image}
                alt={item.alt}
                aspectRatio="auto"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Hover / Tap Overlay (visible at bottom on mobile touchscreens, hover reveal on desktop) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-oak-light">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-semibold text-lg text-cream leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <span className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream shrink-0 group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="hidden md:block absolute top-3 left-3 bg-cream/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-walnut opacity-90 group-hover:opacity-0 transition-opacity pointer-events-none"
              >
                {item.category}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white/60 rounded-3xl border border-sand-dark">
          <Sparkles className="w-8 h-8 text-oak mx-auto mb-2 opacity-50" />
          <p className="text-charcoal-muted font-medium">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Lazy-loaded Accessible Lightbox Modal */}
      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <LightboxModal
            items={filteredItems}
            currentIndex={lightboxIndex}
            onClose={handleCloseLightbox}
            onNavigate={index => setLightboxIndex(index)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default BentoGallery;
