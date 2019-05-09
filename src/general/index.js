// Make string exactly N (len) characters
// If too short, put non-breaking spaces in front
// If too long, truncate on right.
export const makeNChars = (label, len) => (''+label).slice(0, len).padStart(len, '\u00a0')

// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35
// Ratio of window height to canvas height
export const windowVerticalMult = 0.25

export const waveShapes = ['sine', 'triangle', 'sawtooth', 'square']

// Action types
export const WINDOW_RESIZE = 'WINDOW_RESIZE'
export const SLIDER_MOVE = 'SLIDER_MOVE'
export const SET_PICKLIST = 'SET_PICKLIST'
export const BUTTON_PRESS = 'BUTTON_PRESS'

// IDs of UI elements
export const PLAY_SOUND = 'PLAY_SOUND'
export const OVERALL_GAIN = 'OVERALL_GAIN'
export const MAIN_WAVE_SHAPE = 'MAIN_WAVE_SHAPE'
export const NOTE_FREQ = 'NOTE_FREQ'
export const DISTORTION_DB = 'DISTORTION_DB'

export const MOD_WAVE_SHAPE_A = 'MOD_WAVE_SHAPE_A'
export const MOD_FREQMULT_A = 'MOD_FREQMULT_A'
export const MOD_IDX_A = 'MOD_IDX_A'

export const MOD2_WAVE_SHAPE_A = 'MOD2_WAVE_SHAPE_A'
export const MOD2_RATE_A = 'MOD2_RATE_A'
export const MOD2_IDX_A = 'MOD2_IDX_A'
