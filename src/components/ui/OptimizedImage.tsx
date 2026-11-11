import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '21/9' | 'auto';
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

const aspectMap = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
  '21/9': 'aspect-[21/9]',
  auto: '',
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  className = '',
  containerClassName = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive srcSet for Unsplash images if applicable
  const isUnsplash = src.includes('unsplash.com');
  let srcSet: string | undefined = undefined;

  if (isUnsplash) {
    const baseUrl = src.split('?')[0];
    srcSet = [
      `${baseUrl}?auto=format&fit=crop&w=480&q=75 480w`,
      `${baseUrl}?auto=format&fit=crop&w=800&q=75 800w`,
      `${baseUrl}?auto=format&fit=crop&w=1200&q=75 1200w`,
      `${baseUrl}?auto=format&fit=crop&w=1600&q=75 1600w`,
    ].join(', ');
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-sand/60 transition-colors',
        aspectRatio !== 'auto' && aspectMap[aspectRatio],
        containerClassName
      )}
    >
      {/* Blurred tone placeholder */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-sand-dark/30 backdrop-blur-[2px] transition-opacity duration-500 ease-out',
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}
      />

      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'w-full h-full object-cover transition-all duration-700 ease-out',
          isLoaded ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-[1.03] blur-sm',
          className
        )}
        {...props}
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-sand text-charcoal-muted text-xs p-2 text-center">
          Image preview unavailable
        </div>
      )}
    </div>
  );
};

