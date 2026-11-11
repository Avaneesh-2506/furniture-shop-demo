import React from 'react';
import { Home, Compass } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';

const NotFound: React.FC = () => {
  useDocumentMeta({
    title: '404 - Page Not Found',
    description: 'The requested furniture collection or page could not be located.',
  });

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-sand border border-sand-dark flex items-center justify-center text-walnut mx-auto shadow-soft">
            <Compass className="w-10 h-10 text-oak" />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-oak block">
            Error 404
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-walnut">
            Woodwork Path Not Found
          </h1>

          <p className="text-sm text-charcoal-light leading-relaxed">
            The page you are looking for has been relocated or never existed in our workshop catalog.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>

            <Button
              to="/services"
              variant="outline"
              size="md"
            >
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;

