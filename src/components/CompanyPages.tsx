import AboutPage from '@/components/AboutPage';
import CareersPage from '@/components/CareersPage';
import ContactPage from '@/components/ContactPage';
import OurWorkPage from '@/components/OurWorkPage';
import ProjectOverviewPage from '@/components/ProjectOverviewPage';
import TeamPage from '@/components/TeamPage';

const pages: Record<string, () => Promise<React.ReactNode>> = {
  'about-us': AboutPage,
  about: AboutPage,
  'our-team': TeamPage,
  team: TeamPage,
  'about/team': TeamPage,
  careers: CareersPage,
  career: CareersPage,
  'about/career': CareersPage,
  'project-overview': ProjectOverviewPage,
  'project-tree': ProjectOverviewPage,
  'about/project-tree': ProjectOverviewPage,
  'our-work': OurWorkPage,
  'about/our-work': OurWorkPage,
  'contact-us': ContactPage,
  contact: ContactPage,
};

export function getCompanyPage(route: string) {
  return pages[route];
}
