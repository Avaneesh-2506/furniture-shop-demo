import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Lazy-loaded route components for high performance and optimal code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Calm, aesthetic loading fallback matching brand palette
 */
const PageLoader: React.FC = () => (
  <div
    role="status"
    aria-label="Loading page content"
    className="min-h-screen flex items-center justify-center bg-cream"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-sand border border-sand-dark flex items-center justify-center shadow-soft animate-pulse">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-walnut"
          aria-hidden="true"
        >
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H26C27.1046 12 28 12.8954 28 14V22H12V14Z"
            fill="#5B3A29"
          />
          <rect x="10" y="22" width="20" height="4" rx="2" fill="#B98B5E" />
        </svg>
      </div>
      <span className="text-xs uppercase tracking-widest font-semibold text-oak">
        WoodCraft Studio
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

