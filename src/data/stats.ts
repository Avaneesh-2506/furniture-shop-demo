import { TrustStat, WorkshopStat, WhyChooseUsCard } from '../types';

export const trustStats: TrustStat[] = [
  {
    id: 'stat-years',
    value: '28+',
    label: 'Years of Craft',
    description: 'Nearly three decades of continuous woodworking mastery.',
  },
  {
    id: 'stat-projects',
    value: '4,800+',
    label: 'Heirloom Pieces',
    description: 'Custom furniture gracing residences and estates worldwide.',
  },
  {
    id: 'stat-satisfaction',
    value: '99.4%',
    label: 'Client Approval',
    description: 'Verified satisfaction across residential and corporate projects.',
  },
];

export const whyChooseUsCards: WhyChooseUsCard[] = [
  {
    id: 'why-1',
    title: 'Certified Sustainable Timber',
    description:
      'We exclusively utilize FSC-certified Appalachian hardwoods, urban salvaged trees, and responsibly managed sustainable forestry lumber.',
    iconName: 'TreePine',
  },
  {
    id: 'why-2',
    title: 'Master Joinery, Zero Stubs',
    description:
      'Every piece is engineered with classical hand-cut mortise and tenon, sliding dovetails, and butterfly keys built to resist generational movement.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-3',
    title: '10-Year Structural Guarantee',
    description:
      'We stand behind every joint and beam. Our comprehensive decade-long warranty ensures peace of mind for your family investments.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'why-4',
    title: 'Transparent Production Clock',
    description:
      'Enjoy precise lead times with weekly photo logs directly from the master craftsman shaping your lumber on our workshop bench.',
    iconName: 'Clock',
  },
];

export const workshopStats: WorkshopStat[] = [
  {
    id: 'ws-1',
    value: '18,500',
    label: 'Sq. Ft. Workshop Studio',
    subtext: 'Dedicated crafting bays, solar kiln, and clean finishing rooms.',
  },
  {
    id: 'ws-2',
    value: '100%',
    label: 'Non-Toxic Finishes',
    subtext: 'Zero VOC, solvent-free organic plant hardwax oils and beeswax.',
  },
  {
    id: 'ws-3',
    value: '14,000+',
    label: 'Board Feet Sourced Sustainably',
    subtext: 'Every felled tree is offset with five native reforestation saplings.',
  },
  {
    id: 'ws-4',
    value: '42',
    label: 'Master Craftsmen & Designers',
    subtext: 'Cross-disciplinary artisans dedicated exclusively to slow luxury.',
  },
];

export const companyMilestones = [
  {
    year: '1998',
    title: 'A Single Bench & Hand Plane',
    description: 'Henrik opens a humble one-man woodworking shop in Southeast Portland crafting custom solid oak dining tables.',
  },
  {
    year: '2006',
    title: 'Architectural Millwork Expansion',
    description: 'We team with leading Pacific Northwest architects to provide turnkey residential built-ins and custom libraries.',
  },
  {
    year: '2015',
    title: 'Zero-Waste Solar Kiln Facility',
    description: 'WoodCraft opens our current 18,500 sq ft facility, repurposing 100% of sawdust for clean briquette heating.',
  },
  {
    year: '2026',
    title: 'The Contemporary Bespoke Era',
    description: 'Over 4,800 heirloom pieces completed, maintaining strict adherence to slow, intentional craftsmanship.',
  },
];

