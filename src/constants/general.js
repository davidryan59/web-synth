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