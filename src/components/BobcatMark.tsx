/**
 * Subtle monochrome paw mark used as a light Texas State Bobcats nod.
 * Renders in currentColor only (white/cream or black), never maroon and gold.
 */
export function BobcatMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="15.4" rx="5.1" ry="4.2" />
      <ellipse cx="5.4" cy="9.6" rx="2.3" ry="2.9" transform="rotate(-18 5.4 9.6)" />
      <ellipse cx="9.6" cy="6.1" rx="2.1" ry="2.8" transform="rotate(-7 9.6 6.1)" />
      <ellipse cx="14.4" cy="6.1" rx="2.1" ry="2.8" transform="rotate(7 14.4 6.1)" />
      <ellipse cx="18.6" cy="9.6" rx="2.3" ry="2.9" transform="rotate(18 18.6 9.6)" />
    </svg>
  );
}

export function BobcatBadge({
  className = "",
  label = "Bobcat owned · Texas State University",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-current/25 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] ${className}`}
    >
      <BobcatMark className="h-3.5 w-3.5 opacity-80" />
      {label}
    </span>
  );
}
