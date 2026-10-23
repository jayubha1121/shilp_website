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
    href: '/about-us',
    children: [
      { label: 'Our Work', href: '/our-work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Project Tree', href: '/project-overview' },
    ],
  },
  { label: 'Sneh Shilp Foundation', href: 'https://snehshilp.org/', children: [] },
];

export const headerCta: NavLink = { label: 'Contact Us', href: '/contact-us' };

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
        { label: 'About Us', href: '/about-us' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Our Work', href: '/our-work' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Blogs', href: '/blogs' },
      ],
    },
    {
      heading: 'Projects',
      links: [
        { label: 'Residential Projects', href: '/projects/residential' },
        { label: 'Commercial Projects', href: '/projects/commercial' },
        { label: 'Plotted Development Projects', href: '/projects/plotted' },
        { label: 'Project Tree', href: '/project-overview' },
      ],
    },
  ],
  phones: ['   98982 11567', '   98985 08567'],
  email: 'sales@shilp.co.in | saumil@shilp.co.in',
  website: '',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/ShilpGroup/' },
    { label: 'Instagram', href: 'https://www.instagram.com/shilpgroup/' },
    { label: 'Youtube', href: 'https://www.youtube.com/channel/UCl4AhLyffIpnKCwyCPwkBNQ' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shilpgroup/posts/?feedView=all' },
    { label: 'X', href: 'https://x.com/GroupShilp' },
  ],
  legal: [
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  copyright: '© 2026 All rights reserved.',
};
