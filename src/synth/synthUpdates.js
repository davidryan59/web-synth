import Tone from 'tone'

import { updateMixerGain } from '../setup/task/setupMixer'
import { getPicklistValue } from '../getters/picklist'
import { buttonActive } from '../getters/button'
import { getSliderByName, getSliderDisplayValue } from '../getters/slider'
import * as map from '../general/mappings'
import { scaleFromLabel } from '../constants/scales'
import * as ui from '../constants/uiNames'
import * as gen from '../constants/general'

export const updateSynthDistortCurve = (objStore, state, isInitial) => {
  const type = getPicklistValue(state, ui.PICK_DISTORT_FN)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.limiterWaveShape.curve = gen.getDistortionCurveFromType(type)
}

export const updateSynthDistortion = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_DISTORTION)
  const amplifyDistortModeOn = buttonActive(state, ui.TOGGLE_DISTORT_MODE)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    const finalAmp = map.numericMap(value, map.MAP_DB_TO_GAIN) // this slider positive, 0 to 20 dB
    synthNodes.limiterPreGain.gain.value = finalAmp
    synthNodes.limiterPostGain.gain.value = (amplifyDistortModeOn) ? 1 : 1 / finalAmp
  }
}

export const updateMainWaveShape = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_MAIN_SHAPE)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mainOsc.type = value
}

let scaleFractionArray = []
export const updateMainScale = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_SCALE)
  const scaleAsc = [...scaleFromLabel(value)].sort((a, b) => a - b) // a - b gives ASCENDING order
  const scaleLowestNote = scaleAsc[0]
  const scaleDesc = [...scaleAsc].sort((a, b) => b - a) // b - a gives DESCENDING order
  // Reversed and normalised scale
  scaleFractionArray = scaleDesc.map(a => a / scaleLowestNote) // Now in terms of fractions over lowest note
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

export const updateFrequencies = (objStore, state, isInitial) => {
  const baseFreqHz = getSliderDisplayValue(state, ui.SLIDER_BASE_FREQ)
  const mainFreqHz = getSliderDisplayValue(state, ui.SLIDER_MAIN_FREQ)
  const freqValue = mapMainFreqIntoScale(baseFreqHz, mainFreqHz, state)
  const multMain = getSliderDisplayValue(state, ui.SLIDER_MAIN_MULT)
  const multA = getSliderDisplayValue(state, ui.SLIDER_MOD_MULT_A)
  const multB = getSliderDisplayValue(state, ui.SLIDER_MOD_MULT_B)
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

export const updateDelayVolumePercent = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_DELAY_VOL_PC)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.delayMainGain.gain.value = 0.01 * value
}

export const updateDelayChannelGains = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_DELAY_CENTRE_PC)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    const centreAmp = 0.01 * value // 0 to 1
    synthNodes.delayGainL.gain.value = -0.5 * (1 - centreAmp)
    synthNodes.delayGainC.gain.value = -centreAmp
    synthNodes.delayGainR.gain.value = -0.5 * (1 - centreAmp)
  }
}

const delayUiNames = [ui.SLIDER_DELAY_RES_L, ui.SLIDER_DELAY_RES_C, ui.SLIDER_DELAY_RES_R]

const getDelayNodeFromUiName = (synthNodes, uiName) => {
  switch (uiName) {
    case ui.SLIDER_DELAY_RES_L:
      return synthNodes.delayNodeL
    case ui.SLIDER_DELAY_RES_C:
      return synthNodes.delayNodeC
    case ui.SLIDER_DELAY_RES_R:
      return synthNodes.delayNodeR
    default:
      return null
  }
}

export const updateDelayTimes = (objStore, state, isInitial) => {
  const synthNodes = objStore.synth.nodes
  if (synthNodes) {
    delayUiNames.forEach(delayUiName => {
      const slider = getSliderByName(state, delayUiName)
      if (slider) {
        const resonantFreq = getSliderDisplayValue(state, delayUiName)
        const nodeValue = 1 / (2 * resonantFreq) // Delay time in seconds
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

export const updateModWaveShapeA = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_MOD_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscA.type = value
}

export const updateMod2WaveShapeA = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_MOD2_SHAPE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.type = value
}

export const updateModIndexA = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainA.gain.value = value
}

export const updateMod2FreqA = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD2_RATE_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscA.frequency.value = value
}

export const updateMod2IndexA = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD2_IDX_A)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainA.gain.value = value
}

export const updateModWaveShapeB = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_MOD_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modOscB.type = value
}

export const updateMod2WaveShapeB = (objStore, state, isInitial) => {
  const value = getPicklistValue(state, ui.PICK_MOD2_SHAPE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.type = value
}

export const updateModIndexB = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.modGainB.gain.value = value
}

