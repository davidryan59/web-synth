const setupNodesSynthGraph = (objStore, reduxStore) => {  
  // 1. SHORTCUTS
  objStore.audioNode.tempSynth = {}
  const synth = objStore.audioNode.tempSynth
  const audioCtx = objStore.ctx.audio
  
  // 2. CREATE NODE OBJECT AND NODES
  synth.mainOsc = audioCtx.createOscillator();
  synth.modOscA = audioCtx.createOscillator();
  synth.modGainA = audioCtx.createGain();
  synth.modModOscA = audioCtx.createOscillator();
  synth.modModGainA = audioCtx.createGain();
  synth.limitGain = audioCtx.createGain();
  synth.limitShaper = audioCtx.createWaveShaper();     // This Wave Shaper
  synth.limitShaper.curve = new Float32Array([-1, 1])  // = a Limiter
  
  // 3. MAKE AUDIO NODE GRAPH
  synth.modModOscA.connect(synth.modModGainA);
  synth.modModGainA.connect(synth.modGainA.gain);
  synth.modOscA.connect(synth.modGainA);
  synth.modGainA.connect(synth.mainOsc.frequency);
  synth.mainOsc.connect(synth.limitGain);
  synth.limitGain.connect(synth.limitShaper);
  synth.limitShaper.connect(objStore.audioNode.mixerInput);  
  
  // 4. SPECIFY WHICH NODES NEED TO BE STARTED AND STOPPED
  synth.nodesToStartAndStop = [
    synth.modModOscA,
    synth.modOscA,
    synth.mainOsc
  ]
}

export default setupNodesSynthGraph
