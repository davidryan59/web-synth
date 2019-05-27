// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35
// Set canvasHeight for waveform and spectrum canvases
export const canvasHeight = 150

// Control how zoomed in the spectrum canvas is
export const canvasWidthMultSpectrum = 5.0

// Control how many frames between canvas updates
export const framesBetweenCanvasUpdates = 8
// There are two updates, one for waveform, one for spectrum, and they are staggered.
// If this number is 8, then one of the updates happens every 4 frames.

// Control a short delay before starting an oscillator
export const delayBeforeStartingMs = 10
// To make sure all the audio nodes are setup before the start time

// List of wave shapes in picklists
export const waveShapes = ['sine', 'triangle', 'sawtooth', 'square']

// Control the analyser output and display
export const analyserParameters = {
  fftSize: 4096,             // Between 2^5 and 2^15, default 2^10. Time / Frequency trade-off.
  maxDecibels: 0,            // max -0 dB, default -30
  minDecibels: -100,         // default -100
  smoothingTimeConstant: 0   // 0 no smoothing, 0.99 really smooth
}

// Action types
export const WINDOW_RESIZE = 'WINDOW_RESIZE'
export const SLIDER_MOVE = 'SLIDER_MOVE'
export const SET_PICKLIST = 'SET_PICKLIST'
export const BUTTON_PRESS = 'BUTTON_PRESS'

// IDs of UI elements
export const PLAY_SOUND = 'PLAY_SOUND'
export const MIXER_GAIN = 'MIXER_GAIN'
export const SYNTH_WAVE_SHAPE = 'SYNTH_WAVE_SHAPE'
export const SYNTH_NOTE_FREQ = 'SYNTH_NOTE_FREQ'
export const SYNTH_DISTORTION = 'SYNTH_DISTORTION'

export const DELAY_RESONANCE_L = 'DELAY_RESONANCE_L'
export const DELAY_RESONANCE_M = 'DELAY_RESONANCE_M'
export const DELAY_RESONANCE_R = 'DELAY_RESONANCE_R'

export const MOD_FREQ_DENOM = 'MOD_FREQ_DENOM'

export const MOD_WAVE_SHAPE_A = 'MOD_WAVE_SHAPE_A'
export const MOD_FREQ_NUM_A = 'MOD_FREQ_NUM_A'
export const MOD_IDX_A = 'MOD_IDX_A'
export const MOD2_WAVE_SHAPE_A = 'MOD2_WAVE_SHAPE_A'
export const MOD2_RATE_A = 'MOD2_RATE_A'
export const MOD2_IDX_A = 'MOD2_IDX_A'

export const MOD_WAVE_SHAPE_B = 'MOD_WAVE_SHAPE_B'
export const MOD_FREQ_NUM_B = 'MOD_FREQ_NUM_B'
export const MOD_IDX_B = 'MOD_IDX_B'
export const MOD2_WAVE_SHAPE_B = 'MOD2_WAVE_SHAPE_B'
export const MOD2_RATE_B = 'MOD2_RATE_B'
export const MOD2_IDX_B = 'MOD2_IDX_B'
