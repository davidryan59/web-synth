// Make string exactly N (len) characters
// If too short, put non-breaking spaces in front
// If too long, truncate on right.
export const makeNChars = (label, len) => (''+label).slice(0, len).padStart(len, '\u00a0')
