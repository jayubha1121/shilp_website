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

// Add each member's profile URLs in their social fields below (facebook, instagram, linkedin, x).
// The same URLs are used by the icon bars under the cards and inside each profile popup.
export const team = [
  { name: 'Yash Brahmbhatt', role: 'Founder and Chief Executive Officer', image: '/images/team/yash-profile.png', bio: 'A trailblazer in the real estate industry, Yash is a visionary whose ideas are as meticulously designed as the elevations he brings to life. Under his leadership, the Shilp Group has become synonymous with fulfilling every promise it makes. His deep understanding and expertise in the market have provided the company with a distinct advantage, setting it well ahead of the competition. Driven by his vision, he strives to establish a one-of-a-kind real estate platform that seamlessly addresses the nuanced demands of modern living, both at home and in the workplace.', social: { facebook: 'https://www.facebook.com/yashgb', instagram: 'https://www.instagram.com/yashbrahmbhatt.yb/?hl=en', linkedin: 'https://www.linkedin.com/in/yash-brahmbhatt-32170184', x: 'https://x.com/YashB1016' } },
  { name: 'Snehal Brahmbhatt', role: 'Director of Shilp Group', image: '/images/team/snehal-profile.png', bio: 'A dynamic and passionate individual, Snehal is a cornerstone of the organization, leading its Marketing, PR, and Communication initiatives with exceptional skill. Her dedication and visionary approach contribute significantly to shaping the company’s brand and outreach efforts. Beyond her professional excellence, Snehal is deeply committed to giving back to society. As the founder of the Shenshilp Foundation, she tirelessly works with her team to improve the lives of Indian youth by addressing their educational needs, ensuring daily food availability, and raising awareness about building a society free from vices like drug abuse. A true blend of dynamism and compassion, Snehal brings invaluable perspective to the organization’s vital decisions.', social: { facebook: 'https://www.facebook.com/share/15gKKHinbn/?mibextid=wwXIfr', instagram: 'https://www.instagram.com/snehalbrahmbhatt_', linkedin: 'https://x.com/snehalyash?s=21&t=2-c8BUDPM83Pn1UYV06ZzQ', x: 'https://www.linkedin.com/in/snehal-brahmbhatt-a52301174/' } },
  { name: 'Arpan Barot', role: 'Group General Manager', image: '/images/team/arpan-profile.png', bio: 'Arpan, a steadfast pillar of the company, has consistently delivered excellence and contributed significantly to the growth of Shilp. With unwavering dedication, he has played a pivotal role in the firm’s success. Known for his integrity and strong ethical values, Arpan exemplifies perseverance and commitment. He is always focused on setting new benchmarks in organizational management and growth, ensuring exceptional experiences for both internal and external stakeholders alike.', social: { facebook: 'https://www.facebook.com/share/1DBMQuwG9Q/', instagram: 'https://www.instagram.com/arpan_barot01/', linkedin: 'https://x.com/BarotArpan', x: 'https://www.linkedin.com/in/arpan-barot-83bb95213/' } },
  { name: 'Saumil Patel', role: 'General Manager - Sales', image: '/images/team/saumil-profile.png', bio: 'Saumil is the driving force behind ensuring Shilp Group’s projects captivate and connect with customers. He has elevated business development standards by crafting seamless sales channels that enable customers to embrace the Shilp lifestyle of working and living from the very inception of each project. Renowned as an outstanding leader, a skilled problem solver, and a dependable mentor, Saumil fosters a sales culture that prioritizes customer satisfaction above all else.', social: { facebook: 'https://www.facebook.com/share/1BPRUCzN7p/', instagram: 'https://www.instagram.com/saumil171188?igsh=MXNmNnpuejMwNTk5cw==', linkedin: 'https://www.linkedin.com/in/saumil-patel-257a3a12/', x: 'https://www.facebook.com/share/1DBMQuwG9Q/' } },
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

export function IntroHeading({ eyebrow, title, text, titleClassName, textClassName, centered = false }: { eyebrow: string; title: string; text: string; titleClassName?: string; textClassName?: string; centered?: boolean }) {
  return (
    <div className={`grid gap-6 border-b border-black/10 pb-8 sm:pb-10 ${centered ? 'text-center' : eyebrow ? 'sm:grid-cols-[.8fr_1.2fr] sm:items-end' : ''}`}>
      {eyebrow && <p className="text-[10px] uppercase tracking-[.2em] text-ink/50">{eyebrow}</p>}
      <div className={centered ? 'flex flex-col items-center' : ''}>
        <h2 className={`max-w-3xl ${titleClassName || 'text-[clamp(2rem,4.2vw,4rem)]'} font-light leading-[1.04] tracking-[-.045em]`}>{title}</h2>
        <p className={`mt-5 max-w-2xl text-sm leading-relaxed ${textClassName || 'text-ink/65'}`}>{text}</p>
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
