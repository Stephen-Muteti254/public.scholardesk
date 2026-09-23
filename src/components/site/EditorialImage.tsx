type EditorialImageProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
};

export function EditorialImage({
  src,
  alt,
  eyebrow,
  caption,
  className = "",
  imageClassName = "",
  eager = false,
}: EditorialImageProps) {
  return (
    <figure className={`group overflow-hidden rounded-2xl bg-surface shadow-elegant ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={738}
          height={461}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none ${imageClassName}`}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-deep/85 to-transparent" aria-hidden="true" />
        {eyebrow || caption ? (
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground sm:p-6">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80">{eyebrow}</p>
            ) : null}
            {caption ? <p className="mt-1 max-w-xl text-sm font-medium leading-relaxed">{caption}</p> : null}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}