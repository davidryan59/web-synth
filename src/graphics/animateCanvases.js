import drawCanvasWaveform from './drawCanvasWaveform'
import drawCanvasSpectrum from './drawCanvasSpectrum'
import { buttonActive } from '../getters/button'
import { getSliderDisplayValue } from '../getters/slider'
import * as ui from '../constants/uiNames'

const animateCanvases = (objStore, reduxStore) => {
  // console.log('Started drawing waveform and spectrum canvases')
  let frameNumber = 0
  const drawCanvases1Frame = () => {
    const state = reduxStore.getState()
    if (buttonActive(state, ui.TOGGLE_ANIMATION)) {
      // Schedule the next frame
      window.requestAnimationFrame(drawCanvases1Frame)
    } else {
      // console.log('Stopped drawing waveform and spectrum canvases')
    }
    // Animation rates (more correctly, animation period) in frames between updates
    const animationRate = getSliderDisplayValue(state, ui.SLIDER_ANIMATION_RATE)
    // Do waveform and spectrum updates at separate times for animationRate > 1
    const halfRate = Math.floor(0.5 * animationRate)
    if (Math.floor(frameNumber % animationRate) === 0) drawCanvasWaveform(objStore, reduxStore)
    if (Math.floor(frameNumber % animationRate) === halfRate) drawCanvasSpectrum(objStore, reduxStore)
    frameNumber++
  }
  drawCanvases1Frame()
}

export default animateCanvases
