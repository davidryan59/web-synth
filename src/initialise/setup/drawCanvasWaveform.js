import drawCanvasShared from './drawCanvasShared'

const widthMult = 1.0

const drawCanvasWaveform = (objStore, reduxStore) => {
  objStore.audioNode.analyser.getByteTimeDomainData(objStore.analyser.bytesWaveform);
  const bytesToDraw = objStore.analyser.bytesWaveform
  const canvasCtx = objStore.ctx.canvas.waveform
  const canvasElt = objStore.elt.canvas.waveform
  const bufferLength = objStore.analyser.bufferLength
  drawCanvasShared({ canvasCtx, canvasElt, bufferLength, widthMult, bytesToDraw })
}

export default drawCanvasWaveform
