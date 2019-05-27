const synthMakeNodes = (objStore, reduxStore) => {  
  
  // 1. CREATE NODE OBJECT AND SHORTCUTS
  objStore.synth.nodes = {}
  const sNs = objStore.synth.nodes
  const aCtx = objStore.ctx.audio
  
  
  // 2. CREATE NODES
  sNs.mod2OscA = aCtx.createOscillator();
  sNs.mod2GainA = aCtx.createGain();
  sNs.modOscA = aCtx.createOscillator();
  sNs.modGainA = aCtx.createGain();
  
  sNs.mod2OscB = aCtx.createOscillator();
  sNs.mod2GainB = aCtx.createGain();
  sNs.modOscB = aCtx.createOscillator();
  sNs.modGainB = aCtx.createGain();
  
  sNs.mainOsc = aCtx.createOscillator();
  
  sNs.limiterPreGain = aCtx.createGain();
  sNs.limiterWaveShape = aCtx.createWaveShaper();
  sNs.limiterWaveShape.curve = new Float32Array([-1, 1])
  sNs.limiterPostGain = aCtx.createGain();
  
  sNs.synthOutput = sNs.limiterPostGain


  // 3. SPECIFY SOURCE NODES, WHICH REQUIRE .start AND .stop
  sNs.sourceList = [
    sNs.mod2OscA,
    sNs.modOscA,
    sNs.mod2OscB,
    sNs.modOscB,
    sNs.mainOsc
  ]  


  // 4. MAKE AUDIO NODE GRAPH
  sNs.mod2OscA.connect(sNs.mod2GainA);
  sNs.mod2GainA.connect(sNs.modGainA.gain);
  sNs.modOscA.connect(sNs.modGainA);
  sNs.modGainA.connect(sNs.mainOsc.frequency);
  
  sNs.mod2OscB.connect(sNs.mod2GainB);
  sNs.mod2GainB.connect(sNs.modGainB.gain);
  sNs.modOscB.connect(sNs.modGainB);
  sNs.modGainB.connect(sNs.mainOsc.frequency);
  
  sNs.mainOsc.connect(sNs.limiterPreGain)
  sNs.limiterPreGain.connect(sNs.limiterWaveShape)
  sNs.limiterWaveShape.connect(sNs.limiterPostGain)

  
  // 5. CONNECT LAST SYNTH NODE TO MIXER
  sNs.synthOutput.connect(objStore.mixer.input);  
}

export default synthMakeNodes
