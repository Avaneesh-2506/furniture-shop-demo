import { useEffect } from 'react';

/**
 * Locks background document scrolling when a modal, drawer, or lightbox is open.
 * Restores original overflow behavior when unmounted or deactivated.
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Compensate for scrollbar width to prevent page content shift
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
}

