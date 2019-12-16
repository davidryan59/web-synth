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
  const minVal = -1
  const maxVal = 1
  const canvasCtx = objStore.ctx.canvas.waveform
  const canvasElt = objStore.elt.canvas.waveform
  const waveformZoomPc = getSliderDisplayValue(state, ui.SLIDER_WAVEFORM_ZOOM)
  // waveformZoomPc: 0 is not zoomed in at all, 100 is fully zoomed in
  // widthMult: 1 is no zoom, greater than 1 is zoomed
  const zoomFraction = 0.01 * Math.max(0, Math.min(100, waveformZoomPc))
  const widthMult = maxWaveformZoomFraction ** zoomFraction
  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult })
}

export default drawCanvasWaveform
