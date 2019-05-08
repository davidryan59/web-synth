import setupHtmlElements from './setup/setupHtmlElements'
import setupContexts from './setup/setupContexts'
import setupNodesMixerGraph from './setup/setupNodesMixerGraph'
import { setupNodesMixerValues } from './setup/setupNodesMixerValues'
import setupAnalyserOutput from './setup/setupAnalyserOutput'
import setupStartAndStopActions from './setup/setupStartAndStopActions'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise redux store before initialising object store
  setupHtmlElements(objStore, reduxStore)
  setupContexts(objStore, reduxStore)
  setupNodesMixerGraph(objStore, reduxStore)
  setupNodesMixerValues(objStore, reduxStore)
  setupAnalyserOutput(objStore, reduxStore)
  setupStartAndStopActions(objStore, reduxStore)
  objStore.setup = true
}

export default setupObjectStore
