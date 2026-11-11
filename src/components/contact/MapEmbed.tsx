import React from 'react';
import { siteConfig } from '../../data';
import { MapPin, ExternalLink } from 'lucide-react';

export const MapEmbed: React.FC = () => {
  return (
    <div className="bg-white/80 p-4 sm:p-6 rounded-3xl border border-sand-dark/60 shadow-soft">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-oak" />
          <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
            Workshop Map
          </span>
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-walnut hover:text-oak font-medium inline-flex items-center gap-1 transition-colors"
        >
          <span>Open Full Map</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-sand-dark/50 bg-sand relative shadow-inner">
        <iframe
          src={siteConfig.mapEmbedUrl}
          title="WoodCraft Furniture Workshop & Showroom Map Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[25%] contrast-[1.05]"
        />
      </div>
    </div>
  );
};

