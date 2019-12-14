import synthMakeNodes from '../../synth/synthMakeNodes'
import { synthInitialiseValues } from '../../synth/synthUpdates'
import synthPlay from '../../synth/synthPlay'
import animateCanvases from '../../graphics/animateCanvases'
import synthStop from '../../synth/synthStop'

const setupSynth = (objStore, reduxStore) => {
  objStore.synth = {}
  const fns = objStore.synth.fns = {}

  fns.startSound = () => {
    synthMakeNodes(objStore, reduxStore)
    synthInitialiseValues(objStore, reduxStore)
    synthPlay(objStore, reduxStore)
  };

  fns.startGraphics = () => {
    animateCanvases(objStore, reduxStore)
  };

  fns.stopSound = () => {
    synthStop(objStore, reduxStore)
  }

  fns.stopGraphics = () => {
    // Do nothing - animation loop will break automatically
    // when button toggled in Redux state
  }
}

export default setupSynth
