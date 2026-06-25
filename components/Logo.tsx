export function Logo({ className = "h-9 w-auto", mono = false }: { className?: string; mono?: boolean }) {
  const stroke = mono ? "currentColor" : "var(--ink)";
  const accent = mono ? "currentColor" : "var(--accent)";
  return (
    <svg viewBox="0 0 220 56" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Melania">
      <g fill="none" stroke={stroke} strokeWidth="1.4">
        <circle cx="28" cy="28" r="22" />
        <path d="M14 36 L22 18 L28 32 L34 18 L42 36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <circle cx="28" cy="11" r="2.2" fill={accent} />
      <text
        x="62"
        y="30"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        fontWeight="500"
        fill={stroke}
        letterSpacing="0.04em"
      >
        Melania
      </text>
      <text
        x="62"
        y="46"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8"
        letterSpacing="0.34em"
        fill={accent}
      >
        VILLA URQUIZA
      </text>
    </svg>
  );
}

export function Monograma({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <path d="M16 44 L24 18 L32 38 L40 18 L48 44" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="11" r="2" fill="var(--gold)" />
    </svg>
  );
}
