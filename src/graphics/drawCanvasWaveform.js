import drawCanvasShared from './drawCanvasShared'
import * as ui from '../constants/uiNames'
import { maxWaveformZoomFraction } from '../constants/general'
import { getSliderDisplayValue } from '../getters/slider'

const drawCanvasWaveform = (objStore, reduxStore) => {
  const state = reduxStore.getState()
  // Tone.Analyser with mode 'waveform'
  // returns Float32Array with
  // analyserParameters.fftSize amplitude values between -1 and 1
  const arrayToDraw = objStore.mixer.analyser.wave.getValue()
  const canvasCtx = objStore.ctx.canvas.waveform
  const canvasElt = objStore.elt.canvas.waveform

  const waveformHZoomPc = getSliderDisplayValue(state, ui.SLIDER_WAVEFORM_H_ZOOM)
  // waveformHZoomPc: 0 is not zoomed in at all, 100 is fully zoomed in
  // widthMult: 1 is no zoom, greater than 1 is zoomed
  const hZoomFraction = 0.01 * Math.max(0, Math.min(100, waveformHZoomPc))
  const widthMult = maxWaveformZoomFraction ** hZoomFraction

  const waveformVZoomPc = getSliderDisplayValue(state, ui.SLIDER_WAVEFORM_V_ZOOM)
  const vZoomFraction = 0.01 * Math.max(0, Math.min(100, waveformVZoomPc))
  const maxVal = 100 ** (-vZoomFraction)
  const minVal = -maxVal
  // These are -1 to 1 if vertical zoom is 0%
  // These are -0.01 to 0.01 if vertical zoom is 100%

  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult, drawGrid: true })
}

export default drawCanvasWaveform
