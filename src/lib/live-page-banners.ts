export type PageBannerKey = 'home' | 'about-us' | 'our-team' | 'careers' | 'project-overview' | 'our-work' | 'contact-us' | 'commercial' | 'residential' | 'plotted';

export interface LivePageBanner {
  page: PageBannerKey;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
}

const backendUrl = process.env.BACKEND_URL || (process.env.VERCEL
  ? 'https://shilp-backend-dusky.vercel.app'
  : 'http://localhost:8081');

function publicBannerImage(value: string): string {
  try {
    const url = new URL(value);
    if (['localhost', '127.0.0.1'].includes(url.hostname) && url.pathname.startsWith('/api/uploads/')) {
      return `${backendUrl}${url.pathname}${url.search}`;
    }
  } catch {
    return value;
  }
  return value;
}

export async function getLivePageBanners(): Promise<LivePageBanner[] | null> {
  try {
    const response = await fetch(`${backendUrl}/api/page-banners`, { cache: 'no-store' });
    if (!response.ok) return null;
    const result = await response.json() as { data?: LivePageBanner[] };
    if (!Array.isArray(result.data)) return null;

    return result.data.flatMap((banner) => {
      const desktopImage = typeof banner?.desktopImage === 'string' ? publicBannerImage(banner.desktopImage.trim()) : '';
      const mobileImage = typeof banner?.mobileImage === 'string' ? publicBannerImage(banner.mobileImage.trim()) : '';
      if (!desktopImage && !mobileImage) return [];

      const fallbackImage = desktopImage || mobileImage;
      return [{
        ...banner,
        desktopImage: desktopImage || fallbackImage,
        mobileImage: mobileImage || fallbackImage,
        imageAlt: typeof banner.imageAlt === 'string' ? banner.imageAlt.trim() : '',
      }];
    });
  } catch {
    return null;
  }
}

export async function getLivePageBanner(page: PageBannerKey): Promise<LivePageBanner | null> {
  const banners = await getLivePageBanners();
  return banners?.find((banner) => banner.page === page) || null;
}
