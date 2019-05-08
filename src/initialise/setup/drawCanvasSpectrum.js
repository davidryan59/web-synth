import drawCanvasShared from './drawCanvasShared'

const widthMult = 5.0

const drawCanvasSpectrum = (objStore, reduxStore) => {
  objStore.audioNode.analyser.getByteFrequencyData(objStore.analyser.bytesSpectrum);
  const bytesToDraw = objStore.analyser.bytesSpectrum
  const canvasCtx = objStore.ctx.canvas.spectrum
  const canvasElt = objStore.elt.canvas.spectrum
  const bufferLength = objStore.analyser.bufferLength
  drawCanvasShared({ canvasCtx, canvasElt, bufferLength, widthMult, bytesToDraw })
}

export default drawCanvasSpectrum
