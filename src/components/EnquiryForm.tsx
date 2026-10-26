'use client';

import { FormEvent, useEffect, useState } from 'react';

export default function EnquiryForm({
  kind,
  positions = [],
  selectedPosition = '',
  projects,
  selectedProject = '',
  variant = 'default',
}: {
  kind: 'contact' | 'career';
  positions?: string[];
  selectedPosition?: string;
  projects?: string[];
  selectedProject?: string;
  variant?: 'default' | 'modal';
}) {
  const [notice, setNotice] = useState('');
  const [designation, setDesignation] = useState(selectedPosition);
  const [project, setProject] = useState(selectedProject);
  const isCareer = kind === 'career';
  const isModal = variant === 'modal';
  const projectOptions = projects?.length ? projects : projectsSelectOptions;

  useEffect(() => {
    if (selectedPosition) setDesignation(selectedPosition);
  }, [selectedPosition]);

  useEffect(() => {
    setProject(selectedProject);
  }, [selectedProject]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Array.from(form.entries())
      .filter(([key]) => key !== 'resume')
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    const resume = form.get('resume');
    const resumeName = resume instanceof File && resume.name ? resume.name : '';
    const body = [values, resumeName ? `Resume selected: ${resumeName} (please attach this file to your email)` : '']
      .filter(Boolean)
      .join('\n\n');
    const subject = isCareer ? 'Career application - SHILP Group' : 'Website enquiry - SHILP Group';
    setNotice(isCareer
      ? 'Your email app is opening. Please attach your resume before sending.'
      : 'Your email app is opening with your enquiry details.');
    window.location.href = `mailto:sales@shilp.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClass = isModal
    ? 'mt-1.5 w-full rounded-2xl border border-black/20 bg-white px-4 py-2.5 text-sm leading-5 text-ink outline-none placeholder:text-ink/45 focus:border-black'
    : 'mt-2 w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-black';
  const labelClass = isModal ? 'block text-sm text-ink/70' : 'block text-xs text-ink/60';

  return (
    <form onSubmit={handleSubmit} className={isCareer ? 'mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2' : isModal ? 'mt-4 space-y-2.5 sm:space-y-3' : 'mt-7 space-y-5'}>
      <label className={`${labelClass} ${isCareer ? 'sm:col-span-2' : ''}`}>
        {isModal ? '' : 'Your name'}
        <input className={inputClass} name="Name" autoComplete="name" required placeholder={isModal ? 'Your Name' : 'Full name'} />
      </label>
      <div className={`grid gap-2.5 ${isModal ? '' : 'sm:grid-cols-2'} ${isCareer ? 'sm:col-span-2' : ''}`}>
        <label className={labelClass}>
          {isModal ? '' : 'Email address'}
          <input className={inputClass} name="Email" type="email" autoComplete="email" required placeholder={isModal ? 'Email Id' : 'you@example.com'} />
        </label>
        <label className={labelClass}>
          {isModal ? '' : 'Contact number'}
          <input className={inputClass} name="Contact number" type="tel" autoComplete="tel" required placeholder={isModal ? 'Contact No.' : '+91'} />
        </label>
      </div>
      {isCareer ? (
        <>
          <label className={labelClass}>
            Designation
            <select className={inputClass} name="Designation" required value={designation} onChange={(event) => setDesignation(event.target.value)}>
              <option value="" disabled>Select a role</option>
              {positions.map((position) => <option key={position} value={position}>{position}</option>)}
              <option value="Other">Other</option>
            </select>
          </label>
          <label className={labelClass}>
            Upload resume
          <input className="mt-2 block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-xs text-ink/60 file:mr-3 file:border-0 file:bg-[#e9e8e4] file:px-3 file:py-1.5 file:text-xs" name="resume" type="file" accept=".pdf,.doc,.docx" />
          </label>
        </>
      ) : (
        <label className={`${labelClass} ${isCareer ? 'sm:col-span-2' : ''}`}>
          {isModal ? '' : 'Project of interest'}
          <select className={inputClass} name="Project" value={project} onChange={(event) => setProject(event.target.value)} required>
            <option value="" disabled>{isModal ? 'Select Project' : 'Select a project'}</option>
            {selectedProject && !projectOptions.includes(selectedProject) && <option value={selectedProject}>{selectedProject}</option>}
            {projectOptions.filter((projectName) => projectName !== 'Other').map((projectName) => <option key={projectName} value={projectName}>{projectName}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
      )}
      <label className={labelClass}>
        {isModal ? '' : isCareer ? 'Your message' : 'Your message / additional requirements'}
        <textarea className={`${inputClass} ${isModal ? 'min-h-[5.5rem]' : 'min-h-20'} resize-y`} name="Message" rows={isModal ? 3 : 3} placeholder={isModal ? 'Your Message / Additional Requirements' : 'Write a message'} />
      </label>
      {isCareer && (
        <label className="flex items-start gap-3 text-xs leading-relaxed text-ink/60 sm:col-span-2">
          <input className="mt-0.5 accent-black" name="Consent" type="checkbox" value="Agreed" required />
          I agree that the information I submit may be used to respond to my application.
        </label>
      )}
      <button type="submit" className={isModal
        ? 'inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-black/80'
        : 'pill border-ink bg-ink text-white hover:bg-transparent hover:text-ink'}>
        {isCareer ? 'Send application' : isModal ? 'Submit' : 'Send enquiry'}
        {!isModal && <span aria-hidden="true" className="text-base leading-none">↗</span>}
      </button>
      {!isModal && <p aria-live="polite" className={`min-h-4 text-[11px] text-ink/55 ${isCareer ? 'sm:col-span-2' : ''}`}>{notice}</p>}
      {!isModal && <p className={`text-[10px] leading-relaxed text-ink/45 ${isCareer ? 'sm:col-span-2' : ''}`}>This form opens your default email application; your information is not submitted to a website server.</p>}
    </form>
  );
}

const projectsSelectOptions = [
  'Shilp Ananta',
  'Shilp Sacred',
  'Shilp Celestial',
  'Shilp Twin Tower',
  'Shilp SkyLine',
  'Shilp Incubation Centre',
];
