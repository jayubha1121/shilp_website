'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';

const enquiryEventName = 'shilp:open-enquiry';

type EnquiryRequest = { project?: string };
type ApiProject = { projectDetail?: { title?: string } };

export function openEnquiry(project?: string) {
  window.dispatchEvent(new CustomEvent<EnquiryRequest>(enquiryEventName, {
    detail: { project },
  }));
}

export default function EnquiryModal() {
  const [selectedProject, setSelectedProject] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<string[]>([]);
  const [projectsError, setProjectsError] = useState('');

  useEffect(() => {
    let cancelled = false;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production'
      ? 'https://shilp-backend-dusky.vercel.app'
      : 'http://localhost:8081');

    fetch(`${apiUrl}/api/projects?limit=200`)
      .then((response) => {
        if (!response.ok) throw new Error(`Projects could not be loaded (${response.status}).`);
        return response.json() as Promise<{ data?: ApiProject[] }>;
      })
      .then((result) => {
        if (cancelled) return;
        const names = Array.isArray(result.data)
          ? result.data.map((project) => project.projectDetail?.title).filter((name): name is string => Boolean(name))
          : [];
        setProjects(names);
        if (!names.length) setProjectsError('Project choices are unavailable right now. You can still select “Other”.');
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setProjectsError(error instanceof Error ? error.message : 'Projects could not be loaded.');
      });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const request = (event as CustomEvent<EnquiryRequest>).detail;
      setSelectedProject(request?.project || '');
      setIsOpen(true);
    };

    window.addEventListener(enquiryEventName, handleOpen);
    return () => window.removeEventListener(enquiryEventName, handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative grid h-[min(94dvh,760px)] w-[min(94vw,620px)] grid-cols-1 grid-rows-1 overflow-hidden rounded-[1.75rem] bg-white md:h-[min(94dvh,760px)] md:w-[min(90vw,1000px)] md:grid-cols-2 lg:w-[min(80vw,1120px)] 2xl:w-[min(70vw,1180px)]"
      >
        <div className="relative z-10 min-h-0 min-w-0 overflow-hidden p-4 pt-12 sm:p-6 sm:pt-12 md:flex md:flex-col md:justify-center md:p-8 lg:p-10">
          <p className="text-sm font-bold text-ink/70 sm:text-base">Interested in a Property?</p>
          <h2 id="enquiry-modal-title" className="mt-1 text-[clamp(1.8rem,3.4vw,2.75rem)] font-extrabold leading-tight tracking-[-.045em] text-[#1f2937]">
            Let’s Connect.
          </h2>
          <EnquiryForm kind="contact" variant="modal" projects={projects} selectedProject={selectedProject} />
          {projectsError && <p role="status" className="mt-2 text-xs text-ink/55">{projectsError}</p>}
        </div>
        <div className="relative hidden min-h-0 bg-[#e8e7e2] md:block">
          <Image
            src="/vaishnodevi-banner.webp"
            alt="Vaishnodevi project banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-white md:right-4 md:top-4"
        >
          <X size={24} />
        </button>
      </section>
    </div>
  );
}
