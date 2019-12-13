import setupHtmlElements from './task/setupHtmlElements'
import setupContexts from './task/setupContexts'
import setupMixer from './task/setupMixer'
import setupSynth from './task/setupSynth'

const setupObjectStore = (evt, objStore, reduxStore) => {
  // Initialise Redux store before initialising object store
  setupHtmlElements(objStore, reduxStore)
  setupContexts(objStore, reduxStore)
  setupMixer(objStore, reduxStore)
  setupSynth(objStore, reduxStore)
  objStore.setup = true
}

export default setupObjectStore
