import { OVERALL_GAIN } from '../../general'

const setupNodesPersistent = (objStore, reduxStore) => {
  const sliders = reduxStore.getState().sliders
  const initialGain = sliders.find( slider => slider.id === OVERALL_GAIN ).value

  objStore.audioNode = {}
  // The main gain node changes the overall volume
  objStore.audioNode.mainGain = objStore.ctx.audio.createGain();
  objStore.audioNode.mainGain.gain.value = 10 ** (initialGain / 20);
  
  // The analyser node generates data for plotting graphs of waveform and spectrum
  objStore.audioNode.analyser = objStore.ctx.audio.createAnalyser()
  console.log(`Analyser options`)
  objStore.audioNode.analyser.fftSize = 4096             // Between 2^5 and 2^15, default 2^10. Time / Frequency trade-off.
  objStore.audioNode.analyser.maxDecibels = 0            // max -0 dB, default -30
  objStore.audioNode.analyser.minDecibels = -100         // default -100
  objStore.audioNode.analyser.smoothingTimeConstant = 0  // 0 no smoothing, 0.99 really smooth
  
  // Make a separate space to deal with analyser output
  objStore.analyser = {}
  objStore.analyser.bufferLength = objStore.audioNode.analyser.frequencyBinCount;
  objStore.analyser.bytesWaveform = new Uint8Array(objStore.analyser.bufferLength);
  objStore.analyser.bytesSpectrum = new Uint8Array(objStore.analyser.bufferLength);
  
  // The destination is what eventually plays the audio output
  objStore.audioNode.destination = objStore.ctx.audio.destination;
  
  // Connect the persistent nodes together
  objStore.audioNode.mainGain.connect(objStore.audioNode.destination);
  objStore.audioNode.mainGain.connect(objStore.audioNode.analyser);
  
  // Mark starting persistent node
  objStore.audioNode.firstPersistent = objStore.audioNode.mainGain
}

export default setupNodesPersistent
