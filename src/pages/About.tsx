import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { teamMembers, workshopStats, companyMilestones } from '../data';
import { ShieldCheck, Heart, Leaf, Award } from 'lucide-react';
import { CtaStrip } from '../components/home/CtaStrip';

const values = [
  {
    icon: Leaf,
    title: 'Radical Forest Stewardship',
    description:
      'We harvest only trees naturally felled by weather, urban development rescues, or FSC-certified managed forests where every tree cut is replanted five-fold.',
  },
  {
    icon: ShieldCheck,
    title: 'Generational Longevity',
    description:
      'We design beyond seasonal trends. Every cut, joint, and surface is engineered to withstand family life for over a century without loosening.',
  },
  {
    icon: Heart,
    title: 'Honest Non-Toxic Living',
    description:
      'Zero petrochemical lacquers or artificial stains. We hand-rub cold-pressed organic linseed oils and beeswax that let the natural timber breathe.',
  },
  {
    icon: Award,
    title: 'Slow Artisan Pride',
    description:
      'Each project is shepherded by a designated master craftsman who personally inspects, signs, and stamps the underside of the finished piece.',
  },
];

const About: React.FC = () => {
  useDocumentMeta({
    title: 'Our Story & Workshop Heritage',
    description:
      'Learn about WoodCraft Furniture: founded in 1998 in Portland, our philosophy of slow luxury, master artisans, and sustainable timber stewardship.',
  });

  return (
    <PageLayout>
      {/* Compact Hero Banner */}
      <section className="pt-12 pb-16 sm:pb-20 bg-sand/30 border-b border-sand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-oak block mb-3">
            Our Heritage & Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-walnut max-w-4xl mx-auto leading-tight">
            Crafting Heirlooms That Echo Through Generations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Founded on the belief that real wood possesses a soul, our Portland workshop merges traditional joinery with clean contemporary aesthetics.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-sand">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=75"
                  alt="WoodCraft master artisan carefully hand-planing a solid walnut tabletop"
                  aspectRatio="4/3"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-sand p-6 rounded-3xl border border-sand-dark shadow-soft max-w-xs hidden sm:block">
                <span className="font-serif text-3xl font-bold text-walnut block">
                  1998
                </span>
                <span className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                  Hand-planing since day one
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-oak">
                Our Genesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-walnut leading-tight">
                Born From a Disdain for the Disposable
              </h2>
              <p className="text-charcoal-light leading-relaxed text-base">
                In 1998, founder Henrik Lindqvist noticed a troubling transition in the furniture industry: ancient hardwood forests were being replaced by compressed sawdust and formaldehyde glues designed to last only a few moves.
              </p>
              <p className="text-charcoal-light leading-relaxed text-base">
                WoodCraft was established as an antidote. We set out to prove that by honoring classical joinery—sliding dovetails, mortise-and-tenon, and solid butterflies—a dining table or bed could endure for hundreds of years, collecting the warmth and stories of family dinners and quiet mornings.
              </p>
              <div className="pt-2 border-l-2 border-oak pl-4 italic text-walnut font-serif text-lg">
                "We don't just cut timber; we collaborate with the living grain that grew over decades before we ever touched it."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Stats Bar */}
      <section className="py-16 bg-sand/60 border-y border-sand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopStats.map(stat => (
              <div key={stat.id} className="text-center sm:text-left space-y-2">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-walnut">
                  {stat.value}
                </div>
                <h3 className="font-medium text-sm text-charcoal">
                  {stat.label}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Pillars"
            title="The Values That Guide Every Plane & Joint"
            subtitle="Slow craftsmanship requires rigorous ethics. These four pillars guide every lumber purchase, joint cut, and finish."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map(val => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white/80 p-8 rounded-3xl border border-sand-dark/60 shadow-soft hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sand flex items-center justify-center text-walnut mb-6">
                    <Icon className="w-6 h-6 text-oak" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-walnut mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 bg-sand/30 border-t border-sand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Evolution"
            title="A Quarter-Century of Woodworking"
            subtitle="Milestones along our journey from a one-person bench to our contemporary artisan workshop."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-sand-dark">
            {companyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Badge */}
                  <div className="w-8 h-8 rounded-full bg-walnut text-cream flex items-center justify-center font-serif text-xs font-bold shrink-0 z-10 shadow-soft border-2 border-cream ml-0 sm:mx-auto">
                    &bull;
                  </div>

                  {/* Content Box */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-dark/60 shadow-soft flex-1 sm:max-w-[calc(50%-2rem)]">
                    <span className="font-serif text-2xl font-bold text-oak block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif font-semibold text-lg text-walnut mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Cards (4 master artisans & designers) */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Artisans"
            title="The Hands Behind the Craft"
            subtitle="Meet the master woodworkers, architects, and restorers who shape each custom piece."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-sand-dark/60 shadow-soft hover:shadow-card transition-all flex flex-col"
              >
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  aspectRatio="4/3"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-oak block">
                      {member.experienceYears} Years At The Bench
                    </span>
                    <h3 className="font-serif font-semibold text-xl text-walnut mt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-charcoal font-medium mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-charcoal-light mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sand-dark/40 text-[11px] font-semibold text-walnut">
                    Specialty: {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CtaStrip />
    </PageLayout>
  );
};

export default About;

