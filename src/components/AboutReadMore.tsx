'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function AboutReadMore({ paragraphs }: { paragraphs: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="space-y-4">
        {paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-4 w-fit border-0 border-b border-current bg-transparent p-0 text-sm text-ink/65 underline underline-offset-4 transition-colors hover:text-ink"
      >
        Read more
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-read-more-title"
            className="flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white font-sans shadow-2xl sm:rounded-3xl"
          >
            <header className="flex shrink-0 items-center justify-between gap-5 border-b border-black/10 px-5 py-4 sm:px-8 sm:py-5">
              <h2 id="about-read-more-title" className="text-2xl font-light text-ink/70 sm:text-4xl">
                Place matters because people matter.
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close About SHILP"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-black/5"
              >
                <X size={24} />
              </button>
            </header>
            <div className="overflow-y-auto px-5 py-6 text-sm leading-[1.65] text-ink/65 sm:px-8 sm:py-7 sm:text-base">
              <div className="space-y-5">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
