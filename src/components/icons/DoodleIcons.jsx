const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconBulb({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <circle cx="32" cy="27" r="16" />
      <path d="M26 23 Q32 35 38 23" />
      <rect x="25" y="41" width="14" height="12" rx="3" />
      <line x1="27" y1="46" x2="37" y2="46" />
      <line x1="27" y1="50" x2="37" y2="50" />
      <line x1="32" y1="2" x2="32" y2="8" />
      <line x1="11" y1="9" x2="15" y2="13" />
      <line x1="53" y1="9" x2="49" y2="13" />
      <line x1="4" y1="27" x2="10" y2="27" />
      <line x1="60" y1="27" x2="54" y2="27" />
    </svg>
  )
}

export function IconShield({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <path d="M32 6 L48 13 V29 C48 43 42 52 32 58 C22 52 16 43 16 29 V13 Z" />
      <polyline points="23,30 29,37 41,23" />
    </svg>
  )
}

export function IconChart({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <path d="M8 55 H56" />
      <rect x="14" y="38" width="9" height="17" rx="2" />
      <rect x="28" y="26" width="9" height="29" rx="2" />
      <rect x="42" y="15" width="9" height="40" rx="2" />
      <polyline points="14,32 23,24 31,29 39,18 46,22 52,10" />
    </svg>
  )
}

export function IconChat({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <rect x="7" y="11" width="32" height="23" rx="7" />
      <polygon points="16,34 16,44 25,34" />
      <circle cx="16" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="23" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="30" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <rect x="25" y="28" width="32" height="23" rx="7" />
      <polygon points="48,51 48,61 39,51" />
    </svg>
  )
}

export function IconGear({ className = '' }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45)
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      {teeth.map((angle) => (
        <rect key={angle} x="29" y="4" width="6" height="11" rx="2" transform={`rotate(${angle} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="5" />
    </svg>
  )
}

export function IconLock({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <rect x="16" y="29" width="32" height="26" rx="4" />
      <path d="M21 29 V20 A11 11 0 0 1 43 20 V29" />
      <circle cx="32" cy="40" r="3.2" />
      <line x1="32" y1="43" x2="32" y2="48" />
    </svg>
  )
}

export function IconLink({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...base}>
      <rect x="8" y="24" width="26" height="16" rx="8" transform="rotate(-18 21 32)" />
      <rect x="30" y="24" width="26" height="16" rx="8" transform="rotate(-18 43 32)" />
    </svg>
  )
}

export function IconArrowSquiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 64 24" className={className} {...base}>
      <path d="M2 12 Q 12 2, 22 12 T 42 12" />
      <polyline points="38,5 50,12 38,19" />
    </svg>
  )
}

export function IconSpark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" stroke="none">
      <path d="M16 1 L19.5 12.5 L31 16 L19.5 19.5 L16 31 L12.5 19.5 L1 16 L12.5 12.5 Z" />
    </svg>
  )
}

export function IconPin({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="10" r="7" />
      <line x1="16" y1="17" x2="16" y2="29" />
    </svg>
  )
}

export function IconCheck({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <polyline points="6,17 13,24 26,7" />
    </svg>
  )
}

export function IconMenu({ className = '' }) {
  return (
    <svg viewBox="0 0 32 24" className={className} {...base}>
      <line x1="2" y1="3" x2="30" y2="3" />
      <line x1="2" y1="12" x2="30" y2="12" />
      <line x1="2" y1="21" x2="30" y2="21" />
    </svg>
  )
}

export function IconClose({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <line x1="4" y1="4" x2="28" y2="28" />
      <line x1="28" y1="4" x2="4" y2="28" />
    </svg>
  )
}

export function IconPlus({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <line x1="16" y1="4" x2="16" y2="28" />
      <line x1="4" y1="16" x2="28" y2="16" />
    </svg>
  )
}

export function IconMinus({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <line x1="4" y1="16" x2="28" y2="16" />
    </svg>
  )
}
