import Tone from 'tone'
import { getSliderDisplayValue } from '../../getters/slider'
import dbToGain from '../../general/dbToGain'
import { MIXER_GAIN } from '../../constants/uiNames'
import { analyserParameters } from '../../constants/general'

export const updateMixerGain = (objStore, state) => {
  const dbOverallGain = getSliderDisplayValue(state, MIXER_GAIN)
  objStore.mixer.gain.gain.value = dbToGain(dbOverallGain)
}

const setupMixer = (objStore, reduxStore) => {
  const fftSize = analyserParameters.fftSize
  const timeConst = analyserParameters.smoothingTimeConstant

  const mixer = objStore.mixer = {}
  mixer.input = mixer.gain = new Tone.Gain();
  mixer.analyser = {}
  mixer.analyser.wave = new Tone.Analyser('waveform', fftSize)
  mixer.analyser.wave.smoothing = timeConst
  mixer.analyser.fft = new Tone.Analyser('fft', fftSize)
  mixer.analyser.fft.smoothing = timeConst
  mixer.gain.connect(Tone.Master);
  mixer.gain.connect(mixer.analyser.wave);
  mixer.gain.connect(mixer.analyser.fft);

  // Need to set main gain from state
  updateMixerGain(objStore, reduxStore.getState())
}

export default setupMixer
