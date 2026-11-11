import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * High-performance hook for detecting when an element enters viewport
 * using IntersectionObserver. Respects prefers-reduced-motion.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    // If user prefers reduced motion, bypass scroll animation immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback if browser lacks IntersectionObserver
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

