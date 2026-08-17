const bobcat = { url: "/images/bobcat-head.png" };
const txst = { url: "/images/txst-wordmark.png" };

/**
 * Texas State Bobcats mark. Source art is black on transparent, so the
 * default renders it inverted (white) for dark forest backgrounds.
 * Pass dark to keep it black on light backgrounds. Never maroon and gold.
 */
export function BobcatMark({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <img
      src={bobcat.url}
      alt=""
      aria-hidden="true"
      className={`object-contain ${dark ? "" : "invert"} ${className}`}
      loading="lazy"
    />
  );
}

export function TxstWordmark({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <img
      src={txst.url}
      alt="Texas State University TXST"
      className={`object-contain ${dark ? "" : "invert"} ${className}`}
      loading="lazy"
    />
  );
}

export function BobcatBadge({
  className = "",
  dark = false,
  label = "Bobcat owned · Texas State University",
}: {
  className?: string;
  dark?: boolean;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-current px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] ${className}`}
    >
      <BobcatMark dark={dark} className="h-4 w-4 opacity-90" />
      {label}
      <TxstWordmark dark={dark} className="h-2.5 opacity-80" />
    </span>
  );
}
