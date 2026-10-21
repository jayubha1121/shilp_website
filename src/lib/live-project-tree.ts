export type ProjectTreeType = 'commercial' | 'residential' | 'plotted';

export interface LiveProjectTreeItem {
  id: string;
  year: string;
  title: string;
  location: string;
  type: ProjectTreeType;
  image: string;
  imageAlt: string;
}

const backendUrl = process.env.BACKEND_URL || (process.env.VERCEL
  ? 'https://shilp-backend-dusky.vercel.app'
  : 'http://localhost:8081');

export async function getLiveProjectTree(): Promise<{
  items: LiveProjectTreeItem[];
  available: boolean;
}> {
  try {
    const limit = 200;
    const response = await fetch(`${backendUrl}/api/project-tree?limit=${limit}`, { cache: 'no-store' });
    if (!response.ok) return { items: [], available: false };
    const result = await response.json() as { data?: LiveProjectTreeItem[]; total?: number };
    if (!Array.isArray(result.data)) return { items: [], available: false };
    const items = result.data;
    const total = Number.isFinite(result.total) ? Number(result.total) : items.length;
    for (let skip = items.length; skip < total; skip += limit) {
      const next = await fetch(`${backendUrl}/api/project-tree?limit=${limit}&skip=${skip}`, { cache: 'no-store' });
      if (!next.ok) return { items: [], available: false };
      const page = await next.json() as { data?: LiveProjectTreeItem[] };
      if (!Array.isArray(page.data) || page.data.length === 0) return { items: [], available: false };
      items.push(...page.data);
    }
    return { items, available: true };
  } catch {
    return { items: [], available: false };
  }
}
