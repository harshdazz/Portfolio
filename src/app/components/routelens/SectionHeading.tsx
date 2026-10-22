const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-amber-400">
      {eyebrow}
    </p>
    <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-400">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
