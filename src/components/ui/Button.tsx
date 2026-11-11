import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 min-h-[38px] min-w-[38px] gap-1.5',
    md: 'text-sm px-6 py-3 min-h-[44px] min-w-[44px] gap-2', // meets touch target >= 44px
    lg: 'text-base px-8 py-3.5 min-h-[48px] min-w-[48px] gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-walnut text-cream hover:bg-walnut-hover shadow-soft hover:shadow-card hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-sand text-walnut hover:bg-sand-dark border border-sand-dark/60 shadow-soft hover:shadow-card',
    outline:
      'bg-transparent border border-walnut/30 text-walnut hover:bg-walnut hover:text-cream hover:border-walnut',
    ghost:
      'bg-transparent text-charcoal hover:bg-sand/60 hover:text-walnut',
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

