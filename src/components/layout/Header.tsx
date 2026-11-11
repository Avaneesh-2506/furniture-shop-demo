import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { navLinks, siteConfig } from '../../data';
import { MobileDrawer } from './MobileDrawer';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Transparent over top of page, solid sand/cream background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full transition-all duration-300',
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft border-b border-sand-dark/50 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut rounded-xl p-1"
              aria-label={`${siteConfig.brandName} - Return to Homepage`}
            >
              {/* Text-based SVG logo mark */}
              <div className="w-10 h-10 rounded-xl bg-walnut text-cream flex items-center justify-center shadow-soft group-hover:bg-walnut-hover transition-colors">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    d="M12 14C12 12.8954 12.8954 12 14 12H26C27.1046 12 28 12.8954 28 14V22H12V14Z"
                    fill="#FAF7F2"
                  />
                  <rect x="10" y="22" width="20" height="4" rx="2" fill="#B98B5E" />
                  <path
                    d="M13 26L11 31"
                    stroke="#FAF7F2"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 26L29 31"
                    stroke="#FAF7F2"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl sm:text-2xl text-walnut tracking-tight leading-none">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-oak mt-1 leading-none">
                  Artisan Woodwork
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2 bg-sand/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sand-dark/60 shadow-soft"
              aria-label="Main Navigation"
            >
              {navLinks.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut',
                      isActive
                        ? 'bg-cream text-walnut font-semibold shadow-soft'
                        : 'text-charcoal-light hover:text-walnut hover:bg-cream/50'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-walnut text-cream hover:bg-walnut-hover font-medium text-sm transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut focus-visible:ring-offset-2 touch-target"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open mobile navigation menu"
                className="p-2.5 rounded-2xl bg-sand text-walnut hover:bg-sand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut touch-target"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