export const updateMod2FreqB = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD2_RATE_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2OscB.frequency.value = value
}

export const updateMod2IndexB = (objStore, state, isInitial) => {
  const value = getSliderDisplayValue(state, ui.SLIDER_MOD2_IDX_B)
  const synthNodes = objStore.synth.nodes
  if (synthNodes) synthNodes.mod2GainB.gain.value = value
}

export const synthUpdate = (data, getState, objStore) => {
  if (objStore.setup && data && data.id && getState) {
    const reduxState = getState()
    switch (data.id) {
      case ui.TOGGLE_AUDIO:
        (!data.isActive) ? objStore.synth.fns.startSound() : objStore.synth.fns.stopSound()
        break

      case ui.TOGGLE_ANIMATION:
        (!data.isActive) ? objStore.synth.fns.startGraphics() : objStore.synth.fns.stopGraphics()
        break

      case ui.SLIDER_MIXER_GAIN:
        updateMixerGain(objStore, reduxState)
        break
      case ui.PICK_DISTORT_FN:
        updateSynthDistortCurve(objStore, reduxState)
        break
      case ui.SLIDER_DISTORTION:
      case ui.TOGGLE_DISTORT_MODE:
        updateSynthDistortion(objStore, reduxState)
        break
      case ui.PICK_SCALE:
        updateMainScale(objStore, reduxState)
        updateFrequencies(objStore, reduxState)
        break
      case ui.PICK_MAIN_SHAPE:
        updateMainWaveShape(objStore, reduxState)
        break

      case ui.SLIDER_BASE_FREQ:
      case ui.SLIDER_MAIN_FREQ:
      case ui.SLIDER_MOD_MULT_A:
      case ui.SLIDER_MOD_MULT_B:
      case ui.SLIDER_MAIN_MULT:
        updateFrequencies(objStore, reduxState)
        break

      case ui.SLIDER_DELAY_VOL_PC:
        updateDelayVolumePercent(objStore, reduxState)
        break
      case ui.SLIDER_DELAY_CENTRE_PC:
        updateDelayChannelGains(objStore, reduxState)
        break
      case ui.SLIDER_DELAY_RES_L:
      case ui.SLIDER_DELAY_RES_C:
      case ui.SLIDER_DELAY_RES_R:
        updateDelayTimes(objStore, reduxState)
        break

      case ui.PICK_MOD_SHAPE_A:
        updateModWaveShapeA(objStore, reduxState)
        break
      case ui.SLIDER_MOD_IDX_A:
        updateModIndexA(objStore, reduxState)
        break
      case ui.PICK_MOD2_SHAPE_A:
        updateMod2WaveShapeA(objStore, reduxState)
        break
      case ui.SLIDER_MOD2_RATE_A:
        updateMod2FreqA(objStore, reduxState)
        break
      case ui.SLIDER_MOD2_IDX_A:
        updateMod2IndexA(objStore, reduxState)
        break

      case ui.PICK_MOD_SHAPE_B:
        updateModWaveShapeB(objStore, reduxState)
        break
      case ui.SLIDER_MOD_IDX_B:
        updateModIndexB(objStore, reduxState)
        break
      case ui.PICK_MOD2_SHAPE_B:
        updateMod2WaveShapeB(objStore, reduxState)
        break
      case ui.SLIDER_MOD2_RATE_B:
        updateMod2FreqB(objStore, reduxState)
        break
      case ui.SLIDER_MOD2_IDX_B:
        updateMod2IndexB(objStore, reduxState)
        break

      default:
        //
    }
  } else {
    console.log('Synth update failed for data:', data)
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
  updateSynthDistortCurve(objStore, reduxState, true)
  updateSynthDistortion(objStore, reduxState, true)
  updateMainWaveShape(objStore, reduxState, true)
  updateMainScale(objStore, reduxState, true)
  updateFrequencies(objStore, reduxState, true)

  updateDelayVolumePercent(objStore, reduxState, true)
  updateDelayChannelGains(objStore, reduxState, true)
  updateDelayTimes(objStore, reduxState, true)

  updateModWaveShapeA(objStore, reduxState, true)
  updateModIndexA(objStore, reduxState, true)
  updateMod2WaveShapeA(objStore, reduxState, true)
  updateMod2FreqA(objStore, reduxState, true)
  updateMod2IndexA(objStore, reduxState, true)

  updateModWaveShapeB(objStore, reduxState, true)
  updateModIndexB(objStore, reduxState, true)
  updateMod2WaveShapeB(objStore, reduxState, true)
  updateMod2FreqB(objStore, reduxState, true)
  updateMod2IndexB(objStore, reduxState, true)
}
