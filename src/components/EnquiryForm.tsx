'use client';

import { FormEvent, useEffect, useState } from 'react';

export default function EnquiryForm({ kind, positions = [], selectedPosition = '' }: { kind: 'contact' | 'career'; positions?: string[]; selectedPosition?: string }) {
  const [notice, setNotice] = useState('');
  const [designation, setDesignation] = useState(selectedPosition);
  const isCareer = kind === 'career';

  useEffect(() => {
    if (selectedPosition) setDesignation(selectedPosition);
  }, [selectedPosition]);

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

  const inputClass = `mt-2 w-full border-0 border-b border-black/20 bg-transparent px-0 ${isCareer ? 'py-2' : 'py-3'} text-sm outline-none placeholder:text-ink/35 focus:border-black`;
  const labelClass = 'block text-xs text-ink/60';

  return (
    <form onSubmit={handleSubmit} className={isCareer ? 'mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2' : 'mt-7 space-y-5'}>
      <label className={`${labelClass} ${isCareer ? 'sm:col-span-2' : ''}`}>
        Your name
        <input className={inputClass} name="Name" autoComplete="name" required placeholder="Full name" />
      </label>
      <div className={`grid gap-5 sm:grid-cols-2 ${isCareer ? 'sm:col-span-2' : ''}`}>
        <label className={labelClass}>
          Email address
          <input className={inputClass} name="Email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </label>
        <label className={labelClass}>
          Contact number
          <input className={inputClass} name="Contact number" type="tel" autoComplete="tel" required placeholder="+91" />
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
            <input className="mt-3 block w-full text-xs text-ink/60 file:mr-4 file:border-0 file:bg-white file:px-4 file:py-2 file:text-xs" name="resume" type="file" accept=".pdf,.doc,.docx" />
          </label>
        </>
      ) : (
        <label className={`${labelClass} ${isCareer ? 'sm:col-span-2' : ''}`}>
          Project of interest
          <select className={inputClass} name="Project" defaultValue="">
            <option value="">Select a project</option>
            {projectsSelectOptions.map((project) => <option key={project} value={project}>{project}</option>)}
          </select>
        </label>
      )}
      <label className={labelClass}>
        {isCareer ? 'Your message' : 'Your message / additional requirements'}
        <textarea className={`${inputClass} min-h-24 resize-y`} name="Message" rows={3} placeholder="Write a message" />
      </label>
      {isCareer && (
        <label className="flex items-start gap-3 text-xs leading-relaxed text-ink/60 sm:col-span-2">
          <input className="mt-0.5 accent-black" name="Consent" type="checkbox" value="Agreed" required />
          I agree that the information I submit may be used to respond to my application.
        </label>
      )}
      <button type="submit" className={`pill border-ink bg-ink text-white hover:bg-transparent hover:text-ink ${isCareer ? 'w-fit' : ''}`}>
        {isCareer ? 'Send application' : 'Send enquiry'}
        <span aria-hidden="true" className="text-base leading-none">↗</span>
      </button>
      <p aria-live="polite" className={`min-h-4 text-[11px] text-ink/55 ${isCareer ? 'sm:col-span-2' : ''}`}>{notice}</p>
      <p className={`text-[10px] leading-relaxed text-ink/45 ${isCareer ? 'sm:col-span-2' : ''}`}>This form opens your default email application; your information is not submitted to a website server.</p>
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
  'Other',
];
