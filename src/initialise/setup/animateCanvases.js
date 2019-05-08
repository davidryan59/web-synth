import drawCanvasWaveform from './drawCanvasWaveform'
import drawCanvasSpectrum from './drawCanvasSpectrum'

console.log('Canvas animation rate')
const frameDiff = 16

const frameWaveform = Math.floor(0.5 * (frameDiff - 1))
const frameSpectrum = Math.floor(frameDiff - 1)

const animateCanvases = (objStore, reduxStore) => {
  // console.log('Started drawing waveform and spectrum canvases')
  let frameNumber = 0
  const drawCanvases1Frame = () => {
    if (reduxStore.getState().playButton.isActive) {
      // Schedule the next frame
      window.requestAnimationFrame(drawCanvases1Frame);
    } else {
      // console.log('Stopped drawing waveform and spectrum canvases')
    }
    if (frameNumber % frameDiff === frameWaveform) drawCanvasWaveform(objStore, reduxStore)
    if (frameNumber % frameDiff === frameSpectrum) drawCanvasSpectrum(objStore, reduxStore)
    frameNumber++
  }
  drawCanvases1Frame()
}

export default animateCanvases
