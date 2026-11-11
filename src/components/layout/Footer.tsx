import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';
import {
  siteConfig,
  footerQuickLinks,
  footerServiceLinks,
} from '../../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand border-t border-sand-dark/60 text-charcoal pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-sand-dark/60">
          {/* Brand Blurb (Col 1 - 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut rounded-xl p-0.5 inline-flex"
            >
              <div className="w-9 h-9 rounded-xl bg-walnut text-cream flex items-center justify-center shadow-soft">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
              <span className="font-serif font-bold text-2xl text-walnut">
                {siteConfig.brandName}
              </span>
            </Link>

            <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-oak block mb-3">
                Connect With Our Studio
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WoodCraft on Instagram"
                  className="w-10 h-10 rounded-xl bg-cream border border-sand-dark flex items-center justify-center text-charcoal-light hover:text-walnut hover:border-oak transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WoodCraft on Facebook"
                  className="w-10 h-10 rounded-xl bg-cream border border-sand-dark flex items-center justify-center text-charcoal-light hover:text-walnut hover:border-oak transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WoodCraft on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-cream border border-sand-dark flex items-center justify-center text-charcoal-light hover:text-walnut hover:border-oak transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5 - 7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-semibold text-lg text-walnut">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-light hover:text-walnut transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-walnut rounded py-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Col 7 - 9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-semibold text-lg text-walnut">
              Craft & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerServiceLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-light hover:text-walnut transition-colors inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-walnut rounded py-0.5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-oak" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (Col 10 - 12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-semibold text-lg text-walnut">
              Workshop & Studio
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-oak shrink-0 mt-1" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-oak shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-walnut transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-oak shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-walnut transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-sand-dark/50">
                <Clock className="w-4 h-4 text-oak shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div>{siteConfig.workingHours.weekdays}</div>
                  <div>{siteConfig.workingHours.saturday}</div>
                  <div className="text-charcoal-muted">
                    {siteConfig.workingHours.sunday}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-4">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Handcrafted with pride.
          </p>
          <div className="flex items-center gap-6">
            <span>Sustainable Forestry Certified</span>
            <span>&bull;</span>
            <span>Appalachian Hardwood verified</span>
            <span>&bull;</span>
            <span>FSC Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

