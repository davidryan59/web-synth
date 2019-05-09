const synthMakeNodes = (objStore, reduxStore) => {  
  // 1. SHORTCUTS
  objStore.synth.nodes = {}
  const synthNodes = objStore.synth.nodes
  const audioCtx = objStore.ctx.audio
  
  // 2. CREATE NODE OBJECT AND NODES
  synthNodes.modModOscA = audioCtx.createOscillator();
  synthNodes.modModGainA = audioCtx.createGain();
  synthNodes.modOscA = audioCtx.createOscillator();
  synthNodes.modGainA = audioCtx.createGain();
  synthNodes.mainOsc = audioCtx.createOscillator();
  synthNodes.limitGainPre = audioCtx.createGain();
  synthNodes.limitShaper = audioCtx.createWaveShaper();     // This Wave Shaper
  synthNodes.limitShaper.curve = new Float32Array([-1, 1])  // = a Limiter
  synthNodes.limitGainPost = audioCtx.createGain();
  
  // 3. MAKE AUDIO NODE GRAPH
  synthNodes.modModOscA.connect(synthNodes.modModGainA);
  synthNodes.modModGainA.connect(synthNodes.modGainA.gain);
  synthNodes.modOscA.connect(synthNodes.modGainA);
  synthNodes.modGainA.connect(synthNodes.mainOsc.frequency);
  synthNodes.mainOsc.connect(synthNodes.limitGainPre);
  synthNodes.limitGainPre.connect(synthNodes.limitShaper);
  synthNodes.limitShaper.connect(synthNodes.limitGainPost);  
  synthNodes.limitGainPost.connect(objStore.mixer.input);  
  
  // 4. SPECIFY WHICH NODES NEED TO BE STARTED AND STOPPED
  synthNodes.startAndStopList = [
    synthNodes.modModOscA,
    synthNodes.modOscA,
    synthNodes.mainOsc
  ]
}

export default synthMakeNodes
