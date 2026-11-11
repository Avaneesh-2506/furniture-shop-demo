import { Service, ProcessStep } from '../types';

export const services: Service[] = [
  {
    id: 'custom-furniture',
    title: 'Custom Furniture Design',
    slug: 'custom-furniture',
    shortDescription:
      'Commission one-of-a-kind hardwood dining tables, bespoke platform beds, credenzas, and statement seating crafted precisely to your dimensions.',
    fullDescription:
      'Our bespoke furniture commissions represent the pinnacle of artisan woodworking. We collaborate directly with homeowners, architects, and interior designers to bring custom sketches to life. Using hand-selected Appalachian walnut, French white oak, and cherry, each piece is shaped with mortise-and-tenon joinery and finished with organic hardwax oils.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=70',
    features: [
      'Tailored dimensions down to the millimetre',
      'Choice of solid sustainably harvested hardwoods',
      'Hand-cut dovetail and mortise-and-tenon joints',
      'Non-toxic VOC-free organic oil and wax finishes',
      'Full 3D CAD rendering and grain-match previews',
    ],
    timeline: '3 to 5 weeks',
    badge: 'Most Popular',
  },
  {
    id: 'home-interior',
    title: 'Bespoke Home Interiors',
    slug: 'home-interior',
    shortDescription:
      'Turnkey architectural woodwork, floor-to-ceiling library systems, custom wall panelling, and integrated living room cabinetry.',
    fullDescription:
      'Transform residential environments with seamless built-in woodwork that harmonises with your home’s architecture. From minimalist acoustic wood slat walls to ornate reading sanctuaries, our master joiners manage every detail from on-site digital laser measuring to final precision trim.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=70',
    features: [
      'Full architectural millwork & fluted panelling',
      'Concealed ambient LED lighting integration',
      'Concealed soft-close European hardware',
      'Sound-dampening acoustic slat backing',
      'End-to-end site survey and perfectionist fitting',
    ],
    timeline: '4 to 8 weeks',
    badge: 'Turnkey Solution',
  },
  {
    id: 'modular-kitchen',
    title: 'Artisan Modular Kitchens',
    slug: 'modular-kitchen',
    shortDescription:
      'Luxury moisture-resistant solid wood kitchen cabinetry, marble-topped culinary islands, and ergonomic pantry larders.',
    fullDescription:
      'Where culinary functionality meets heirloom aesthetics. Our custom kitchens incorporate marine-grade moisture resistance, solid timber door fronts, Blum motion dampers, and handcrafted butcher-block or natural stone counter pairings engineered for decades of daily family memories.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=70',
    features: [
      'Moisture-sealed marine timber cores',
      'Dovetailed solid birch drawer boxes',
      'Concealed soft-close German hardware systems',
      'Custom spice pull-outs, larders, and corner units',
      'Integrated quartz or waterfall live-edge islands',
    ],
    timeline: '4 to 6 weeks',
    badge: 'High Precision',
  },
  {
    id: 'repair-polishing',
    title: 'Restoration & French Polishing',
    slug: 'repair-polishing',
    shortDescription:
      'Historical furniture restoration, structural joint repair, scratch removal, and authentic traditional shellac French polishing.',
    fullDescription:
      'Preserve family heirlooms and valuable antiques. Our conservators employ traditional reversible adhesives, hand scraping, colour matching with natural earth pigments, and multi-layered spirit varnishing to revive dulled wood grain without compromising provenance.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=70',
    features: [
      'Structural stabilisation of fractured timber joints',
      'Authentic French hand-rubbed shellac polishing',
      'Water ring, burn, and gouge reconstruction',
      'Period-accurate antique hardware replating',
      'Museum-grade archival conservation methods',
    ],
    timeline: '1 to 3 weeks',
    badge: 'Artisan Craft',
  },
  {
    id: 'delivery-installation',
    title: 'Delivery & White-Glove Installation',
    slug: 'delivery-installation',
    shortDescription:
      'Specialised climate-controlled transport, protective blanket wrapping, room-of-choice placement, and level anchorage.',
    fullDescription:
      'We treat delivery as part of the craftsmanship. Our in-house installation crew handles your pieces with white-glove respect. We protect your doorframes and flooring, anchor large units seismically to studs, clean the timber, and haul away all protective packaging for recycling.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=70',
    features: [
      'Dedicated enclosed climate-controlled vehicles',
      'Floor and doorway protective runner systems',
      'Precision laser levelling and wall anchoring',
      'On-site final conditioning and wax dusting',
      '100% recyclable packing removal',
    ],
    timeline: 'Scheduled Delivery',
    badge: 'In-House Crew',
  },
  {
    id: 'office-furniture',
    title: 'Executive & Commercial Office Woodwork',
    slug: 'office-furniture',
    shortDescription:
      'Impressive boardroom conference tables with concealed cable channels, executive desks, and acoustic reception desks.',
    fullDescription:
      'Elevate corporate and boutique creative workspaces. We build massive single-slab or bookmatched conference tables fitted with flush motorized connectivity ports, executive sit-stand desks enclosed in solid walnut, and sculpted lobby hospitality units.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=70',
    features: [
      'Bookmatched boardroom tables up to 24 feet',
      'Integrated wireless charging and concealed wire runs',
      'Heavy-duty dual-motor solid wood height adjustment',
      'Commercial-grade scratch-resistant matte topcoats',
      'Modular conference and breakout bench systems',
    ],
    timeline: '3 to 6 weeks',
    badge: 'Commercial Grade',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Design Consultation & Spatial Audit',
    description: 'We meet in person or virtually to understand your taste, spatial dimensions, and functional lifestyle needs.',
    detail: 'Includes digital moodboards, timber sample swatch deliveries, and initial ballpark sizing.',
  },
  {
    step: '02',
    title: '3D CAD Modeling & Timber Selection',
    description: 'Our industrial designers produce exact 3D models and grain-matched timber schematics for your approval.',
    detail: 'Inspect virtual elevations and hand-pick the actual raw hardwood slabs from our regional timber reserve.',
  },
  {
    step: '03',
    title: 'Master Handcrafting & Joinery',
    description: 'Our Portland artisans cut, plane, hand-chisel mortise joints, and apply five layers of natural hardwax oils.',
    detail: 'You receive weekly behind-the-scenes workshop photographic updates as your timber is shaped.',
  },
  {
    step: '04',
    title: 'White-Glove Delivery & Installation',
    description: 'Our in-house logistics team delivers, positions, anchors, and inspects your furniture in your home.',
    detail: 'Complete with care documentation, lifetime timber conditioner wax, and our 10-year warranty certificate.',
  },
];

