import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ComingSoon from '@/components/ComingSoon';
import { getCompanyPage } from '@/components/CompanyPages';

const pageMetadata: Record<string, Metadata> = {
  'about-us': {
    title: 'About Us | SHILP Group',
    description: 'Discover SHILP Group, an Ahmedabad real estate developer creating residential, commercial and plotted places since 2004.',
  },
  'our-team': {
    title: 'Our Team | SHILP Group',
    description: 'Meet the leadership team behind SHILP Group and its residential, commercial and plotted developments.',
  },
  careers: {
    title: 'Careers | SHILP Group',
    description: 'Explore current career opportunities and join the SHILP Group team in Ahmedabad.',
  },
  'project-overview': {
    title: 'Project Overview | SHILP Group',
    description: 'Explore SHILP Group residential, commercial and plotted projects across Ahmedabad and GIFT City.',
  },
  'our-work': {
    title: 'Our Work | SHILP Group',
    description: 'Explore SHILP Group residential, commercial and plotted development work.',
  },
  'contact-us': {
    title: 'Contact Us | SHILP Group',
    description: 'Contact SHILP Group to enquire about residential and commercial projects in Ahmedabad and GIFT City.',
  },
};

function getRouteName(slug: string[]) {
  return slug
    .join('/')
    .toLowerCase();
}

function formatPageName(slug: string[]) {
  return slug
    .at(-1)!
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const route = getRouteName(params.slug);
  return pageMetadata[route] || { title: `${formatPageName(params.slug)} | SHILP Group` };
}

export default async function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const route = getRouteName(params.slug);
  if (route === 'stories/family-matters' || route === 'stories/context-matters') notFound();

  const Page = getCompanyPage(route);
  return Page ? await Page() : <ComingSoon pageName={formatPageName(params.slug)} />;
}
