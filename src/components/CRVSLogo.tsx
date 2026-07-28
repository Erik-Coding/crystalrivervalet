export function CRVSLogo({ className = "", variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
  const stroke = variant === "light" ? "currentColor" : "currentColor";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke={stroke} strokeWidth="1.5" />
        <path
          d="M6 24 Q 12 20, 16 24 T 26 24 T 34 24"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 28 Q 12 24, 16 28 T 26 28 T 34 28"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <div className="leading-none">
        <div className="font-display text-xl font-semibold tracking-tight">CRVS</div>
        <div className="text-[9px] uppercase tracking-[0.22em] opacity-70">Valet Services</div>
      </div>
    </div>
  );
}
