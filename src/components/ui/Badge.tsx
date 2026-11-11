import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sage' | 'oak' | 'walnut' | 'sand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sage',
  className = '',
}) => {
  const variantStyles = {
    sage: 'bg-sage/15 text-sage-dark border-sage/30',
    oak: 'bg-oak/15 text-oak-dark border-oak/30',
    walnut: 'bg-walnut/10 text-walnut border-walnut/20',
    sand: 'bg-sand text-charcoal border-sand-dark/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

