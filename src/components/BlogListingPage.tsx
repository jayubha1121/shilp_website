import Image from 'next/image';
import Link from 'next/link';
import { PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';
import { getLiveBlogs } from '@/lib/live-blogs';

const fallbackImage = '/images/journal-01.svg';

export default async function BlogListingPage() {
  const [banner, posts] = await Promise.all([getLivePageBanner('blog'), getLiveBlogs()]);

  return (
    <PageFrame>
      <PageHero
        label="Blog"
        title="Ideas, perspectives and stories from Shilp Group."
        description="Explore the latest articles and insights from Shilp Group."
        image={banner?.desktopImage || fallbackImage}
        mobileImage={banner?.mobileImage || banner?.desktopImage || fallbackImage}
        imageAlt={banner?.imageAlt || 'Shilp Group journal'}
      />
      <section className="shell py-12 sm:py-16 lg:py-20" aria-labelledby="blogs-heading">
        <div className="border-b border-black/10 pb-7 sm:pb-9">
          <div>
            <h2 id="blogs-heading" className="mt-3 text-[clamp(2rem,4.2vw,4rem)] font-light leading-[1.04] tracking-[-.045em]">Latest stories</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/60">Perspectives, updates and ideas from across the world of Shilp Group.</p>
          </div>
        </div>

        {posts.length ? (
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {posts.map((post) => (
              <Link key={post.id || post.slug} href={'/blogs/' + encodeURIComponent(post.slug)} className="group min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f0ec]">
                  <Image
                    src={post.imageUrl || fallbackImage}
                    alt={post.imageAlt || post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[.14em] text-ink/50">{formatBlogDate(post.date)}</p>
                <h3 className="mt-2 text-xl font-light leading-snug tracking-[-.02em] group-hover:text-ink/65 sm:text-2xl">{post.title}</h3>
                <span className="mt-5 inline-block border-b border-current pb-1 text-[10px] uppercase tracking-[.12em]">Read article</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-14 text-sm text-ink/60">There are no published blog posts yet.</p>
        )}
      </section>
    </PageFrame>
  );
}

function formatBlogDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
