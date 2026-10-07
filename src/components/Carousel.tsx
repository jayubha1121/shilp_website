'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import Arrow from './Arrow';

interface CarouselProps {
  children: ReactNode;
  /** Switches control colours for the black "Words" section. */
  dark?: boolean;
  controlsClassName?: string;
}

export default function Carousel({ children, dark = false, controlsClassName = '' }: CarouselProps) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1): void => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.6, behavior: 'smooth' });
  };

  const tone = dark ? 'text-white/60 hover:text-white' : 'text-slate hover:text-ink';

  return (
    <div>
      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className={`mt-8 flex items-center justify-between ${controlsClassName}`}>
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className={`transition-colors duration-200 ${tone}`}
        >
          <Arrow direction="left" className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className={`transition-colors duration-200 ${tone}`}
        >
          <Arrow className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
