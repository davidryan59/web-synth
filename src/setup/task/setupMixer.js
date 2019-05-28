import getSliderValueFromState from '../../getters/getSliderValueFromState'
import dbToGain from '../../general/dbToGain'
import { MIXER_GAIN } from '../../constants/uiNames'

export const updateMixerGain = (objStore, state) => {
  const dbOverallGain = getSliderValueFromState(state, MIXER_GAIN)
  objStore.mixer.gain.gain.value = dbToGain(dbOverallGain)
}

const setupMixer = (objStore, reduxStore) => {
  objStore.mixer = {}
  const mixer = objStore.mixer
  const audioCtx = objStore.ctx.audio
  mixer.gain = audioCtx.createGain();
  mixer.analyser = audioCtx.createAnalyser()
  mixer.gain.connect(audioCtx.destination);
  mixer.gain.connect(mixer.analyser);
  mixer.input = mixer.gain
  
  // Need to set main gain from state
  updateMixerGain(objStore, reduxStore.getState())
}

export default setupMixer
