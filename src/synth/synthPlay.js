import Tone from 'tone'
import { delayBeforeStartingMs } from '../constants/general'

const synthPlay = (objStore, reduxStore) => {
  const currentTime = Tone.now()
  const startTimeS = currentTime + 0.001 * delayBeforeStartingMs
  objStore.synth.sourceList.forEach(node => node.start(startTimeS))
}

export default synthPlay
