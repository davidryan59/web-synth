// Make string exactly N (len) characters
// If too short, put non-breaking spaces in front
// If too long, truncate on right.
export const makeNChars = (label, len) => (''+label).slice(0, len).padStart(len, '\u00a0')

// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35
