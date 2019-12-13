import drawCanvasShared from './drawCanvasShared'
import { analyserParameters } from '../constants/general'

const drawCanvasSpectrum = (objStore, reduxStore) => {
  // Tone.Analyser with mode 'fft'
  // returns Float32Array with
  // analyserParameters.fftSize dB values between approx -200 and 0
  const arrayToDraw = objStore.mixer.analyser.fft.getValue();
  const minVal = analyserParameters.minDecibels
  const maxVal = analyserParameters.maxDecibels
  const canvasCtx = objStore.ctx.canvas.spectrum
  const canvasElt = objStore.elt.canvas.spectrum
  const sampleRate = analyserParameters.sampleRate
  const maxDisplayFreq = analyserParameters.maxDisplayFreq
  const widthMult = 0.5 * sampleRate / maxDisplayFreq
  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult })
}

export default drawCanvasSpectrum
