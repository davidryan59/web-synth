// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 20
// Extra padding to keep canvas sides away from side of window
export const windowSizeChangeExtraReduction = 35
// Waveform zoom between x1 and this number
export const maxWaveformZoomFraction = 100

// Control a short delay before starting an oscillator
export const delayBeforeStartingMs = 50
// To make sure all the audio nodes are setup before the start time

// List of wave shapes in picklists
export const waveShapes = ['sine', 'triangle', 'sawtooth', 'square']

// Distortion setup
export const distortionTypes = ['hard', 'sigmoid']
export const sigmoidArraySize = 1024
const getHardArray = () => new Float32Array([-1, 1])
const getSigmoidArray = () => {
  const sigFactor = 1 / (sigmoidArraySize - 1)
  const resultArray = new Float32Array(sigmoidArraySize)
  for (let i=0; i<sigmoidArraySize; i++) {
    const x = sigFactor * i
    resultArray[i] = 6 * x ** 2 - 4 * x ** 3 - 1
    // Maps [0, 1] to [-1, 1]
    // with smooth turning points at (0, -1) and (1, 1)
  }
  return resultArray
}
export const getDistortionCurveFromType = type =>
  (type === 'hard') ? getHardArray() :
    (type === 'sigmoid') ? getSigmoidArray() :
      getHardArray()

// Control the analyser output and display
export const analyserParameters = {
  sampleRate: 44100, // IMPROVE: Can this be calculated from context?
  fftSize: 4096, // Power of 2. Between 2^5 and 2^15, default 2^10. Time / Frequency trade-off.
  smoothingTimeConstant: 0, // 0 no smoothing, 0.99 really smooth
  logXParam: 100 // Controls shape of (modified) Log graph, allowing DC component to be plotted
}
