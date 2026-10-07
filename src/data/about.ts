import type { About, Stat } from '@/types/content';

export const about: About = {
  heading: ['People Matter', 'Because', 'Bonds Matter'],
  paragraphs: [
    'Shilp Group is an Ahmedabad based real estate developer, crafting thoughtfully designed residential, commercial and plotted developments across Ahmedabad and GIFT City.',
    'Founded in 1984 by Mr Ilesh Vachhrajani, Shilp has grown from its early beginnings with a small land acquisition in real estate development, into a legacy business earning reputation among future developers in Ahmedabad.',
    'We have developed 29 million square feet and delivered over 55 landmark projects across the city, shaping Ahmedabad’s skyline with a portfolio defined by distinctive architecture and a warmth that is missing in modern developments.',
  ],
  cta: { label: 'Know Shilp', href: '/about' },
  image: '/images/image1.png',
  imageAlt: 'A Shilp commercial tower photographed from street level',
};

export const stats: Stat[] = [
  {
    value: '8000+',
    label: 'Years of experience | Two decades',
    note: 'Shilp Group is a real estate company in Ahmedabad that delivers on quality, strength and integrity.',
  },
  {
    value: '20,000,000+',
    label: '29 million sq. ft. | Across 480+ acres',
    note: 'Shilp Group is a real estate company in Ahmedabad that delivers on quality, strength and integrity.',
  },
  {
    value: '55+ Places',
    label: 'Residential and commercial properties',
    note: 'Shilp Group is a real estate company in Ahmedabad that delivers on quality, strength and integrity.',
  },
];
