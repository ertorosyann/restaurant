interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" renders light text for use on dark backgrounds. */
  tone?: "light" | "dark";
  /** Heading level — defaults to h2. */
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`ornament-rule mb-4 text-xs font-medium uppercase tracking-[0.22em] ${
            isCenter ? "justify-center" : ""
          } ${isDark ? "text-copper-300" : "text-copper-700"}`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={`font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-cream-50" : "text-charcoal-900"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-cream-100/80" : "text-charcoal-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
