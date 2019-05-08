const setupAnalyserOutput = (objStore, reduxStore) => {
  objStore.analyser = {}
  objStore.analyser.bufferLength = objStore.audioNode.analyser.frequencyBinCount;
  objStore.analyser.bytesWaveform = new Uint8Array(objStore.analyser.bufferLength);
  objStore.analyser.bytesSpectrum = new Uint8Array(objStore.analyser.bufferLength);
}

export default setupAnalyserOutput
