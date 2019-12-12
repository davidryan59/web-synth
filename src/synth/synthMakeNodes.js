const synthMakeNodes = (objStore, reduxStore) => {

  // 1. CREATE NODE OBJECT AND SHORTCUTS
  const sNs = objStore.synth.nodes = {}
  const sSL = objStore.synth.sourceList = []
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

  const maxDelayS = 2
  const gainM = 0.5
  sNs.delayNodeM = aCtx.createDelay(maxDelayS)
  sNs.delayGainM = aCtx.createGain()
  sNs.delayGainM.gain.value = -gainM

  sNs.delayNodeL = aCtx.createDelay(maxDelayS)
  sNs.delayGainL = aCtx.createGain()
  sNs.delayGainL.gain.value = gainM - 1
  sNs.delayPanL = aCtx.createStereoPanner()
  sNs.delayPanL.pan.value = -1

  sNs.delayNodeR = aCtx.createDelay(maxDelayS)
  sNs.delayGainR = aCtx.createGain()
  sNs.delayGainR.gain.value = gainM - 1
  sNs.delayPanR = aCtx.createStereoPanner()
  sNs.delayPanR.pan.value = 1

  sNs.delayMainGain = aCtx.createGain()

  // 3. SPECIFY SOURCE NODES, WHICH REQUIRE .start AND .stop
  sSL.push(sNs.mod2OscA)
  sSL.push(sNs.mod2OscB)
  sSL.push(sNs.modOscA)
  sSL.push(sNs.modOscB)
  sSL.push(sNs.mainOsc)

  // 4. MAKE AUDIO NODE GRAPH
  sNs.mod2OscA.connect(sNs.mod2GainA);
  sNs.mod2GainA.connect(sNs.modGainA.gain);
  sNs.modOscA.connect(sNs.modGainA);
  sNs.modGainA.connect(sNs.mainOsc.frequency);

  sNs.mod2OscB.connect(sNs.mod2GainB);
  sNs.mod2GainB.connect(sNs.modGainB.gain);
  sNs.modOscB.connect(sNs.modGainB);
  sNs.modGainB.connect(sNs.mainOsc.frequency);

  sNs.mainOsc.connect(sNs.limiterPreGain);

  sNs.limiterPreGain.connect(sNs.limiterWaveShape)
  sNs.limiterWaveShape.connect(sNs.limiterPostGain)
  sNs.limiterPostGain.connect(objStore.mixer.input);

  sNs.limiterPostGain.connect(sNs.delayNodeM)
  sNs.delayNodeM.connect(sNs.delayGainM)
  sNs.delayGainM.connect(sNs.delayMainGain);

  sNs.limiterPostGain.connect(sNs.delayNodeL)
  sNs.delayNodeL.connect(sNs.delayGainL)
  sNs.delayGainL.connect(sNs.delayPanL);
  sNs.delayPanL.connect(sNs.delayMainGain);

  sNs.limiterPostGain.connect(sNs.delayNodeR)
  sNs.delayNodeR.connect(sNs.delayGainR)
  sNs.delayGainR.connect(sNs.delayPanR);
  sNs.delayPanR.connect(sNs.delayMainGain);

  sNs.delayMainGain.connect(objStore.mixer.input);

  // ALL SYNTH NODES SHOULD NOW BE CONNECTED TO MIXER
}

export default synthMakeNodes
