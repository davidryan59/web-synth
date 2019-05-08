import getSliderValueFromState from '../../general/getSliderValueFromState'
import dbToGain from '../../general/dbToGain'
import { OVERALL_GAIN } from '../../general'

export const updateMainGain = (objStore, state) => {
  const dbOverallGain = getSliderValueFromState(state, OVERALL_GAIN)
  objStore.audioNode.mainGain.gain.value = dbToGain(dbOverallGain)
}

export const setupNodesMixerValues = (objStore, reduxStore) => {
  const reduxState = reduxStore.getState()
  updateMainGain(objStore, reduxState)
    
  // The analyser node generates data for plotting graphs of waveform and spectrum
  objStore.audioNode.analyser.fftSize = 4096             // Between 2^5 and 2^15, default 2^10. Time / Frequency trade-off.
  objStore.audioNode.analyser.maxDecibels = 0            // max -0 dB, default -30
  objStore.audioNode.analyser.minDecibels = -100         // default -100
  objStore.audioNode.analyser.smoothingTimeConstant = 0  // 0 no smoothing, 0.99 really smooth
}
