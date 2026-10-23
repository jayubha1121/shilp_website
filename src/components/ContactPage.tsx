import EnquiryForm from '@/components/EnquiryForm';
import { ArrowMark, PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';

export default async function ContactPage() {
  const banner = await getLivePageBanner('contact-us');
  return (
    <PageFrame>
      <PageHero label="Contact us" title="We’re here to help." description="Talk to our team about a home, a workplace or your next investment in Ahmedabad and GIFT City." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell grid items-start gap-10 py-12 sm:gap-14 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-20">
        <div className="pt-1 lg:sticky lg:top-24">
          <h2 className="mt-4 text-[clamp(1.45rem,2.4vw,2.25rem)] font-light leading-tight tracking-[-.05em] sm:whitespace-nowrap">Let&apos;s start a conversation.</h2>
          <address className="mt-8 not-italic text-sm leading-7 text-ink/65">
            <strong className="font-medium tracking-wide text-ink">SHILP HOUSE</strong><br />
            Besides Rajpath Club, Rajpath Rangoli Road,<br className="hidden sm:block" />
            Bodakdev, Ahmedabad-380054,<br />
            Gujarat, India.
          </address>
          <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1">
            <a className="w-fit hover:text-ink/60" href="tel:+919898211567">+91 9898211567</a>
            <a className="w-fit hover:text-ink/60" href="tel:+919898508567">+91 9898508567</a>
            <a className="w-fit text-ink/65 hover:text-ink" href="mailto:sales@shilp.co.in">sales@shilp.co.in</a>
            <a className="w-fit text-ink/65 hover:text-ink" href="mailto:saumil@shilp.co.in">saumil@shilp.co.in</a>
          </div>
          <a className="pill mt-8 text-ink hover:bg-ink hover:text-white" href="https://maps.google.com/?q=Shilp+House+Rajpath+Rangoli+Road+Ahmedabad" target="_blank" rel="noreferrer">
            Get directions <ArrowMark />
          </a>
        </div>
        <div className="min-w-0">
          <div className="border border-black/[0.04] bg-[#f5f4f1] p-6 sm:p-9 lg:p-10">
            <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Send an enquiry</p>
            <h2 className="mt-4 text-2xl font-light tracking-[-.035em] sm:text-3xl">How can we help?</h2>
            <p className="mt-3 text-xs leading-relaxed text-ink/55">Complete the form and your email app will open with your enquiry details.</p>
            <EnquiryForm kind="contact" />
          </div>
        </div>
      </section>
      <section className="shell pb-12 sm:pb-16" aria-label="Find Shilp Group on the map">
        <div className="relative aspect-[16/7] min-h-64 overflow-hidden bg-[#e5e4df] sm:min-h-[24rem]">
          <iframe
            title="Shilp Group location on Google Maps"
            src="https://www.google.com/maps?output=embed&cid=11030215145385851353"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://www.google.com/maps?cid=11030215145385851353&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 rounded-full bg-white px-5 py-3 text-xs font-medium text-ink shadow-lg transition-colors hover:bg-ink hover:text-white"
          >
            Open in Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PageFrame>
  );
}
