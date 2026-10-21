export interface LiveJobOpening {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  experience: string;
}

const backendUrl = process.env.BACKEND_URL || (process.env.VERCEL
  ? 'https://shilp-backend-dusky.vercel.app'
  : 'http://localhost:8081');

export async function getLiveJobOpenings(): Promise<{
  openings: LiveJobOpening[];
  available: boolean;
}> {
  try {
    const limit = 200;
    const response = await fetch(`${backendUrl}/api/job-openings?limit=${limit}`, { cache: 'no-store' });
    if (!response.ok) return { openings: [], available: false };
    const result = await response.json() as { data?: LiveJobOpening[]; total?: number };
    if (!Array.isArray(result.data)) return { openings: [], available: false };
    const openings = result.data;
    const total = Number.isFinite(result.total) ? Number(result.total) : openings.length;
    for (let skip = openings.length; skip < total; skip += limit) {
      const next = await fetch(`${backendUrl}/api/job-openings?limit=${limit}&skip=${skip}`, { cache: 'no-store' });
      if (!next.ok) return { openings: [], available: false };
      const page = await next.json() as { data?: LiveJobOpening[] };
      if (!Array.isArray(page.data) || page.data.length === 0) return { openings: [], available: false };
      openings.push(...page.data);
    }
    return { openings, available: true };
  } catch {
    return { openings: [], available: false };
  }
}
