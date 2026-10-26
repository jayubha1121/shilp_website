import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLiveBlog } from '@/lib/live-blogs';
import { getLivePageBanner } from '@/lib/live-page-banners';

type BlogRouteProps = { params: { slug: string } };
const fallbackImage = '/images/journal-01.svg';

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const blog = await getLiveBlog(params.slug);
  if (!blog) return { title: 'Blog | SHILP Group' };
  return { title: blog.title + ' | SHILP Group' };
}

export default async function BlogDetailPage({ params }: BlogRouteProps) {
  const [blog, banner] = await Promise.all([
    getLiveBlog(params.slug),
    getLivePageBanner('blog'),
  ]);
  if (!blog) notFound();

  const points = blog.points || [];
  const pointAnchors = points.map((point, index) => ({
    id: 'article-point-' + (index + 1) + '-' + slugify(point.title),
    label: point.title || 'Section ' + (index + 1),
  }));
  const contents = [
    { id: 'article-introduction', label: 'Introduction' },
    ...pointAnchors,
    { id: 'article-conclusion', label: 'Conclusion' },
  ];

  return (
    <PageFrame>
      <PageHero
        label="Blog"
        title={blog.title}
        description={`Read the latest story from ${blog.author || 'Shilp Group'}.`}
        image={banner?.desktopImage || fallbackImage}
        mobileImage={banner?.mobileImage || banner?.desktopImage || fallbackImage}
        imageAlt={banner?.imageAlt || 'Shilp Group blog'}
      />
      <article>
        <header className="shell pb-8 pt-12 sm:pb-12 sm:pt-16 lg:pt-20">
          <h1 className="mt-5 max-w-none text-[clamp(2.25rem,4.8vw,4rem)] font-light leading-[1.02] tracking-[-.05em]">{blog.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink/55">
            <time dateTime={blog.date}>{formatBlogDate(blog.date)}</time>
            {blog.author && <span>By {blog.author}</span>}
          </div>
        </header>

        <div className="shell">
          <div className="relative aspect-[16/9] max-h-[42rem] overflow-hidden bg-[#f1f0ec]">
            <Image
              src={blog.imageUrl || fallbackImage}
              alt={blog.imageAlt || blog.title}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="shell grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,.35fr)] lg:gap-20 lg:py-20">
          <aside className="h-fit border-l border-black/10 pl-6 text-xs leading-relaxed text-ink/55 lg:sticky lg:top-10 lg:order-2">
            <nav aria-labelledby="article-contents-heading">
              <h2 id="article-contents-heading" className="text-[10px] uppercase tracking-[.15em]">In this article</h2>
              <ol className="mt-4 space-y-3">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a href={'#' + item.id} className="underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:text-ink">{item.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-8 border-t border-black/10 pt-5">
              <p className="uppercase tracking-[.15em]">Written by</p>
              <p className="mt-3 text-sm text-ink">{blog.author || 'Shilp Group'}</p>
              <p className="mt-1">{formatBlogDate(blog.date)}</p>
            </div>
          </aside>
          <div className="min-w-0 lg:order-1">
            <section id="article-introduction" aria-labelledby="article-introduction-heading" className="scroll-mt-8">
              <h2 id="article-introduction-heading" className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-tight tracking-[-.035em]">Introduction</h2>
              {blog.description && <div className="blog-rich-content mt-6 text-base leading-[1.8] text-ink/75" dangerouslySetInnerHTML={{ __html: blog.description }} />}
            </section>
            {points.map((point, index) => (
              <section id={pointAnchors[index].id} key={pointAnchors[index].id} aria-labelledby={pointAnchors[index].id + '-heading'} className="mt-12 scroll-mt-8 border-t border-black/10 pt-8 sm:mt-16 sm:pt-10">
                {point.title && <h2 id={pointAnchors[index].id + '-heading'} className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-tight tracking-[-.035em]">{point.title}</h2>}
                {point.subtitle && <h3 className="mt-4 text-base font-medium leading-relaxed text-ink/75">{point.subtitle}</h3>}
                {point.imageUrl && (
                  <div className="relative mt-7 aspect-[16/9] overflow-hidden bg-[#f1f0ec]">
                    <Image src={point.imageUrl} alt={point.imageAlt || point.title || blog.title} fill unoptimized sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
                  </div>
                )}
                {point.content && <div className="blog-rich-content mt-6 text-sm leading-[1.85] text-ink/70" dangerouslySetInnerHTML={{ __html: point.content }} />}
              </section>
            ))}
            <section id="article-conclusion" aria-labelledby="article-conclusion-heading" className="mt-12 scroll-mt-8 border-t border-black/10 pt-8 sm:mt-16 sm:pt-10">
              <h2 id="article-conclusion-heading" className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-tight tracking-[-.035em]">Conclusion</h2>
            </section>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
}

function formatBlogDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
