import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';

export function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.4">
      <path d="M3 13 13 3M4 3h9v9" />
    </svg>
  );
}

export const team = [
  { name: 'Yash Brahmbhatt', role: 'Founder and Chief Executive Officer', image: '/images/team/yash-profile.png' },
  { name: 'Snehal Brahmbhatt', role: 'Director of Shilp Group', image: '/images/team/snehal-profile.png' },
  { name: 'Arpan Barot', role: 'Group General Manager', image: '/images/team/arpan-profile.png' },
  { name: 'Saumil Patel', role: 'General Manager - Sales', image: '/images/team/saumil-profile.png' },
];

export function PageHero({
  label,
  title,
  description,
  image,
  mobileImage,
  imageAlt = '',
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
  mobileImage?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[34rem] overflow-hidden bg-[#28343b] text-white sm:h-[calc(100svh-4.5rem)] sm:min-h-0">
      <ResponsiveBannerImage desktopImage={image} mobileImage={mobileImage} alt={imageAlt} priority />
      <div className="sr-only">
        <p>{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function IntroHeading({ eyebrow, title, text, titleClassName, centered = false }: { eyebrow: string; title: string; text: string; titleClassName?: string; centered?: boolean }) {
  return (
    <div className={`grid gap-6 border-b border-black/10 pb-8 sm:pb-10 ${centered ? 'text-center' : eyebrow ? 'sm:grid-cols-[.8fr_1.2fr] sm:items-end' : ''}`}>
      {eyebrow && <p className="text-[10px] uppercase tracking-[.2em] text-ink/50">{eyebrow}</p>}
      <div className={centered ? 'flex flex-col items-center' : ''}>
        <h2 className={`max-w-3xl ${titleClassName || 'text-[clamp(2rem,4.2vw,4rem)]'} font-light leading-[1.04] tracking-[-.045em]`}>{title}</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/65">{text}</p>
      </div>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-white">{children}</main>
      <Footer />
    </>
  );
}
