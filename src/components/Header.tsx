'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';
import Arrow from './Arrow';
import { primaryNav, headerCta } from '@data/site';

type ProjectCategory = 'commercial' | 'residential' | 'plotted';

interface HeaderProject {
  id: string;
  slug: string;
  typeOfProject: ProjectCategory;
  projectDetail: { title: string; shortAddress: string };
  location: { city: string };
}

const projectCategories: { type: ProjectCategory; label: string }[] = [
  { type: 'commercial', label: 'Commercial' },
  { type: 'residential', label: 'Residential' },
  { type: 'plotted', label: 'Plotted' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [projects, setProjects] = useState<HeaderProject[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production'
      ? 'https://shilp-backend-dusky.vercel.app'
      : 'http://localhost:8081');

    fetch(`${apiUrl}/api/projects?limit=200`)
      .then((response) => {
        if (!response.ok) throw new Error('Projects unavailable');
        return response.json() as Promise<{ data?: HeaderProject[] }>;
      })
      .then((result) => {
        if (!cancelled) setProjects(Array.isArray(result.data) ? result.data : []);
      })
      .catch(() => {
        if (!cancelled) setProjects([]);
      })
      .finally(() => {
        if (!cancelled) setProjectsLoaded(true);
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white text-ink shadow-[0_1px_12px_rgba(0,0,0,0.04)]">
      <div className="shell flex min-h-[4rem] items-center justify-between py-3 sm:min-h-[4.5rem] sm:py-3.5 md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="Shilp home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-14 md:flex xl:gap-20">
          {primaryNav.map((entry) => {
            const isProjects = entry.label === 'Projects';
            const hasChildren = entry.children.length > 0 || isProjects;

            return (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(entry.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {isProjects ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openMenu === entry.label}
                    onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                    className="flex items-center gap-2 border-0 bg-transparent p-0 text-[10px] uppercase tracking-micro text-ink/75 transition-colors duration-200 hover:text-ink"
                  >
                    {entry.label}
                    <Arrow direction="down" className="h-2.5 w-2.5 opacity-70" />
                  </button>
                ) : (
                  <Link
                    href={entry.href}
                    target={entry.href.startsWith('https://') ? '_blank' : undefined}
                    rel={entry.href.startsWith('https://') ? 'noreferrer' : undefined}
                    aria-haspopup={hasChildren || undefined}
                    aria-expanded={hasChildren ? openMenu === entry.label : undefined}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-micro text-ink/75 transition-colors duration-200 hover:text-ink"
                  >
                    {entry.label}
                    {hasChildren && <Arrow direction="down" className="h-2.5 w-2.5 opacity-70" />}
                  </Link>
                )}

                {isProjects && openMenu === entry.label && (
                  <div className="absolute left-1/2 top-full w-[min(92vw,720px)] -translate-x-1/2 pt-5">
                    <div className="grid max-h-[70vh] grid-cols-3 gap-6 overflow-y-auto border border-black/10 bg-white px-6 py-5 shadow-lg">
                      {projectCategories.map((category) => {
                        const categoryProjects = projects.filter((project) => project.typeOfProject === category.type);
                        return (
                          <section key={category.type}>
                            <h2 className="mb-3 text-[9px] uppercase tracking-micro text-ink/45">{category.label}</h2>
                            {categoryProjects.map((project) => (
                              <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                onClick={() => setOpenMenu(null)}
                                className="block border-b border-black/10 py-2.5 text-[10px] uppercase tracking-micro text-ink/75 last:border-b-0 hover:text-ink"
                              >
                                <span className="block">{project.projectDetail.title}</span>
                                <span className="mt-1 block text-[9px] normal-case tracking-normal text-ink/45">
                                  {project.projectDetail.shortAddress || project.location.city}
                                </span>
                              </Link>
                            ))}
                            {projectsLoaded && categoryProjects.length === 0 && (
                              <p className="text-[10px] text-ink/45">No projects</p>
                            )}
                          </section>
                        );
                      })}
                      {!projectsLoaded && <p className="col-span-3 text-[10px] text-ink/45">Loading projects…</p>}
                    </div>
                  </div>
                )}

                {!isProjects && hasChildren && openMenu === entry.label && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-6">
                    <div className="border border-black/10 bg-white px-6 py-5 shadow-lg">
                      {entry.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between border-b border-black/10 py-3 text-[10px] uppercase tracking-micro text-ink/70 last:border-b-0 hover:text-ink"
                        >
                          {child.label}
                          <Arrow className="-rotate-45 opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <Link
            href={headerCta.href}
            className="pill hidden text-ink/75 hover:bg-ink hover:text-white sm:inline-flex"
          >
            {headerCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="shell max-h-[calc(100svh-4rem)] space-y-1 overflow-y-auto border-t border-black/10 bg-white py-6">
            {primaryNav.map((entry) => {
              const isProjects = entry.label === 'Projects';
              return <div key={entry.label}>
                {isProjects ? (
                  <button
                    type="button"
                    aria-expanded={mobileProjectsOpen}
                    onClick={() => setMobileProjectsOpen((open) => !open)}
                    className="flex w-full items-center justify-between border-0 bg-transparent py-3 text-left text-[11px] uppercase tracking-micro text-ink"
                  >
                    {entry.label}<Arrow direction="down" className="h-3 w-3" />
                  </button>
                ) : (
                  <Link
                    href={entry.href}
                    target={entry.href.startsWith('https://') ? '_blank' : undefined}
                    rel={entry.href.startsWith('https://') ? 'noreferrer' : undefined}
                    className="block py-3 text-[11px] uppercase tracking-micro text-ink"
                  >
                    {entry.label}
                  </Link>
                )}
                {isProjects && mobileProjectsOpen && (
                  <div className="grid grid-cols-1 gap-4 pb-4 pl-4">
                    {projectCategories.map((category) => (
                      <section key={category.type}>
                        <h2 className="mb-2 text-[9px] uppercase tracking-micro text-ink/45">{category.label}</h2>
                        {projects.filter((project) => project.typeOfProject === category.type).map((project) => (
                          <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            onClick={() => { setMobileOpen(false); setMobileProjectsOpen(false); }}
                            className="block py-2 text-[10px] uppercase tracking-micro text-ink/70"
                          >
                            {project.projectDetail.title}
                          </Link>
                        ))}
                      </section>
                    ))}
                    {projectsLoaded && projects.length === 0 && <p className="text-[10px] text-ink/45">No projects</p>}
                    {!projectsLoaded && <p className="text-[10px] text-ink/45">Loading projects…</p>}
                  </div>
                )}
                {entry.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block py-2 pl-5 text-[10px] uppercase tracking-micro text-ink/60"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>;
            })}

            <Link href={headerCta.href} className="pill mt-4 text-ink">
              {headerCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
