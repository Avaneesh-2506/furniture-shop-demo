import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Automatically injects <link rel="preload"> for the primary latin woff2 font files
 * emitted during production builds so text renders without FOIT/FOUT delay.
 */
function preloadPrimaryFonts(): Plugin {
  return {
    name: 'preload-primary-fonts',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;

        const preloadTags: string[] = [];
        for (const fileName of Object.keys(ctx.bundle)) {
          if (
            fileName.endsWith('.woff2') &&
            (fileName.includes('inter-latin-400-normal') ||
              fileName.includes('playfair-display-latin-600-normal'))
          ) {
            preloadTags.push(
              `    <link rel="preload" href="/${fileName}" as="font" type="font/woff2" crossorigin />`
            );
          }
        }

        if (preloadTags.length === 0) return html;
        return html.replace('</head>', `${preloadTags.join('\n')}\n  </head>`);
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preloadPrimaryFonts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
