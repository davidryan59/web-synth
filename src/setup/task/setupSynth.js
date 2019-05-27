import synthMakeNodes from '../../synth/synthMakeNodes'
import { synthInitialiseValues } from '../../synth/synthUpdates'
import synthPlay from '../../synth/synthPlay'
import animateCanvases from '../../graphics/animateCanvases'
import synthStop from '../../synth/synthStop'

const setupSynth = (objStore, reduxStore) => {
  objStore.synth = {}
  objStore.synth.fns = {}
  objStore.synth.fns.startSoundAndGraphics = () => {
    synthMakeNodes(objStore, reduxStore)
    synthInitialiseValues(objStore, reduxStore)
    synthPlay(objStore, reduxStore)    
    animateCanvases(objStore, reduxStore)
  };

  objStore.synth.fns.stopSound = () => {
    synthStop(objStore, reduxStore)
  }
}

export default setupSynth
