import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getLiveProjectDetail } from '@/lib/live-projects';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getLiveProjectDetail(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
