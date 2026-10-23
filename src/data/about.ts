import type { About, Stat } from '@/types/content';

export const about: About = {
  heading: ['People Matter', 'Because', 'Bonds Matter'],
  paragraphs: [
    'SHILP Group is an Ahmedabad-based real estate developer, crafting thoughtfully designed residential, commercial and plotted developments across Ahmedabad and GIFT City.',
    'Founded in 2004 by Mr Yash Brahmbhatt, SHILP has grown from its early beginnings with a small land acquisition into a recognised name among Ahmedabad real estate developers.',
    'We have developed 20 million+ square feet and delivered over 55 landmark projects across the city, shaping Ahmedabad’s skyline with a portfolio defined by distinctive architecture.',
  ],
  cta: { label: 'Know Shilp', href: '/about-us' },
  image: '/images/image1.png',
  imageAlt: 'A Shilp commercial tower photographed from street level',
};

export const stats: Stat[] = [
  {
    value: '8000+',
    label: 'Days of experience | Two decades',
    note: 'Shilp group, a real estate company in Ahmedabad that is driven by quality, integrity.',
  },
  {
    value: '20,000,000+',
    label: '20 million sq. ft. | Across 450+ acres',
    note: 'Shilp group, a real estate company in Ahmedabad that is driven by quality, integrity.',
  },
  {
    value: '55+ Places',
    label: 'Residential and commercial properties',
    note: 'Shilp group, a real estate company in Ahmedabad that is driven by quality, integrity.',
  },
];
