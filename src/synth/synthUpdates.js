import { updateMixerGain } from '../setup/task/setupMixer'
import getPicklistValueFromState from '../getters/getPicklistValueFromState'
import getSliderValueFromState from '../getters/getSliderValueFromState'
import dbToGain from '../general/dbToGain'
import {
  PLAY_SOUND, MIXER_GAIN, SYNTH_DISTORTION, SYNTH_WAVE_SHAPE, SYNTH_NOTE_FREQ, MOD_MULT_MAIN,
  DELAY_RESONANCE_L, DELAY_RESONANCE_M, DELAY_RESONANCE_R,
  MOD_WAVE_SHAPE_A, MOD2_WAVE_SHAPE_A, MOD_FREQ_NUM_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A,
  MOD_WAVE_SHAPE_B, MOD2_WAVE_SHAPE_B, MOD_FREQ_NUM_B, MOD_IDX_B, MOD2_RATE_B, MOD2_IDX_B
} from '../constants'

export const updateSynthDistortion = (objStore, state) => {
  const value = getSliderValueFromState(state, SYNTH_DISTORTION)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    const finalAmp = dbToGain(-value)
    synthNodes.limiterPreGain.gain.value = 1 / finalAmp
    synthNodes.limiterPostGain.gain.value = finalAmp
  }
}

export const updateMainWaveShape = (objStore, state) => {
  const value = getPicklistValueFromState(state, SYNTH_WAVE_SHAPE)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mainOsc.type = value
}

export const updateFrequencies = (objStore, state) => {
  const value = getSliderValueFromState(state, SYNTH_NOTE_FREQ)
  const multMain = getSliderValueFromState(state, MOD_MULT_MAIN)
  const multA = getSliderValueFromState(state, MOD_FREQ_NUM_A)
  const multB = getSliderValueFromState(state, MOD_FREQ_NUM_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    synthNodes.mainOsc.frequency.value = value * multMain
    synthNodes.modOscA.frequency.value = value * multA
    synthNodes.modOscB.frequency.value = value * multB
    // Modulator frequencies can easily go
    // outside -22,050 Hz to 22,050 Hz
    // which can give a warning.
    // Currently ignoring this warning.
  }
}

// Maps a resonant frequency in Hz to a delay time in seconds
// const mapDelayResonance = valueInHz => 1 / (valueInHz * 2)

// Same, but for octave slider
const mapDelayResonance = value => 1 / ((2 ** value) * 2)

export const updateDelayNodes = (objStore, state, isInitial) => {
  const sliderValueL = getSliderValueFromState(state, DELAY_RESONANCE_L)
  const sliderValueM = getSliderValueFromState(state, DELAY_RESONANCE_M)
  const sliderValueR = getSliderValueFromState(state, DELAY_RESONANCE_R)
  const nodeValueL = mapDelayResonance(sliderValueL)
  const nodeValueM = mapDelayResonance(sliderValueM)
  const nodeValueR = mapDelayResonance(sliderValueR)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    if (isInitial) {
      // Initialisation
      synthNodes.delayNodeL.delayTime.value = nodeValueL
      synthNodes.delayNodeM.delayTime.value = nodeValueM
      synthNodes.delayNodeR.delayTime.value = nodeValueR
    } else {
      // Gradual change, if set by user
      synthNodes.delayNodeL.delayTime.setTargetAtTime(nodeValueL, objStore.ctx.audio.currentTime + 0.001, 0.03)
      synthNodes.delayNodeM.delayTime.setTargetAtTime(nodeValueM, objStore.ctx.audio.currentTime + 0.001, 0.03)
      synthNodes.delayNodeR.delayTime.setTargetAtTime(nodeValueR, objStore.ctx.audio.currentTime + 0.001, 0.03)
    }
  }
}


export const updateModWaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD_WAVE_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscA.type = value
}

export const updateMod2WaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD2_WAVE_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.type = value
}

export const updateModIndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainA.gain.value = value
}

export const updateMod2FreqA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_RATE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.frequency.value = 10 ** value
}

export const updateMod2IndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainA.gain.value = value
}


export const updateModWaveShapeB = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD_WAVE_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscB.type = value
}

export const updateMod2WaveShapeB = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD2_WAVE_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.type = value
}

export const updateModIndexB = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainB.gain.value = value
}

export const updateMod2FreqB = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_RATE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.frequency.value = 10 ** value
}

export const updateMod2IndexB = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainB.gain.value = value
}


export const synthUpdate = (data, getState, objStore) => {
  if (objStore.setup && data && data.id && getState) {
    const state = getState()
    switch (data.id) {
      case PLAY_SOUND:
        (!data.isActive) ? objStore.synth.fns.startSoundAndGraphics() : objStore.synth.fns.stopSound()
        console.dir(state)
        break
      case MIXER_GAIN:
        updateMixerGain(objStore, state)
        break
      case SYNTH_DISTORTION:
      updateSynthDistortion(objStore, state)
      break
      case SYNTH_WAVE_SHAPE:
        updateMainWaveShape(objStore, state)
        break
        
      case SYNTH_NOTE_FREQ:
      case MOD_FREQ_NUM_A:
      case MOD_FREQ_NUM_B:
      case MOD_MULT_MAIN:
        updateFrequencies(objStore, state)
        break
        
      case DELAY_RESONANCE_L:
      case DELAY_RESONANCE_M:
      case DELAY_RESONANCE_R:
        updateDelayNodes(objStore, state, true)
        break
        
      case MOD_WAVE_SHAPE_A:
        updateModWaveShapeA(objStore, state)
        break
      case MOD_IDX_A:
        updateModIndexA(objStore, state)
        break
      case MOD2_WAVE_SHAPE_A:
        updateMod2WaveShapeA(objStore, state)
        break
      case MOD2_RATE_A:
        updateMod2FreqA(objStore, state)
        break
      case MOD2_IDX_A:
        updateMod2IndexA(objStore, state)
        break
        
      case MOD_WAVE_SHAPE_B:
        updateModWaveShapeB(objStore, state)
        break
      case MOD_IDX_B:
        updateModIndexB(objStore, state)
        break
      case MOD2_WAVE_SHAPE_B:
        updateMod2WaveShapeB(objStore, state)
        break
      case MOD2_RATE_B:
        updateMod2FreqB(objStore, state)
        break
      case MOD2_IDX_B:
        updateMod2IndexB(objStore, state)
        break
        
      default:
        //
    }    
  } else {
    console.log(`Synth update failed for data:`, data)
  }  
  if (objStore.setup) {
    switch (data.id) {
      default:
        //
    }    
  }
}

export const synthInitialiseValues = (objStore, reduxStore) => {
  const reduxState = reduxStore.getState()
  updateSynthDistortion(objStore, reduxState)
  updateMainWaveShape(objStore, reduxState)
  updateFrequencies(objStore, reduxState)

  updateDelayNodes(objStore, reduxState)
  
  updateModWaveShapeA(objStore, reduxState)
  updateModIndexA(objStore, reduxState)
  updateMod2WaveShapeA(objStore, reduxState)  
  updateMod2FreqA(objStore, reduxState)
  updateMod2IndexA(objStore, reduxState)
  
  updateModWaveShapeB(objStore, reduxState)
  updateModIndexB(objStore, reduxState)
  updateMod2WaveShapeB(objStore, reduxState)  
  updateMod2FreqB(objStore, reduxState)
  updateMod2IndexB(objStore, reduxState)
}
