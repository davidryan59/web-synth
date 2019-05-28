import * as ui from '../constants/uiNames'

import { updateMixerGain } from '../setup/task/setupMixer'
import getPicklistValueFromState from '../getters/getPicklistValueFromState'
import getSliderValueFromState from '../getters/getSliderValueFromState'
import dbToGain from '../general/dbToGain'
// import {
//   PLAY_SOUND, MIXER_GAIN, MAIN_DISTORT, MAIN_SHAPE, MAIN_FREQ, MAIN_MULT,
//   DELAY_RESONANCE_L, DELAY_RESONANCE_M, DELAY_RESONANCE_R,
//   MOD_SHAPE_A, MOD2_SHAPE_A, MOD_MULT_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A,
//   MOD_SHAPE_B, MOD2_SHAPE_B, MOD_MULT_B, MOD_IDX_B, MOD2_RATE_B, MOD2_IDX_B
// } from '../constants/general'

export const updateSynthDistortion = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MAIN_DISTORT)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    const finalAmp = dbToGain(-value)
    synthNodes.limiterPreGain.gain.value = 1 / finalAmp
    synthNodes.limiterPostGain.gain.value = finalAmp
  }
}

export const updateMainWaveShape = (objStore, state) => {
  const value = getPicklistValueFromState(state, ui.MAIN_SHAPE)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mainOsc.type = value
}

// const scale = [24, 27, 30, 32, 36, 40, 45]
// const scale = [12, 14, 16, 18, 21]
// const scale = [7, 8, 9, 10, 11, 12, 13]
// const scale = [6, 7, 8, 9, 10, 11]
const scale = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const scaleR = [...scale].sort((a, b) => b - a) // b - a gives DESCENDING order
console.log(scaleR)

const mapMainFreq = (freq, state) => {
  const octaves = Math.floor(Math.log(freq / scale[0]) / Math.log(2))
  const findVal = freq * (2 ** -octaves)
  const foundScaleElt = scaleR.find(scaleElt => scaleElt <= findVal)
  return foundScaleElt * (2 ** octaves)
}

export const updateFrequencies = (objStore, state) => {
  const sliderValue = getSliderValueFromState(state, ui.MAIN_FREQ)
  const multMain = getSliderValueFromState(state, ui.MAIN_MULT)
  const multA = getSliderValueFromState(state, ui.MOD_MULT_A)
  const multB = getSliderValueFromState(state, ui.MOD_MULT_B)
  const freqValue = mapMainFreq(sliderValue, state)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    synthNodes.mainOsc.frequency.value = freqValue * multMain
    synthNodes.modOscA.frequency.value = freqValue * multA
    synthNodes.modOscB.frequency.value = freqValue * multB
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
  const sliderValueL = getSliderValueFromState(state, ui.DELAY_RESONANCE_L)
  const sliderValueM = getSliderValueFromState(state, ui.DELAY_RESONANCE_M)
  const sliderValueR = getSliderValueFromState(state, ui.DELAY_RESONANCE_R)
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
  const value = getPicklistValueFromState(state, ui.MOD_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscA.type = value
}

export const updateMod2WaveShapeA = (objStore, state) => {
  const value = getPicklistValueFromState(state, ui.MOD2_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.type = value
}

export const updateModIndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainA.gain.value = value
}

export const updateMod2FreqA = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD2_RATE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.frequency.value = 10 ** value
}

export const updateMod2IndexA = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD2_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainA.gain.value = value
}


export const updateModWaveShapeB = (objStore, state) => {
  const value = getPicklistValueFromState(state, ui.MOD_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscB.type = value
}

export const updateMod2WaveShapeB = (objStore, state) => {
  const value = getPicklistValueFromState(state, ui.MOD2_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.type = value
}

export const updateModIndexB = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainB.gain.value = value
}

export const updateMod2FreqB = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD2_RATE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.frequency.value = 10 ** value
}

export const updateMod2IndexB = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.MOD2_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainB.gain.value = value
}


export const synthUpdate = (data, getState, objStore) => {
  if (objStore.setup && data && data.id && getState) {
    const state = getState()
    switch (data.id) {
      case ui.PLAY_SOUND:
        (!data.isActive) ? objStore.synth.fns.startSoundAndGraphics() : objStore.synth.fns.stopSound()
        console.dir(state)
        break
      case ui.MIXER_GAIN:
        updateMixerGain(objStore, state)
        break
      case ui.MAIN_DISTORT:
      updateSynthDistortion(objStore, state)
      break
      case ui.MAIN_SHAPE:
        updateMainWaveShape(objStore, state)
        break
        
      case ui.MAIN_FREQ:
      case ui.MOD_MULT_A:
      case ui.MOD_MULT_B:
      case ui.MAIN_MULT:
        updateFrequencies(objStore, state)
        break
        
      case ui.DELAY_RESONANCE_L:
      case ui.DELAY_RESONANCE_M:
      case ui.DELAY_RESONANCE_R:
        updateDelayNodes(objStore, state, true)
        break
        
      case ui.MOD_SHAPE_A:
        updateModWaveShapeA(objStore, state)
        break
      case ui.MOD_IDX_A:
        updateModIndexA(objStore, state)
        break
      case ui.MOD2_SHAPE_A:
        updateMod2WaveShapeA(objStore, state)
        break
      case ui.MOD2_RATE_A:
        updateMod2FreqA(objStore, state)
        break
      case ui.MOD2_IDX_A:
        updateMod2IndexA(objStore, state)
        break
        
      case ui.MOD_SHAPE_B:
        updateModWaveShapeB(objStore, state)
        break
      case ui.MOD_IDX_B:
        updateModIndexB(objStore, state)
        break
      case ui.MOD2_SHAPE_B:
        updateMod2WaveShapeB(objStore, state)
        break
      case ui.MOD2_RATE_B:
        updateMod2FreqB(objStore, state)
        break
      case ui.MOD2_IDX_B:
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
