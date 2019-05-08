import { NOTE_FREQ } from '../../general'

console.log(`Put all of these into state and slider/input:`)
console.log(`Main osc type`)
console.log(`Mod Osc Type`)
console.log(`Mod Osc Mult A`)
console.log(`(also create extra B, C modulators)`)
console.log(`Mod Osc Gain`)
console.log(`Modmod Osc Type`)
console.log(`Modmod Osc Freq`)
console.log(`Modmod Osc Gain`)
console.log(`Distortion dB`)

const setupNodesTemp = (objStore, reduxStore) => {
  // GET INITIAL VALUES FROM REDUX STORE
  const sliders = reduxStore.getState().sliders
  const initialFrequency = sliders.find( slider => slider.id === NOTE_FREQ ).value
  
  // SECTION 1 - CREATE NODES
  
  objStore.audioNode.tempSynth = {}
  const thisNote = objStore.audioNode.tempSynth
  
  // Generate main waveform
  thisNote.mainOsc = objStore.ctx.audio.createOscillator();
  thisNote.mainOsc.type = 'sine';
  thisNote.mainOsc.frequency.value = initialFrequency;
  
  // Generate modulator for main waveform
  // Oscillator
  thisNote.modOscA = objStore.ctx.audio.createOscillator();
  thisNote.modOscA.type = 'sine';
  thisNote.modOscMultA = 2;
  thisNote.modOscA.frequency.value = initialFrequency * thisNote.modOscMultA;
  // Gain
  thisNote.modGainA = objStore.ctx.audio.createGain();
  thisNote.modGainA.gain.value = 1000;

  // Generate modulator for modulator for main waveform
  // Oscillator
  thisNote.modModOscA = objStore.ctx.audio.createOscillator();
  thisNote.modModOscA.type = 'sine';
  thisNote.modModOscA.frequency.value = 0.4;
  // Gain
  thisNote.modModGainA = objStore.ctx.audio.createGain();
  thisNote.modModGainA.gain.value = 800;
  
  // Main waveform (range -1 to 1) will distorted using gain then limiter  
  thisNote.limitGain = objStore.ctx.audio.createGain();
  
  thisNote.distortionDb = 0    // 0 is no distortion. 
  thisNote.limitGain.gain.value = 10 ** (thisNote.distortionDb / 20)
  thisNote.limitShaper = objStore.ctx.audio.createWaveShaper();
  thisNote.limitShaper.curve = new Float32Array([-1, 1])
  
  
  // SECTION 2 - CONNECT NODES TOGETHER
  
  // Create graph of transient nodes
  thisNote.modModOscA.connect(thisNote.modModGainA);
  thisNote.modModGainA.connect(thisNote.modGainA.gain);
  thisNote.modOscA.connect(thisNote.modGainA);
  thisNote.modGainA.connect(thisNote.mainOsc.frequency);
  thisNote.mainOsc.connect(thisNote.limitGain);
  thisNote.limitGain.connect(thisNote.limitShaper);
  
  // Connect graph to first persistent node
  thisNote.limitShaper.connect(objStore.audioNode.firstPersistent);
  
  
  // SECTION 3 - LIST THE NODES THAT START AND STOP
  thisNote.nodesToStartAndStop = [
    thisNote.modModOscA,
    thisNote.modOscA,
    thisNote.mainOsc
  ]
}

export default setupNodesTemp
