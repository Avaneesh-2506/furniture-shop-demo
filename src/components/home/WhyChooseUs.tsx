import React from 'react';
import { TreePine, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { whyChooseUsCards } from '../../data';
import { SectionHeading } from '../ui/SectionHeading';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';

const iconMap = {
  TreePine: TreePine,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
};

export const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="The WoodCraft Standard"
          title="Why Conscious Homeowners Choose Us"
          subtitle="We reject disposable fast-furniture culture. Every piece from our Portland workshop is an heirloom designed to outlive its makers."
          align="center"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {whyChooseUsCards.map((card, idx) => {
            const Icon = iconMap[card.iconName];

            return (
              <div
                key={card.id}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
                className={cn(
                  'p-8 rounded-3xl bg-sand/50 border border-sand-dark/60 shadow-soft hover:shadow-card hover:bg-white hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cream border border-sand-dark flex items-center justify-center text-walnut mb-6 shadow-soft">
                    <Icon className="w-7 h-7 text-oak" />
                  </div>

                  <h3 className="font-serif font-semibold text-xl text-walnut leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-dark/40 text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted">
                  Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

