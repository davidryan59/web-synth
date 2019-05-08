import setupNodesSynthGraph from './setupNodesSynthGraph'
import { setupNodesSynthValues } from './setupNodesSynthValues'
import audioStart from './audioStart'
import animateCanvases from './animateCanvases'
import audioStop from './audioStop'

const setupStartAndStopActions = (objStore, reduxStore) => {
  objStore.fn = {}
  objStore.fn.startSoundAndGraphics = () => {
    setupNodesSynthGraph(objStore, reduxStore)
    setupNodesSynthValues(objStore, reduxStore)
    audioStart(objStore, reduxStore)    
    animateCanvases(objStore, reduxStore)
  };

  objStore.fn.stopSound = () => {
    audioStop(objStore)
  }
}

export default setupStartAndStopActions
