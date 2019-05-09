import drawCanvasShared from './drawCanvasShared'

const drawCanvasWaveform = (objStore, reduxStore) => {
  objStore.mixer.analyser.getByteTimeDomainData(objStore.analyser.bytesWaveform);
  const bytesToDraw = objStore.analyser.bytesWaveform
  const canvasCtx = objStore.ctx.canvas.waveform
  const canvasElt = objStore.elt.canvas.waveform
  const bufferLength = objStore.analyser.bufferLength
  drawCanvasShared({ canvasCtx, canvasElt, bufferLength, bytesToDraw })
}

export default drawCanvasWaveform
