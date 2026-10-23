import Image from 'next/image';
import Link from 'next/link';
import { ArrowMark, PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLiveProjectTree } from '@/lib/live-project-tree';
import { getLivePageBanner } from '@/lib/live-page-banners';

export default async function ProjectOverviewPage() {
  const [{ items, available }, banner] = await Promise.all([
    getLiveProjectTree(),
    getLivePageBanner('project-overview'),
  ]);
  const years = items.map((item) => Number(item.year));
  const yearRange = years.length ? `${Math.min(...years)} — ${Math.max(...years)}` : 'Project portfolio';

  return (
    <PageFrame>
      <PageHero label="Explore" title="Our project tree." description="A growing portfolio of residential, commercial and plotted developments across Ahmedabad and GIFT City." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell py-14 sm:py-20">
        <div className="border-b border-black/10 pb-8">
          <div>
            <h2 className="mt-3 text-[clamp(1.6rem,3.5vw,3rem)] font-light tracking-[-.05em]">Our Project Tree</h2>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-ink/55">Explore our residential, commercial and plotted developments.</p>
          </div>
        </div>
        <div className="mt-9 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <article key={project.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e4df]">
                <Image src={project.image} alt={project.imageAlt} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <span className="absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[10px] tracking-wide">{project.year}</span>
              </div>
              <div className="flex items-start justify-between gap-3 border-b border-black/10 py-4">
                <div>
                  <h3 className="text-lg font-normal">{project.title}</h3>
                  <p className="mt-1 text-xs text-ink/50">{project.location}</p>
                </div>
                <span className="pt-1 text-[9px] uppercase tracking-[.13em] text-ink/45">{project.type}</span>
              </div>
            </article>
          ))}
        </div>
        {!available && <p role="status" className="mt-8 border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Projects are temporarily unavailable. Please try again shortly.</p>}
        {available && items.length === 0 && <p className="mt-8 border border-black/10 bg-[#f8f7f4] p-6 text-sm text-ink/60">Project details will be added soon. Please contact our team for current project information.</p>}
      </section>
      <section className="bg-[#f3f2ee] py-16 sm:py-20">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Looking for a place of your own?</p><h2 className="mt-3 text-3xl font-light tracking-[-.04em] sm:text-4xl">Let&apos;s find the right project.</h2></div>
          <Link href="/contact-us" className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto">Talk to our team <ArrowMark /></Link>
        </div>
      </section>
    </PageFrame>
  );
}
