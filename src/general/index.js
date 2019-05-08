// Make string exactly N (len) characters
// If too short, put non-breaking spaces in front
// If too long, truncate on right.
export const makeNChars = (label, len) => (''+label).slice(0, len).padStart(len, '\u00a0')

// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35

// IDs and constant strings
export const WINDOW_RESIZE = 'WINDOW_RESIZE'
export const SLIDER_MOVE = 'SLIDER_MOVE'
export const BUTTON_PRESS = 'BUTTON_PRESS'
export const PLAY_SOUND = 'PLAY_SOUND'
export const NOTE_FREQ = 'noteFreq'
export const OVERALL_GAIN = 'overallGain'
