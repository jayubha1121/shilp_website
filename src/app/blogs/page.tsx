import type { Metadata } from 'next';
import BlogListingPage from '@/components/BlogListingPage';

export const metadata: Metadata = {
  title: 'Blogs | SHILP Group',
  description: 'Read the latest ideas, perspectives and stories from SHILP Group.',
};

export default function BlogsPage() {
  return <BlogListingPage />;
}
