import { updateMixerGain } from '../setup/task/setupMixer'
import getPicklistValueFromState from '../getters/getPicklistValueFromState'
import getSliderValueFromState from '../getters/getSliderValueFromState'
import dbToGain from '../general/dbToGain'
import {
  PLAY_SOUND,
  MIXER_GAIN, SYNTH_NOTE_FREQ, SYNTH_DISTORTION,
  SYNTH_WAVE_SHAPE, MOD_WAVE_SHAPE_A, MOD2_WAVE_SHAPE_A,
  MOD_FREQMULT_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A
} from '../constants'

export const updateFrequencies = (objStore, state) => {
  const value = getSliderValueFromState(state, SYNTH_NOTE_FREQ)
  const multA = getSliderValueFromState(state, MOD_FREQMULT_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    synthNodes.mainOsc.frequency.value = value
    synthNodes.modOscA.frequency.value = value * multA
  }
}

export const updateMainWaveShape = (objStore, state) => {
  const value = getPicklistValueFromState(state, SYNTH_WAVE_SHAPE)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mainOsc.type = value
}

export const updateModWaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD_WAVE_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscA.type = value
}

export const updateMod2WaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD2_WAVE_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modModOscA.type = value
}

export const updateDistortionDb = (objStore, state) => {
  const value = getSliderValueFromState(state, SYNTH_DISTORTION)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.limitGain.gain.value = dbToGain(value)
}

export const updateModIndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainA.gain.value = value
}

export const updateMod2FreqA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_RATE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modModOscA.frequency.value = 10 ** value
}

export const updateMod2IndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modModGainA.gain.value = value
}

export const synthUpdate = (data, getState, objStore) => {
  if (objStore.setup && data && data.id && getState) {
    const state = getState()
    switch (data.id) {
      case PLAY_SOUND:
        (!data.isActive) ? objStore.synth.fns.startSoundAndGraphics() : objStore.synth.fns.stopSound()
        break
      case MIXER_GAIN:
        updateMixerGain(objStore, state)
        break
      case SYNTH_DISTORTION:
      updateDistortionDb(objStore, state)
      break
      case SYNTH_WAVE_SHAPE:
        updateMainWaveShape(objStore, state)
        break
      case SYNTH_NOTE_FREQ:
      case MOD_FREQMULT_A:
        updateFrequencies(objStore, state)
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
  updateDistortionDb(objStore, reduxState)
  updateMainWaveShape(objStore, reduxState)
  updateFrequencies(objStore, reduxState)
  updateModWaveShapeA(objStore, reduxState)
  updateModIndexA(objStore, reduxState)
  updateMod2WaveShapeA(objStore, reduxState)  
  updateMod2FreqA(objStore, reduxState)
  updateMod2IndexA(objStore, reduxState)
}
