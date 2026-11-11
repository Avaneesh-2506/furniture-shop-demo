import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';
import { useScrollLock } from '../../hooks/useScrollLock';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Touch tracking for swipe gestures
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useScrollLock(isOpen);

  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  // Preload neighbouring images (previous and next only)
  useEffect(() => {
    if (currentIndex === null || items.length <= 1) return;

    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;

    const imgNext = new Image();
    imgNext.src = items[nextIndex].image;

    const imgPrev = new Image();
    imgPrev.src = items[prevIndex].image;
  }, [currentIndex, items]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    // Set initial focus
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Tab' && modalRef.current) {
        // Focus trap
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image gallery preview: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/90 backdrop-blur-md animate-fadeIn"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header / Actions */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-10">
        <span className="text-cream/80 text-xs sm:text-sm font-medium bg-walnut/60 px-3 py-1.5 rounded-full border border-sand/20">
          {(currentIndex ?? 0) + 1} / {items.length}
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image lightbox (Escape)"
          className="p-2 sm:p-2.5 rounded-full bg-cream/15 text-cream hover:bg-cream/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream touch-target"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous image (Left Arrow)"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-cream/15 text-cream hover:bg-cream/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream z-10 touch-target"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next image (Right Arrow)"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-cream/15 text-cream hover:bg-cream/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream z-10 touch-target"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-charcoal-dark flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="inline-block text-[11px] uppercase tracking-widest text-oak-light font-semibold mb-1">
            {currentItem.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-cream font-medium">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-sand/80 mt-1 line-clamp-2">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

