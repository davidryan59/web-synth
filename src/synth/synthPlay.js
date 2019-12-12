import { delayBeforeStartingMs } from '../constants/general'

const synthPlay = (objStore, reduxStore) => {
  const startTimeS = objStore.ctx.audio.currentTime + 0.001 * delayBeforeStartingMs
  objStore.synth.sourceList.forEach( node => node.start(startTimeS) )
}

export default synthPlay
