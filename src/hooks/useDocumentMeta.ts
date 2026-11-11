import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description?: string;
}

/**
 * Lightweight hook to update document title and meta description
 * dynamically without requiring heavy external SEO dependencies.
 */
export function useDocumentMeta({ title, description }: MetaOptions): void {
  useEffect(() => {
    const previousTitle = document.title;
    const formattedTitle = title.includes('WoodCraft Furniture')
      ? title
      : `${title} | WoodCraft Furniture`;

    document.title = formattedTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc ? metaDesc.getAttribute('content') : null;

    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Also update og:title and og:description if present
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc) {
        metaDesc.setAttribute('content', previousDesc);
      }
    };
  }, [title, description]);
}

