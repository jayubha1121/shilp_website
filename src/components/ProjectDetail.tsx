'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectDetail as ProjectDetailData } from '@/types/content';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';
import { openEnquiry } from '@/components/EnquiryModal';

function getYouTubeEmbedUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    let videoId = '';
    
    if (host === 'youtu.be') {
      videoId = url.pathname.split('/').filter(Boolean)[0] || '';
    } else if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
      const segments = url.pathname.split('/').filter(Boolean);
      if (url.pathname === '/watch') videoId = url.searchParams.get('v') || '';
      else if (['embed', 'shorts', 'live'].includes(segments[0])) videoId = segments[1] || '';
    } else {
      return '';
    }

    return /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : '';
  } catch {
    return '';
  }
}

export function ProjectDetail({ project }: { project: ProjectDetailData }) {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [galleryStart, setGalleryStart] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);
  const activePlan = project.floorPlans[activePlanIndex] || project.floorPlans[0];
  const visibleGallery = Array.from({ length: Math.min(3, project.gallery.length) }, (_, offset) => project.gallery[(galleryStart + offset) % project.gallery.length]);
  const visibleUpdates = project.updates.slice(0, 2).map((update) => ({ src: update.image, alt: update.alt }));
  const youtubeEmbedUrl = getYouTubeEmbedUrl(project.youtubeUrl);

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowLeft') {
        setLightbox((current) => current
          ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length }
          : null);
      }
      if (event.key === 'ArrowRight') {
        setLightbox((current) => current
          ? { ...current, index: (current.index + 1) % current.images.length }
          : null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  return (  
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        <section className="relative h-[calc(100svh-4.5rem)] min-h-[420px] w-full overflow-hidden bg-[#8ca0ad] max-md:h-[calc(100svh-4rem)] max-md:min-h-[360px]">
          <ResponsiveBannerImage desktopImage={project.heroImage} mobileImage={project.mobileHeroImage} alt={project.heroImageAlt} priority />
          <div className="absolute inset-0 bg-black/10" />
        </section>

        <section className="bg-[#e9e9e9] pb-[8rem] pt-5 max-md:pb-16">
          <div className="shell">
          <div className="grid grid-cols-[1fr_1fr_1fr] items-start gap-8 text-[clamp(.875rem,1vw,1.2rem)] leading-[1.4] text-[#2b2b2b] max-lg:grid-cols-1 max-lg:gap-6">
            <span className="text-[clamp(1.125rem,1.5vw,1.8rem)] uppercase">{project.name}</span>
            <div className="space-y-1.5 uppercase">
              <p className="m-0">{project.category}</p>
              <p className="m-0">{project.projectState === 'Under Construction' ? project.projectState : `${project.projectState} Project`}</p>
              <p className="m-0">Progress: {project.statusPercentage}%</p>
            </div>
            <div className="flex max-w-[34rem] flex-col">
              <p className="m-0">{project.locationDescription || project.location}</p>
              {project.mapUrl && <a href={project.mapUrl} target="_blank" rel="noreferrer" className="mt-7 ml-auto inline-flex border border-[#777] px-4 py-2 text-[.72em] uppercase tracking-[.18em] transition-colors hover:bg-[#2b2b2b] hover:text-white max-md:mt-4">
                View in map <span className="ml-3" aria-hidden="true">↗</span>
              </a>}
            </div>
          </div>
          <div className="mt-[7.8rem] grid items-stretch gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14 max-lg:mt-16 max-lg:grid-cols-1 max-lg:gap-8">
            <div className="flex h-full flex-col text-[clamp(.9rem,1.12vw,1.25rem)] leading-[1.38]">
              <div>
                <p className="m-0 text-justify text-[#171717]">{project.intro}</p>
                {project.description.split('\n\n').map((paragraph) => <p key={paragraph} className="mt-10 mb-0 text-justify text-[#303030]">{paragraph}</p>)}
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-10 gap-y-4 pt-7 text-[clamp(.7rem,.8vw,.95rem)] uppercase tracking-[.12em]">
                <button type="button" onClick={() => openEnquiry(project.name)} className="w-fit border-0 border-b border-[#222] bg-transparent p-0 pb-1.5 text-left uppercase tracking-[.12em]">
                  Inquiry
                </button>
                {project.brochureUrl && <a className="w-fit border-b border-[#222] pb-1.5" href={project.brochureUrl} target="_blank" rel="noreferrer">Download brochure <span className="ml-3.5">↗</span></a>}
              </div>
            </div>
            {project.aboutImage && (
              <div className="relative mt-0 aspect-[1.2/1] w-full self-start overflow-hidden">
                <Image
                  src={project.aboutImage}
                  alt={project.aboutImageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          </div>
        </section>

        {project.floorPlans.length > 0 && activePlan && <section id="floor-plans" className="shell pb-[5.5rem] pt-[3.5rem] max-md:pb-14">
          <h2 className="m-0 text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.08]">Floor Plans</h2>
          <div className="mt-[4rem] grid grid-cols-[30%_1fr] gap-[4rem] max-md:grid-cols-1 max-md:gap-8">
            <div>
              {project.floorPlans.map((plan, index) => <button key={`${plan.label}-${index}`} onClick={() => setActivePlanIndex(index)} className={`block w-full border-0 border-b border-[#777] bg-transparent py-[1.08rem] text-left text-[clamp(1rem,1.35vw,1.45rem)] uppercase transition-colors duration-300 ${index === activePlanIndex ? 'text-[#111]' : 'text-[#969696]'}`} type="button">{plan.label}</button>)}
            </div>
            <button
              type="button"
              onClick={() => setLightbox({
                images: project.floorPlans.map((plan) => ({ src: plan.image, alt: `${plan.label} plan` })),
                index: activePlanIndex,
              })}
              aria-label={`Open ${activePlan.label} floor plan`}
              className="block w-full cursor-zoom-in overflow-hidden border-0 bg-[#45454a] p-0"
            >
              <Image src={activePlan.image} alt={`${activePlan.label} plan`} width={1138} height={1365} sizes="(max-width: 700px) 100vw, 65vw" unoptimized className="h-auto w-full object-contain opacity-75" />
            </button>
          </div>
        </section>}

        {project.gallery.length > 0 && <section className="shell border-t border-[#eee] pb-[72px] pt-[68px] max-md:pb-14">
          <div className="flex items-baseline justify-between gap-5"><h2 className="m-0 text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.08]">Project Views</h2></div>
          <div className="mt-7 grid grid-cols-3 gap-6 max-md:gap-3">{visibleGallery.map((image, index) => <button
            key={`${image.src}-${galleryStart}-${index}`}
            type="button"
            onClick={() => setLightbox({
              images: project.gallery.map((item) => ({ src: item.src, alt: item.alt })),
              index: (galleryStart + index) % project.gallery.length,
            })}
            aria-label={`Open project view image ${(galleryStart + index) % project.gallery.length + 1}`}
            className="m-0 aspect-square cursor-zoom-in overflow-hidden rounded-[4px] border-0 bg-[#f1f2f1] p-0"
          ><Image src={image.src} alt={image.alt} width={900} height={900} unoptimized className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]" /></button>)}</div>
          {project.gallery.length > 1 && <div className="mt-4 flex justify-between">
            <button type="button" onClick={() => setGalleryStart((start) => (start - 1 + project.gallery.length) % project.gallery.length)} className="grid h-10 w-10 place-items-center text-black/70 transition-colors hover:bg-black/5 hover:text-black" aria-label="Previous project images"><ChevronLeft size={22} /></button>
            <button type="button" onClick={() => setGalleryStart((start) => (start + 1) % project.gallery.length)} className="grid h-10 w-10 place-items-center text-black/70 transition-colors hover:bg-black/5 hover:text-black" aria-label="Next project images"><ChevronRight size={22} /></button>
          </div>}
        </section>}

        {project.amenities.length > 0 && <section className="shell pb-[72px] pt-10 max-md:pb-14">
          <div className="grid grid-cols-[1fr_2fr] gap-10 max-md:grid-cols-1 max-md:gap-6">
            <h2 className="m-0 text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.08]">Amenities</h2>
            <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">{project.amenities.map((amenity, index) => <figure key={`${amenity.title}-${index}`} className="m-0 flex min-w-0 flex-col items-center gap-3 text-center"><div className="relative grid aspect-square w-full max-w-[148px] place-items-center overflow-hidden rounded-full border border-black/45 bg-white">{amenity.image && <Image src={amenity.image} alt={amenity.alt} fill unoptimized className="object-contain p-7" />}</div><figcaption className="text-[clamp(.8rem,1.1vw,1.1rem)] leading-tight">{amenity.title}</figcaption></figure>)}</div>
          </div>
        </section>}

        {youtubeEmbedUrl && <section className="shell pb-[72px] max-md:pb-14">
          <div className="relative aspect-video overflow-hidden bg-[#34343a]">
            <iframe
              title={`${project.name} project video`}
              src={youtubeEmbedUrl}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </section>}

        <div className="bg-[linear-gradient(180deg,#ffffff_0%,#d9d9d9_100%)]">
        {project.updates.length > 0 && <section className="shell grid grid-cols-[1fr_1fr_1fr] items-start gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-7 py-[68px] max-md:grid-cols-2 max-md:py-14 max-sm:grid-cols-1">
          <div>
            <h2 className="m-0 text-[clamp(1.75rem,3vw,3.2rem)] font-light leading-[1.08]">Project Updates</h2>
            {project.updatesTitle && <p className="mt-3 text-sm uppercase">{project.updatesTitle}</p>}
          </div>
          {visibleUpdates.map((update, index) => <button
            key={`${update.src}-${index}`}
            type="button"
            onClick={() => setLightbox({ images: visibleUpdates, index })}
            aria-label={`Open project update image ${index + 1}`}
            className="relative m-0 block aspect-[506/625] w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0"
          >
            <Image src={update.src} alt={update.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, 28vw" unoptimized className="object-cover transition-transform duration-300 hover:scale-[1.02]" />
          </button>)}
        </section>}

        {lightbox && lightbox.images[lightbox.index] && <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project update image viewer"
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[min(78svh,850px)] w-[min(90vw,1400px)]">
              <Image
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].alt}
                fill
                sizes="90vw"
                unoptimized
                className="object-contain"
              />
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image viewer"
              className="absolute right-0 top-0 grid h-12 w-12 place-items-center text-white transition-colors hover:bg-white/15"
            >
              <X size={28} />
            </button>
            {lightbox.images.length > 1 && <>
              <button
                type="button"
                onClick={() => setLightbox((current) => current
                  ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length }
                  : null)}
                aria-label="Previous project update image"
                className="absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-white transition-colors hover:bg-white/15 sm:left-4"
              >
                <ChevronLeft size={34} />
              </button>
              <button
                type="button"
                onClick={() => setLightbox((current) => current
                  ? { ...current, index: (current.index + 1) % current.images.length }
                  : null)}
                aria-label="Next project update image"
                className="absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-white transition-colors hover:bg-white/15 sm:right-4"
              >
                <ChevronRight size={34} />
              </button>
            </>}
          </div>
        </div>}

        {project.faqs.length > 0 && <section className="shell py-14"><h2 className="text-3xl font-light">Frequently Asked Questions</h2><div className="mt-6 divide-y divide-black/15">{project.faqs.map((faq, index) => <details key={`${faq.question}-${index}`} className="py-4"><summary className="cursor-pointer text-sm font-medium">{faq.question}</summary><p className="mt-3 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-black/70">{faq.answer}</p></details>)}</div></section>}

        {project.details && <section>
          <div className="shell grid gap-8 py-16 md:grid-cols-[1fr_2fr]">
            <h2 className="text-3xl font-light">RERA Details</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed">{project.details}</p>
          </div>
        </section>}
        </div>
      </main>
      <Footer />
    </>
  );
}
