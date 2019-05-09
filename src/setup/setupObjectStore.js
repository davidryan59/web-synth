import setupHtmlElements from './task/setupHtmlElements'
import setupContexts from './task/setupContexts'
import setupMixer from './task/setupMixer'
import setupAnalyser from './task/setupAnalyser'
import setupSynth from './task/setupSynth'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise redux store before initialising object store
  setupHtmlElements(objStore, reduxStore)
  setupContexts(objStore, reduxStore)
  setupMixer(objStore, reduxStore)
  setupAnalyser(objStore, reduxStore)
  setupSynth(objStore, reduxStore)
  objStore.setup = true
}

export default setupObjectStore
