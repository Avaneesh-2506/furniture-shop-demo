import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data';

export const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Primary Workshop Card */}
      <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-sand-dark/60 shadow-soft space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-oak">
            Direct Studio Contact
          </span>
          <h3 className="font-serif text-2xl font-semibold text-walnut mt-1">
            Portland Workshop & Showroom
          </h3>
          <p className="text-sm text-charcoal-light mt-1">
            Visitors are warmly welcome by appointment to tour timber stacks, inspect grain patterns, and discuss bespoke commissions.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-sand flex items-center justify-center text-walnut shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-oak" />
            </div>
            <div>
              <span className="font-semibold text-charcoal block">Location</span>
              <p className="text-charcoal-light leading-relaxed">{siteConfig.address.full}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-sand flex items-center justify-center text-walnut shrink-0 mt-0.5">
              <Phone className="w-5 h-5 text-oak" />
            </div>
            <div>
              <span className="font-semibold text-charcoal block">Phone</span>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                className="text-walnut hover:text-oak transition-colors font-medium"
              >
                {siteConfig.phone}
              </a>
              <span className="text-xs text-charcoal-muted block">Direct line to design desk</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-sand flex items-center justify-center text-walnut shrink-0 mt-0.5">
              <Mail className="w-5 h-5 text-oak" />
            </div>
            <div>
              <span className="font-semibold text-charcoal block">Email</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-walnut hover:text-oak transition-colors font-medium"
              >
                {siteConfig.email}
              </a>
              <span className="text-xs text-charcoal-muted block">24-hour response guarantee</span>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3.5 pt-2 border-t border-sand-dark/40">
            <div className="w-10 h-10 rounded-2xl bg-sand flex items-center justify-center text-walnut shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-oak" />
            </div>
            <div>
              <span className="font-semibold text-charcoal block">Workshop Hours</span>
              <div className="text-xs text-charcoal-light space-y-0.5 mt-0.5">
                <p>{siteConfig.workingHours.weekdays}</p>
                <p>{siteConfig.workingHours.saturday}</p>
                <p className="text-charcoal-muted">{siteConfig.workingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Guarantee Callout Card */}
      <div className="bg-sand/60 p-6 rounded-3xl border border-sand-dark/60 flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-sage/20 text-sage-dark flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif font-semibold text-walnut text-base">
            Consultation Commitment
          </h4>
          <p className="text-xs text-charcoal-light leading-relaxed mt-1">
            Every inquiry includes a complimentary 30-minute virtual or in-person spatial review with our lead architect, complete with material estimates.
          </p>
        </div>
      </div>
    </div>
  );
};

