const setupContexts = (objStore, reduxStore) => {
  objStore.ctx = {}
  objStore.ctx.canvas = {}
  objStore.ctx.canvas.waveform = objStore.elt.canvas.waveform.getContext('2d')
  objStore.ctx.canvas.spectrum = objStore.elt.canvas.spectrum.getContext('2d')
}

export default setupContexts
