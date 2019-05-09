const setupHtmlElements = (objStore, reduxStore) => {
  objStore.elt = {}
  objStore.elt.canvas = {}
  objStore.elt.canvas.waveform = document.querySelector("canvas#waveform")
  objStore.elt.canvas.spectrum = document.querySelector("canvas#spectrum")
}

export default setupHtmlElements
