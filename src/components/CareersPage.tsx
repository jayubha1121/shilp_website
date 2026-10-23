import CareerOpenings from '@/components/CareerOpenings';
import { PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLiveJobOpenings } from '@/lib/live-job-openings';
import { getLivePageBanner } from '@/lib/live-page-banners';

export default async function CareersPage() {
  const [{ openings, available }, banner] = await Promise.all([
    getLiveJobOpenings(),
    getLivePageBanner('careers'),
  ]);

  return (
    <PageFrame>
      <PageHero label="Careers" title="Be part of something great." description="Bring your talent and drive to a team built on collaboration, dedication and a commitment to quality." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <CareerOpenings openings={openings} available={available} />
    </PageFrame>
  );
}
