import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
  className = '',
}) => {
  const isSuccess = type === 'success';

  return (
    <div
      role={isSuccess ? 'status' : 'alert'}
      aria-live="polite"
      className={cn(
        'flex items-start gap-3 p-4 rounded-2xl border text-sm shadow-soft transition-all duration-300',
        isSuccess
          ? 'bg-sage/10 border-sage/40 text-sage-dark'
          : 'bg-red-50/90 border-red-200 text-red-800',
        className
      )}
    >
      <span className="shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-sage-dark" aria-hidden="true" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-600" aria-hidden="true" />
        )}
      </span>

      <div className="flex-1 font-medium leading-relaxed">{message}</div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="shrink-0 p-1 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

