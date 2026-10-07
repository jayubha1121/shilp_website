import type { ProjectDetail, ProjectItem } from '@/types/content';

type ApiProject = {
  id: string;
  slug: string;
  typeOfProject: 'commercial' | 'residential' | 'plotted';
  projectState?: string;
  statusPercentage?: number;
  projectDetail: {
    title: string;
    shortAddress: string;
    projectWorkStatus: string;
    projectStatus: string;
    brochure: string;
  };
  banner: { banner: string; mobileBanner: string };
  aboutUs: { description: string[]; image: string; imageAlt?: string; faqs?: { question: string; answer: string }[] };
  floorPlans?: { title: string; image: string; alt: string }[];
  projectImages?: { title: string; image: string; alt: string }[];
  projectUpdates?: { title: string; images: { title: string; image: string; alt: string }[] };
  location: { title?: string; description?: string; area?: string; phone1?: string; phone2?: string; email1?: string; email2?: string; mapUrl?: string; address1: string; address2: string; city: string; state: string; zip: string; country: string };
  amenities: ({ title: string; image: string; alt: string } | string)[];
  projectVideo: { videoUrl: string; title: string };
  reraDetails?: string;
  year: string;
  typology: string;
  plotSize: string;
};

const backendUrl = process.env.BACKEND_URL || (process.env.VERCEL
  ? 'https://shilp-backend-dusky.vercel.app'
  : 'http://localhost:8081');

export async function getFeaturedProject(): Promise<ApiProject | null> {
  try {
    const response = await fetch(`${backendUrl}/api/projects?limit=1`, { cache: 'no-store' });
    if (!response.ok) return null;
    const result = await response.json() as { data?: ApiProject[] };
    return result.data?.[0] || null;
  } catch {
    return null;
  }
}

async function readApiProject(path: string): Promise<{ project: ApiProject | null; available: boolean; archived: boolean }> {
  try {
    const response = await fetch(`${backendUrl}/api/projects/${path}`, { cache: 'no-store' });
    if (response.status === 404) return { project: null, available: true, archived: false };
    if (response.status === 410) return { project: null, available: true, archived: true };
    if (!response.ok) return { project: null, available: false, archived: false };
    const result = await response.json() as { data?: ApiProject };
    return { project: result.data || null, available: true, archived: false };
  } catch {
    return { project: null, available: false, archived: false };
  }
}

export async function getLiveProjectItems(
  category: ApiProject['typeOfProject'],
): Promise<ProjectItem[]> {
  try {
    const response = await fetch(`${backendUrl}/api/projects?type=${category}&limit=200`, { cache: 'no-store' });
    if (!response.ok) return [];
    const result = await response.json() as { data?: ApiProject[]; archivedSlugs?: string[] };
    if (!Array.isArray(result.data)) return [];

    return result.data.map((project, index) => ({
      key: project.id,
      displayKey: index < 26 ? String.fromCharCode(65 + index) : String(index + 1),
      name: project.projectDetail.title,
      meta: project.projectDetail.shortAddress || project.location.city,
      typology: project.typeOfProject === 'residential'
        ? project.typology || project.projectDetail.projectWorkStatus
        : project.projectDetail.projectWorkStatus,
      year: project.year,
      href: `/projects/${project.slug}`,
      ...(project.typeOfProject === 'residential' ? { status: project.projectDetail.projectStatus } : {}),
      ...(project.typeOfProject === 'plotted' ? { size: project.plotSize } : {}),
    }));
  } catch {
    return [];
  }
}

export async function getLiveProjectDetail(slug: string): Promise<ProjectDetail | null> {
  const result = await readApiProject(encodeURIComponent(slug));
  if (!result.available || result.archived) return null;
  const project = result.project;
  if (!project) return null;
  const category = project.typeOfProject[0].toUpperCase() + project.typeOfProject.slice(1);
  const heroImage = project.banner.banner;
  const aboutImage = project.aboutUs.image;
  const location = [project.location.address1, project.location.address2, project.location.city, project.location.state]
    .filter(Boolean)
    .join(', ') || project.projectDetail.shortAddress;
  const paragraphs = project.aboutUs.description || [];

  const liveDetail: ProjectDetail = {
    slug: project.slug,
    name: project.projectDetail.title,
    category,
    location,
    status: project.projectState || project.projectDetail.projectWorkStatus || project.projectDetail.projectStatus,
    projectState: project.projectState || project.projectDetail.projectWorkStatus || project.projectDetail.projectStatus,
    statusPercentage: project.statusPercentage || 0,
    year: project.year,
    heroImage,
    mobileHeroImage: project.banner.mobileBanner || heroImage,
    heroImageAlt: `${project.projectDetail.title} project`,
    aboutImage,
    aboutImageAlt: project.aboutUs.imageAlt || `${project.projectDetail.title} development`,
    amenitiesImage: aboutImage,
    amenitiesImageAlt: `${project.projectDetail.title} amenities`,
    youtubeUrl: project.projectVideo.videoUrl || 'https://www.youtube.com/',
    brochureUrl: project.projectDetail.brochure,
    intro: paragraphs[0] || `${project.projectDetail.title} is a ${project.typeOfProject} development in ${location}.`,
    description: paragraphs.slice(1).join('\n\n'),
    area: project.projectDetail.shortAddress,
    configuration: project.typology || project.projectDetail.projectStatus,
    brochureLabel: project.projectDetail.brochure ? 'Download brochure' : 'Enquire about this project',
    floorPlans: (project.floorPlans || []).map((plan) => ({ label: plan.title, image: plan.image })),
    gallery: (project.projectImages || []).map((image) => ({ src: image.image, alt: image.alt })),
    amenities: (project.amenities || []).map((amenity) => typeof amenity === 'string'
      ? { title: amenity, image: '', alt: amenity }
      : { title: amenity.title, image: amenity.image, alt: amenity.alt }),
    faqs: project.aboutUs.faqs || [],
    updatesTitle: project.projectUpdates?.title || '',
    updates: (project.projectUpdates?.images || []).slice(0, 2).map((image) => ({ date: '', image: image.image, title: image.title, alt: image.alt })),
    locationDescription: project.location.description || '',
    mapUrl: project.location.mapUrl || '',
    details: project.reraDetails || '',
  };

  return liveDetail;
}