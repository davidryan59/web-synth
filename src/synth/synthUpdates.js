import Tone from 'tone'

import { updateMixerGain } from '../setup/task/setupMixer'
import getPicklistValueFromState from '../getters/getPicklistValueFromState'
import getSliderValueFromState from '../getters/getSliderValueFromState'
import getSliderFromState from '../getters/getSliderFromState'
import dbToGain from '../general/dbToGain'
import { callFunction } from '../functions'
import { scaleFromLabel } from '../constants/scales'
import * as ui from '../constants/uiNames'


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

let scaleFractionArray = []
export const updateMainScale = (objStore, state) => {
  const value = getPicklistValueFromState(state, ui.MAIN_SCALE)
  const scaleAsc = [...scaleFromLabel(value)].sort((a, b) => a - b) // a - b gives ASCENDING order
  const scaleLowestNote = scaleAsc[0]
  const scaleDesc = [...scaleAsc].sort((a, b) => b - a) // b - a gives DESCENDING order
   // Reversed and normalised scale
  scaleFractionArray = scaleDesc.map( a => a / scaleLowestNote )   // Now in terms of fractions over lowest note
}

const mapMainFreqIntoScale = (baseFreq, mainFreq, state) => {
  const freqRatio = mainFreq / baseFreq
  const octaves = Math.floor(Math.log(freqRatio) / Math.log(2))
  const octaveRatio = 2 ** octaves
  const scaleFraction = freqRatio / octaveRatio
  const foundScaleFraction = scaleFractionArray.find(scaleElt => scaleElt <= scaleFraction)
  const mappedFreq = baseFreq * octaveRatio * foundScaleFraction
  return mappedFreq
}

export const updateFrequencies = (objStore, state) => {
  const baseFreqHz = getSliderValueFromState(state, ui.BASE_FREQ)
  const mainFreqHz = getSliderValueFromState(state, ui.MAIN_FREQ)
  const freqValue = mapMainFreqIntoScale(baseFreqHz, mainFreqHz, state)
  const multMain = getSliderValueFromState(state, ui.MAIN_MULT)
  const multA = getSliderValueFromState(state, ui.MOD_MULT_A)
  const multB = getSliderValueFromState(state, ui.MOD_MULT_B)
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

const delayUiNames = [ui.DELAY_RESONANCE_L, ui.DELAY_RESONANCE_C, ui.DELAY_RESONANCE_R]

const getDelayNodeFromUiName = (synthNodes, uiName) => {
  switch (uiName) {
    case ui.DELAY_RESONANCE_L:
      return synthNodes.delayNodeL
    case ui.DELAY_RESONANCE_C:
      return synthNodes.delayNodeC
    case ui.DELAY_RESONANCE_R:
      return synthNodes.delayNodeR
    default:
      return null
  }
}

export const updateDelayTimes = (objStore, state, isInitial) => {
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    delayUiNames.forEach(delayUiName => {
      const slider = getSliderFromState(state, delayUiName)
      if (slider) {
        const value = slider.value
        const displayFn = slider.displayFn
        const resonantFreq = callFunction(value, displayFn)
        const nodeValue = 1 / (2 * resonantFreq)    // Delay time in seconds
        const delayNode = getDelayNodeFromUiName(synthNodes, delayUiName)
        if (isInitial) {
          delayNode.delayTime.value = nodeValue
        } else {
          const currentTime = Tone.now()
          delayNode.delayTime.setTargetAtTime(nodeValue, currentTime + 0.001, 0.1)
        }
      }
    })
  }
}

export const updateDelayVolumePercent = (objStore, state) => {
  const value = getSliderValueFromState(state, ui.DELAY_VOLUME_PERCENT)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.delayMainGain.gain.value = 0.01 * value
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

      case ui.TOGGLE_AUDIO:
        (!data.isActive) ? objStore.synth.fns.startSound() : objStore.synth.fns.stopSound()
        break

      case ui.TOGGLE_ANIMATION:
        (!data.isActive) ? objStore.synth.fns.startGraphics() : objStore.synth.fns.stopGraphics()
        break

      // case ui.TOGGLE_DISTORT_MODE:
      //   (!data.isActive) ? objStore.synth.fns.startSoundAndGraphics() : objStore.synth.fns.stopSound()
      //   console.dir(state)
      //   break

      case ui.MIXER_GAIN:
        updateMixerGain(objStore, state)
        break
      case ui.MAIN_DISTORT:
        updateSynthDistortion(objStore, state)
        break
      case ui.MAIN_SCALE:
        updateMainScale(objStore, state)
        updateFrequencies(objStore, state)
        break
      case ui.MAIN_SHAPE:
        updateMainWaveShape(objStore, state)
        break

      case ui.BASE_FREQ:
      case ui.MAIN_FREQ:
      case ui.MOD_MULT_A:
      case ui.MOD_MULT_B:
      case ui.MAIN_MULT:
        updateFrequencies(objStore, state)
        break

      case ui.DELAY_VOLUME_PERCENT:
        updateDelayVolumePercent(objStore, state)
        break

      case ui.DELAY_RESONANCE_L:
      case ui.DELAY_RESONANCE_C:
      case ui.DELAY_RESONANCE_R:
        updateDelayTimes(objStore, state)
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
  updateMainScale(objStore, reduxState)
  updateFrequencies(objStore, reduxState)

  updateDelayVolumePercent(objStore, reduxState)
  updateDelayTimes(objStore, reduxState, true)

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
