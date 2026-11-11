import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types';
import { cn } from '../../utils/cn';

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = items.length;
    if (total === 0) return;

    let nextIndex: number | null = null;
    if (e.key === 'ArrowDown') {
      nextIndex = (index + 1) % total;
    } else if (e.key === 'ArrowUp') {
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = total - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      buttonRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className={cn('space-y-4 max-w-3xl mx-auto', className)}>
      {items.map((item, idx) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              'border border-sand-dark/60 rounded-2xl bg-white/70 overflow-hidden transition-all duration-300 shadow-soft',
              isOpen && 'bg-white shadow-card border-oak/40'
            )}
          >
            <h3>
              <button
                ref={el => {
                  buttonRefs.current[idx] = el;
                }}
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-charcoal hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut transition-colors gap-4"
              >
                <span className="font-serif font-semibold text-lg sm:text-xl text-walnut pr-2">
                  <span className="text-oak/70 font-sans text-sm font-normal mr-3">
                    {(idx + 1).toString().padStart(2, '0')}.
                  </span>
                  {item.question}
                </span>
                <span
                  className={cn(
                    'w-8 h-8 rounded-full bg-sand/60 flex items-center justify-center shrink-0 transition-transform duration-300 text-walnut',
                    isOpen && 'rotate-180 bg-oak/20 text-walnut'
                  )}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 pt-1 text-charcoal-light leading-relaxed text-sm sm:text-base border-t border-sand-dark/30 mt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
