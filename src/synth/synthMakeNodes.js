import Tone from 'tone'

const synthMakeNodes = (objStore, reduxStore) => {

  // 1. CREATE NODE OBJECT AND SHORTCUTS
  const sNs = objStore.synth.nodes = {}
  const sSL = objStore.synth.sourceList = []

  // 2. CREATE NODES
  sNs.mod2OscA = new Tone.Oscillator();
  sNs.mod2GainA = new Tone.Gain();
  sNs.modOscA = new Tone.Oscillator();
  sNs.modGainA = new Tone.Gain();

  sNs.mod2OscB = new Tone.Oscillator();
  sNs.mod2GainB = new Tone.Gain();
  sNs.modOscB = new Tone.Oscillator();
  sNs.modGainB = new Tone.Gain();

  sNs.mainOsc = new Tone.Oscillator();

  sNs.limiterPreGain = new Tone.Gain();
  sNs.limiterWaveShape = new Tone.WaveShaper();
  sNs.limiterWaveShape.curve = new Float32Array([-1, 1])
  sNs.limiterPostGain = new Tone.Gain();

  const maxDelayS = 2
  const gainM = 0.5
  sNs.delayNodeM = new Tone.Delay(maxDelayS, maxDelayS)
  sNs.delayGainM = new Tone.Gain()
  sNs.delayGainM.gain.value = -gainM

  sNs.delayNodeL = new Tone.Delay(maxDelayS, maxDelayS)
  sNs.delayGainL = new Tone.Gain()
  sNs.delayGainL.gain.value = gainM - 1
  sNs.delayPanL = new Tone.Panner()
  sNs.delayPanL.pan.value = -1

  sNs.delayNodeR = new Tone.Delay(maxDelayS, maxDelayS)
  sNs.delayGainR = new Tone.Gain()
  sNs.delayGainR.gain.value = gainM - 1
  sNs.delayPanR = new Tone.Panner()
  sNs.delayPanR.pan.value = 1

  sNs.delayMainGain = new Tone.Gain()

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
