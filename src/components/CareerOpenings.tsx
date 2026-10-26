'use client';

import { useEffect, useState } from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import type { LiveJobOpening } from '@/lib/live-job-openings';

export default function CareerOpenings({
  openings,
  available,
}: {
  openings: LiveJobOpening[];
  available: boolean;
}) {
  const [selectedOpening, setSelectedOpening] = useState<LiveJobOpening | null>(null);
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    if (!selectedOpening) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedOpening(null);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedOpening]);

  function applyToOpening(opening: LiveJobOpening) {
    setSelectedPosition(opening.title);
    setSelectedOpening(null);
    window.setTimeout(() => {
      document.getElementById('career-application')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }


  
  return (
    <section className="shell scroll-mt-8 py-12 sm:py-16 lg:py-20" id="career-openings">
      <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.05] tracking-[-.045em]">Current openings</h2>
        <p className="mt-4 text-sm leading-6 text-ink/60">If you think you have the talent and the drive to work for the industry's most seasoned professionals with a culture built on collaboration and dedication to unparalleled quality, come and join us.</p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
      <div className="lg:pt-2">
      
        {available && openings.length > 0 && (
          <div className="space-y-3">
            {openings.map((opening, index) => (
              <button
                key={opening.id}
                type="button"
                onClick={() => setSelectedOpening(opening)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-black/10 bg-white px-4 py-5 text-left transition-all hover:-translate-y-0.5 hover:border-black/25 hover:bg-[#f8f7f4] hover:shadow-sm focus-visible:outline-offset-[-2px] sm:px-5"
                aria-label={`Read details for ${opening.title}`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f2ee] text-[10px] text-ink/50">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block text-sm font-medium">{opening.title}</span>
                  {opening.experience && <span className="mt-1 block text-xs text-ink/50">Experience: {opening.experience}</span>}
                </span>
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current text-ink/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth="1.4">
                  <path d="M3 13 13 3M4 3h9v9" />
                </svg>
              </button>
            ))}
          </div>
        )}
        {!available && <p role="status" className="mt-8 border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Current openings are temporarily unavailable. Please try again shortly.</p>}
        {available && openings.length === 0 && <p className="border border-black/10 bg-[#f8f7f4] p-5 text-sm leading-relaxed text-ink/60">There are no open positions right now. Please check back later or send us your details using the form.</p>}
      </div>
      <div>
        <div className="scroll-mt-8 rounded-2xl border border-black/[0.06] bg-[#f5f4f1] p-5 sm:p-8 lg:p-9" id="career-application">
          <p className="text-[10px] uppercase tracking-[.18em] text-ink/45">Take the next step</p>
          <h2 className="mt-3 text-xl font-light tracking-[-.035em] sm:text-2xl">Tell us about yourself.</h2>
          <p className="mt-2 text-xs leading-relaxed text-ink/55">Complete the form and your email app will open with your application details. Please attach your resume before sending.</p>
          <EnquiryForm kind="career" positions={openings.map((opening) => opening.title)} selectedPosition={selectedPosition} />
        </div>
      </div>
      </div>

      {selectedOpening && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedOpening(null); }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-opening-title"
            aria-describedby="career-opening-details"
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
          >
            <header className="flex items-center justify-between gap-5 border-b border-black/10 px-5 py-4 sm:px-8">
              <h2 id="career-opening-title" className="text-base font-medium leading-snug sm:text-lg">{selectedOpening.title}</h2>
              <button type="button" onClick={() => setSelectedOpening(null)} className="grid h-9 w-9 shrink-0 place-items-center text-ink/55 transition-colors hover:bg-black/5 hover:text-ink" aria-label="Close job details">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.5"><path d="m5 5 10 10M15 5 5 15" /></svg>
              </button>
            </header>
            <div id="career-opening-details" className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              {selectedOpening.description && <section className="mb-7"><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-ink/55">Job Description</h3><p className="mt-3 whitespace-pre-line text-sm leading-7 text-ink/75">{selectedOpening.description}</p></section>}
              {selectedOpening.responsibilities && <section className="mb-7"><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-ink/55">Key Responsibilities</h3><div className="mt-3 space-y-3 text-sm leading-7 text-ink/75">{selectedOpening.responsibilities.split(/\n+/).filter(Boolean).map((line, index) => <p key={index} className="whitespace-pre-line">{line}</p>)}</div></section>}
              {selectedOpening.qualifications && <section className="mb-7"><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-ink/55">Qualifications</h3><div className="mt-3 space-y-3 text-sm leading-7 text-ink/75">{selectedOpening.qualifications.split(/\n+/).filter(Boolean).map((line, index) => <p key={index} className="whitespace-pre-line">{line}</p>)}</div></section>}
              <dl className="grid gap-6 border-t border-black/10 pt-5 text-sm">
                <div><dt className="text-xs font-semibold uppercase tracking-[.12em] text-ink/45">Job Type</dt><dd className="mt-1 text-ink/75">{selectedOpening.jobType}</dd></div>
                {selectedOpening.location && <div><dt className="text-xs font-semibold uppercase tracking-[.12em] text-ink/45">Work Location</dt><dd className="mt-1 text-ink/75">{selectedOpening.location}</dd></div>}
                <div><dt className="text-xs font-semibold uppercase tracking-[.12em] text-ink/45">Experience</dt><dd className="mt-1 text-ink/75">{selectedOpening.experience}</dd></div>
              </dl>
            </div>
            <footer className="flex justify-end gap-3 border-t border-black/10 px-5 py-4 sm:px-8">
              <button type="button" onClick={() => setSelectedOpening(null)} className="pill text-ink/70 hover:bg-black/5">Close</button>
              <button type="button" onClick={() => applyToOpening(selectedOpening)} className="pill border-ink bg-ink text-white hover:bg-transparent hover:text-ink">Apply now <span aria-hidden="true">↗</span></button>
            </footer>
          </section>
        </div>
      )}
    </section>
  );
}
