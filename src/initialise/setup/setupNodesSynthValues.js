import getPicklistValueFromState from '../../general/getPicklistValueFromState'
import getSliderValueFromState from '../../general/getSliderValueFromState'
import dbToGain from '../../general/dbToGain'
import {
  NOTE_FREQ, DISTORTION_DB,
  MAIN_WAVE_SHAPE, MOD_WAVE_SHAPE_A, MOD2_WAVE_SHAPE_A,
  MOD_FREQMULT_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A
} from '../../general'

export const updateFrequencies = (objStore, state) => {
  const value = getSliderValueFromState(state, NOTE_FREQ)
  const multA = getSliderValueFromState(state, MOD_FREQMULT_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) {
    synth.mainOsc.frequency.value = value
    synth.modOscA.frequency.value = value * multA
  }
}

export const updateMainWaveShape = (objStore, state) => {
  const value = getPicklistValueFromState(state, MAIN_WAVE_SHAPE)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.mainOsc.type = value
}

export const updateModWaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD_WAVE_SHAPE_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.modOscA.type = value
}

export const updateMod2WaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, MOD2_WAVE_SHAPE_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.modModOscA.type = value
}

export const updateDistortionDb = (objStore, state) => {
  const value = getSliderValueFromState(state, DISTORTION_DB)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.limitGain.gain.value = dbToGain(value)
}

export const updateModIndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD_IDX_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.modGainA.gain.value = value
}

export const updateMod2FreqA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_RATE_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.modModOscA.frequency.value = 10 ** value
}

export const updateMod2IndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, MOD2_IDX_A)
  const synth = objStore.audioNode.tempSynth
  if (synth) synth.modModGainA.gain.value = value
}

export const setupNodesSynthValues = (objStore, reduxStore) => {
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
