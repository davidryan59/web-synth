import drawCanvasShared from './drawCanvasShared'
import { canvasWidthMultSpectrum } from '../constants'

const drawCanvasSpectrum = (objStore, reduxStore) => {
  objStore.mixer.analyser.getByteFrequencyData(objStore.analyser.bytesSpectrum);
  const bytesToDraw = objStore.analyser.bytesSpectrum
  const canvasCtx = objStore.ctx.canvas.spectrum
  const canvasElt = objStore.elt.canvas.spectrum
  const bufferLength = objStore.analyser.bufferLength
  drawCanvasShared({ canvasCtx, canvasElt, bufferLength, widthMult: canvasWidthMultSpectrum, bytesToDraw })
}

export default drawCanvasSpectrum
