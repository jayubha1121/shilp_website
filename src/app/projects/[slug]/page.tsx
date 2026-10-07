import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import ComingSoon from '@/components/ComingSoon';
import { getLiveProjectDetail } from '@/lib/live-projects';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const categories = ['commercial', 'residential', 'plotted'];
  if (categories.includes(params.slug)) {
    const pageName = `${params.slug.charAt(0).toUpperCase()}${params.slug.slice(1)} Projects`;
    return <ComingSoon pageName={pageName} />;
  }

  const project = await getLiveProjectDetail(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
