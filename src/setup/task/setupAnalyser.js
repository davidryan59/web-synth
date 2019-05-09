import { analyserParameters } from '../../constants'

const setupAnalyser = (objStore, reduxStore) => {
  // The analyser node generates data for plotting graphs of waveform and spectrum
  objStore.mixer.analyser.fftSize = analyserParameters.fftSize
  objStore.mixer.analyser.maxDecibels = analyserParameters.maxDecibels
  objStore.mixer.analyser.minDecibels = analyserParameters.minDecibels
  objStore.mixer.analyser.smoothingTimeConstant = analyserParameters.smoothingTimeConstant

  // Make a separate area to store its data
  objStore.analyser = {}
  objStore.analyser.bufferLength = objStore.mixer.analyser.frequencyBinCount;
  objStore.analyser.bytesWaveform = new Uint8Array(objStore.analyser.bufferLength);
  objStore.analyser.bytesSpectrum = new Uint8Array(objStore.analyser.bufferLength);
}

export default setupAnalyser
