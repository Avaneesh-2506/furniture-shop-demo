import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll to top whenever the router pathname changes,
 * or waits briefly for lazy-loaded hash anchor targets before scrolling smoothly.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      return;
    }

    let attempts = 0;
    const maxAttempts = 20;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const tryScrollToHash = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        timerId = setTimeout(tryScrollToHash, 50);
      }
    };

    tryScrollToHash();

    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [pathname, hash]);

  return null;
};
