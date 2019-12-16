// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35
// Set canvasHeight for waveform and spectrum canvases
export const canvasHeight = 150

// Control a short delay before starting an oscillator
export const delayBeforeStartingMs = 50
// To make sure all the audio nodes are setup before the start time

// List of wave shapes in picklists
export const waveShapes = ['sine', 'triangle', 'sawtooth', 'square']

// Control the analyser output and display
export const analyserParameters = {
  sampleRate: 44100, // IMPROVE: Can this be calculated from context?
  fftSize: 4096, // Power of 2. Between 2^5 and 2^15, default 2^10. Time / Frequency trade-off.
  smoothingTimeConstant: 0, // 0 no smoothing, 0.99 really smooth
  logXParam: 100 // Controls shape of (modified) Log graph, allowing DC component to be plotted
}
