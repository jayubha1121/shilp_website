import type { CommercialSection, PlottedSection, ResidentialSection } from '@/types/content';

export const commercial: CommercialSection = {
  eyebrow: 'Making Places For Families, Businesses And Beyond Today',
  cta: { label: 'Explore investments, opportunities, business', href: '/projects/commercial' },
  banner: '/images/image2.png',
  bannerAlt: 'A boardroom in a glass-walled commercial tower',
  listTitle: 'Commercial Paradigms',
  featureTitle: 'Placing Your Business Bonds',
  featureImage: '/images/image3.png',
  featureImageAlt: 'Glass facade of a Shilp commercial tower',
};

export const residential: ResidentialSection = {
  title: 'Placing Your Relationships First',
  image: '/images/image5.png',
  imageAlt: 'Residential towers of a Shilp development',
  listTitle: 'Residential Lifestyle',
};

export const plotted: PlottedSection = {
  title: 'Potential Plots For Your Story',
  featureTitle: 'Placing Your Infinite Expanse',
  featureImage: '/images/image7.png',
  featureImageAlt: 'Aerial view of a plotted development layout',
};