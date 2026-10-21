'use client';

import { useEffect, useState } from 'react';

type ResponsiveBannerImageProps = {
  desktopImage?: string;
  mobileImage?: string;
  fallbackImage?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export default function ResponsiveBannerImage({
  desktopImage,
  mobileImage,
  fallbackImage,
  alt = '',
  priority = false,
  className = 'object-cover',
}: ResponsiveBannerImageProps) {
  const [usingFallback, setUsingFallback] = useState(false);
  useEffect(() => {
    setUsingFallback(false);
  }, [desktopImage, mobileImage]);

  const mobileSource = usingFallback ? fallbackImage : mobileImage || desktopImage;
  const desktopSource = usingFallback ? fallbackImage : desktopImage || mobileImage;

  if (!mobileSource) return null;

  return (
    <picture className="absolute inset-0 block">
      {desktopSource && desktopSource !== mobileSource && (
        <source media="(min-width: 768px)" srcSet={desktopSource} />
      )}
      <img
        src={mobileSource}
        alt={alt}
        className={`h-full w-full ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => {
          if (!usingFallback && fallbackImage && fallbackImage !== mobileSource && fallbackImage !== desktopSource) {
            setUsingFallback(true);
          }
        }}
      />
    </picture>
  );
}
