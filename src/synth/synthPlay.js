import { delayBeforeStartingMs } from '../constants'

const synthPlay = (objStore, reduxStore) => { 
  const startTimeS = objStore.ctx.audio.currentTime + 0.001 * delayBeforeStartingMs
  objStore.synth.nodes.sourceList.forEach( osc => {
    osc.start(startTimeS)
  })
}

export default synthPlay
