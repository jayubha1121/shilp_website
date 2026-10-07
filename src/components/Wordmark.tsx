interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'lg';
  variant?: 'black' | 'white';
}

export default function Wordmark({ className = '', size = 'sm', variant = 'black' }: WordmarkProps) {
  const width = size === 'lg' ? 'w-[min(100%,39rem)]' : 'w-32 sm:w-36';
  const logo = variant === 'white' ? '/Logo/shilp-group-footer-logo.svg' : '/Logo/shilp-group-black-logo.svg';

  return (
    <img
      src={logo}
      alt="Shilp"
      className={`block h-auto ${width} ${className}`}
    />
  );
}
