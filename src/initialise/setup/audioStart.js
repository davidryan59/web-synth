// Short delay before starting
const deltaTimeMs = 1

const audioStart = (objStore, reduxStore) => {
  // console.log('Starting audio')  
  const startTimeS = objStore.ctx.audio.currentTime + 0.001 * deltaTimeMs
  objStore.audioNode.tempSynth.nodesToStartAndStop.forEach( osc => osc.start(startTimeS) )
}

export default audioStart
