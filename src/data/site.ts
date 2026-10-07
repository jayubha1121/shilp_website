import type { Footer, NavEntry, NavLink, Site } from '@/types/content';

export const site: Site = {
  name: 'SHILP',
  tagline: 'Placing Relationships First',
  description:
    'Shilp Group is an Ahmedabad based real estate developer creating thoughtfully designed residential, commercial and plotted developments across Ahmedabad and GIFT City.',
};

export const primaryNav: NavEntry[] = [
  { label: 'Projects', href: '/projects', children: [] },
  {
    label: 'About Us',
    href: '/about',
    // Dropdown panel opens under About Us.
    children: [
      { label: 'Our Work', href: '/about/our-work' },
      { label: 'Career', href: '/about/career' },
      { label: 'Team', href: '/about/team' },
      { label: 'Project Tree', href: '/about/project-tree' },
    ],
  },
  { label: 'Sneh Shilp Foundation', href: 'https://snehshilp.org/', children: [] },
];

export const headerCta: NavLink = { label: 'Contact Us', href: '/contact' };

export const footer: Footer = {
  blurb:
    'To be the obvious, the most trusted choice in real estate; creating a better, livable and comfortable life for everyone.',
  address: {
    title: 'SHILP HOUSE',
    lines: ['Rajpath, Rangoli Rd,', 'Opposite Rajpath Club,', 'Bodakdev, Ahmedabad,', 'Gujarat 380054'],
  },
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about/team' },
        { label: 'Career', href: '/about/career' },
        { label: 'Blogs', href: '/blogs' },
      ],
    },
    {
      heading: 'Projects',
      links: [
        { label: 'Residential Projects', href: '/projects/residential' },
        { label: 'Commercial Projects', href: '/projects/commercial' },
        { label: 'Plotted Development Projects', href: '/projects/plotted' },
        { label: 'Project Tree', href: '/about/project-tree' },
      ],
    },
  ],
  phones: ['   98982 11567', '   98985 08567'],
  email: 'sales@shilp.co.in | saumil@shilp.co.in',
  website: '',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Youtube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X', href: 'https://x.com' },
  ],
  legal: [
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  copyright: '© 2026 All rights reserved.',
};
