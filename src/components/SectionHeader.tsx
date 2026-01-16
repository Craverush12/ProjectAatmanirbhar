type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }: Props) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-emerald-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base text-emerald-800/80">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
