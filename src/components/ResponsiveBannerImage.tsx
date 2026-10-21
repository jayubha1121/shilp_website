type ResponsiveBannerImageProps = {
  desktopImage?: string;
  mobileImage?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export default function ResponsiveBannerImage({
  desktopImage,
  mobileImage,
  alt = '',
  priority = false,
  className = 'object-cover',
}: ResponsiveBannerImageProps) {
  const mobileSource = mobileImage || desktopImage;
  const desktopSource = desktopImage || mobileImage;

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
      />
    </picture>
  );
}
