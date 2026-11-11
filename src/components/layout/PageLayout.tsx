import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

