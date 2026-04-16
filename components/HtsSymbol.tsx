export function HtsSymbol({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
      <path d="M16 16 C13 13 8 7 3 3 C8 8 13 13 16 16Z" fill="#5AADA8" />
      <path d="M16 16 C13 13 6 8 3 3 C6 6 12 12 16 16Z" fill="#5AADA8" opacity="0.45" />
      <path d="M16 16 C19 13 24 7 29 3 C24 8 19 13 16 16Z" fill="#2B5278" />
      <path d="M16 16 C19 13 26 8 29 3 C26 6 20 12 16 16Z" fill="#2B5278" opacity="0.45" />
      <path d="M16 16 C19 19 24 25 29 29 C24 24 19 19 16 16Z" fill="#5AADA8" />
      <path d="M16 16 C19 19 26 24 29 29 C26 26 20 20 16 16Z" fill="#5AADA8" opacity="0.45" />
      <path d="M16 16 C13 19 8 25 3 29 C8 24 13 19 16 16Z" fill="#2B5278" />
      <path d="M16 16 C13 19 6 24 3 29 C6 26 12 20 16 16Z" fill="#2B5278" opacity="0.45" />
      <circle cx="16" cy="16" r="3" fill="#D4614A" />
    </svg>
  );
}

export function HtsSymbolLarge() {
  return (
    <svg viewBox="0 0 320 320" width="300" height="300" fill="none">
      <circle cx="160" cy="160" r="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
      <circle cx="160" cy="160" r="130" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
      <path d="M160,160 C148,148 124,112 80,80 C112,112 148,148 160,160Z" fill="#5AADA8" />
      <path d="M160,160 C140,148 108,116 72,88 C108,116 144,150 160,160Z" fill="#5AADA8" opacity="0.45" />
      <path d="M160,160 C172,148 196,112 240,80 C208,112 172,148 160,160Z" fill="#2B5278" />
      <path d="M160,160 C180,148 212,116 248,88 C212,116 176,150 160,160Z" fill="#2B5278" opacity="0.45" />
      <path d="M160,160 C172,172 196,208 240,240 C208,208 172,172 160,160Z" fill="#5AADA8" />
      <path d="M160,160 C180,172 212,204 248,232 C212,204 176,170 160,160Z" fill="#5AADA8" opacity="0.45" />
      <path d="M160,160 C148,172 124,208 80,240 C112,208 148,172 160,160Z" fill="#2B5278" />
      <path d="M160,160 C140,172 108,204 72,232 C108,204 144,170 160,160Z" fill="#2B5278" opacity="0.45" />
      <circle cx="160" cy="160" r="20" fill="#D4614A" />
      <circle cx="160" cy="160" r="10" fill="#2B5278" opacity="0.5" />
      <circle cx="160" cy="160" r="5" fill="#5AADA8" opacity="0.5" />
    </svg>
  );
}
