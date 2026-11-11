import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, siteConfig } from '../../data';
import { useScrollLock } from '../../hooks/useScrollLock';
import { cn } from '../../utils/cn';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll when open
  useScrollLock(isOpen);

  // Esc key listener and focus management
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-cream border-l border-sand-dark/60 shadow-dropdown p-6 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div>
          {/* Top bar with close button */}
          <div className="flex items-center justify-between pb-6 border-b border-sand-dark/60">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-walnut flex items-center justify-center text-cream">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4 6h16M4 12h16M7 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-serif font-semibold text-lg text-walnut">
                {siteConfig.brandName}
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-xl text-charcoal hover:bg-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut touch-target"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map(link => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-2xl font-medium text-lg transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-sand text-walnut font-semibold shadow-soft'
                      : 'text-charcoal-light hover:bg-sand/60 hover:text-walnut'
                  )
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Contact info */}
        <div className="pt-6 border-t border-sand-dark/60 space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-2xl bg-walnut text-cream hover:bg-walnut-hover font-medium text-center flex items-center justify-center gap-2 shadow-soft"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-2 text-xs text-charcoal-muted pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-oak shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-oak shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-oak shrink-0" />
              <span className="truncate">{siteConfig.address.full}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

