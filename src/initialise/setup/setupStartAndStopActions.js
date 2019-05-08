import setupNodesTemp from './setupNodesTemp'
import audioStart from './audioStart'
import animateCanvases from './animateCanvases'
import audioStop from './audioStop'

const setupStartAndStopActions = (objStore, reduxStore) => {
  objStore.fn = {}
  objStore.fn.startSoundAndGraphics = () => {
    setupNodesTemp(objStore, reduxStore)
    audioStart(objStore, reduxStore)    
    animateCanvases(objStore, reduxStore)
  };

  objStore.fn.stopSound = () => {
    audioStop(objStore)
  }
}

export default setupStartAndStopActions
