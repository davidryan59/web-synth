import drawCanvasShared from './drawCanvasShared'


const drawCanvasWaveform = (objStore, reduxStore) => {
  // Tone.Analyser with mode 'waveform'
  // returns Float32Array with
  // analyserParameters.fftSize amplitude values between -1 and 1
  const arrayToDraw = objStore.mixer.analyser.wave.getValue();
  const minVal = -1
  const maxVal = 1
  const canvasCtx = objStore.ctx.canvas.waveform
  const canvasElt = objStore.elt.canvas.waveform

  drawCanvasShared({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt })
}

export default drawCanvasWaveform
