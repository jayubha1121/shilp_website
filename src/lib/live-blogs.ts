import type { Blog } from '@/types/content';

const backendUrl = process.env.BACKEND_URL || (process.env.VERCEL
  ? 'https://shilp-backend-dusky.vercel.app'
  : 'http://localhost:8081');
const BLOG_PAGE_SIZE = 50;

function publicBlogImage(value: string | undefined): string {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (['localhost', '127.0.0.1'].includes(url.hostname) && url.pathname.startsWith('/api/uploads/')) {
      return backendUrl + url.pathname + url.search;
    }
  } catch {
    return value;
  }
  return value;
}

function normalizeBlog(blog: Blog): Blog {
  return {
    ...blog,
    imageUrl: publicBlogImage(blog.imageUrl),
    points: Array.isArray(blog.points) ? blog.points.map((point) => ({
      ...point,
      imageUrl: publicBlogImage(point.imageUrl),
    })) : [],
  };
}

/** Fetch every published post, paging by a sensible batch size without a total cap. */
export async function getLiveBlogs(): Promise<Blog[]> {
  try {
    const posts: Blog[] = [];
    let total = Number.POSITIVE_INFINITY;
    while (posts.length < total) {
      const response = await fetch(backendUrl + '/api/blogs?limit=' + BLOG_PAGE_SIZE + '&skip=' + posts.length, { cache: 'no-store' });
      if (!response.ok) return [];
      const result = await response.json() as { data?: Blog[]; total?: number };
      if (!Array.isArray(result.data)) return [];
      if (Number.isFinite(result.total)) total = Math.max(0, Number(result.total));
      if (result.data.length === 0) break;
      posts.push(...result.data.map(normalizeBlog));
    }
    return posts;
  } catch {
    return [];
  }
}

export async function getLiveBlog(slug: string): Promise<Blog | null> {
  try {
    const response = await fetch(backendUrl + '/api/blogs/' + encodeURIComponent(slug), { cache: 'no-store' });
    if (!response.ok) return null;
    const result = await response.json() as { data?: Blog };
    return result.data ? normalizeBlog(result.data) : null;
  } catch {
    return null;
  }
}
