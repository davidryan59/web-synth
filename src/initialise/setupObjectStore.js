import setupHtmlElements from './setup/setupHtmlElements'
import setupContexts from './setup/setupContexts'
import setupNodesPersistent from './setup/setupNodesPersistent'
import setupStartAndStopActions from './setup/setupStartAndStopActions'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise redux store before initialising object store
  setupHtmlElements(objStore, reduxStore)
  setupContexts(objStore, reduxStore)
  setupNodesPersistent(objStore, reduxStore)
  setupStartAndStopActions(objStore, reduxStore)
  objStore.setup = true
}

export default setupObjectStore
