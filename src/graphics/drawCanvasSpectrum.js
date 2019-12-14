import drawCanvasShared from './drawCanvasShared'
import { analyserParameters } from '../constants/general'
import * as ui from '../constants/uiNames'
import { getSliderOutputValueFromState } from '../getters/getSlider'

const drawCanvasSpectrum = (objStore, reduxStore) => {
  // Tone.Analyser with mode 'fft'
  // returns Float32Array with
  // analyserParameters.fftSize dB values between approx -200 and 0
  const arrayToDraw = objStore.mixer.analyser.fft.getValue();
  const minVal = getSliderOutputValueFromState(reduxStore.getState(), ui.ANALYSER_MIN_DB)
  const maxVal = 0
  const canvasCtx = objStore.ctx.canvas.spectrum
  const canvasElt = objStore.elt.canvas.spectrum
  const maxDisplayFreq = getSliderOutputValueFromState(reduxStore.getState(), ui.ANALYSER_MAX_FREQ)
  const widthMult = 0.5 * analyserParameters.sampleRate / maxDisplayFreq
  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult })
}

export default drawCanvasSpectrum
