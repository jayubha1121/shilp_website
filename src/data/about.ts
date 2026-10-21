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
    value: '22+',
    label: 'Years of experience',
    note: 'More than two decades of thoughtful real estate development in Ahmedabad.',
  },
  {
    value: '20M+',
    label: 'Square feet developed',
    note: 'Residential, commercial and plotted developments across Ahmedabad and GIFT City.',
  },
  {
    value: '55+',
    label: 'Landmark projects delivered',
    note: 'Places that support lives, businesses and communities across the region.',
  },
];
