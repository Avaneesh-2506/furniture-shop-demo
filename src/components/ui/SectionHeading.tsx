import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleAs: TitleTag = 'h2',
}) => {
  return (
    <div
      className={cn(
        'max-w-2xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {kicker && (
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-oak mb-3">
          {kicker}
        </span>
      )}
      <TitleTag className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-semibold text-walnut leading-tight tracking-tight">
        {title}
      </TitleTag>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-light leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

