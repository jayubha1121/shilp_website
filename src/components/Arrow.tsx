import type { ArrowDirection } from '@/types/content';

interface ArrowProps {
  direction?: ArrowDirection;
  className?: string; 
}

const ROTATION: Record<ArrowDirection, string> = {
  right: 'rotate-0',
  left: 'rotate-180',
  up: '-rotate-90',
  down: 'rotate-90',
};

export default function Arrow({ direction = 'right', className = '' }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-3 w-3 shrink-0 ${ROTATION[direction]} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M3 12h17M14 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}
