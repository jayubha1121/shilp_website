import ComingSoon from '@/components/ComingSoon';

function formatPageName(slug: string[]) {
  return slug
    .at(-1)!
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function ComingSoonPage({ params }: { params: { slug: string[] } }) {
  return <ComingSoon pageName={formatPageName(params.slug)} />;
}
