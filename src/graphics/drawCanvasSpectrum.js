import drawCanvasShared from './drawCanvasShared'
import { analyserParameters } from '../constants/general'
import * as ui from '../constants/uiNames'
import { buttonActive } from '../getters/button'
import { getSliderDisplayValue } from '../getters/slider'

const drawCanvasSpectrum = (objStore, reduxStore) => {
  const state = reduxStore.getState()
  // Tone.Analyser with mode 'fft'
  // returns Float32Array with
  // analyserParameters.fftSize dB values between approx -200 and 0
  const arrayToDraw = objStore.mixer.analyser.fft.getValue()
  const logXMode = buttonActive(state, ui.TOGGLE_SPECTRUM_LOG)
  const minVal = getSliderDisplayValue(state, ui.SLIDER_SPECTRUM_MIN_DB)
  const maxVal = 0
  const canvasCtx = objStore.ctx.canvas.spectrum
  const canvasElt = objStore.elt.canvas.spectrum
  const maxDisplayFreq = getSliderDisplayValue(state, ui.SLIDER_SPECTRUM_MAX_FREQ)
  const widthMult = 0.5 * analyserParameters.sampleRate / maxDisplayFreq
  const logXParam = analyserParameters.logXParam
  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult, logXMode, logXParam })
}

export default drawCanvasSpectrum
