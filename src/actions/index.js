import {
  WINDOW_RESIZE, SET_PICKLIST, SLIDER_MOVE, BUTTON_PRESS, PLAY_SOUND,
  MAIN_WAVE_SHAPE, MOD_WAVE_SHAPE_A, MOD2_WAVE_SHAPE_A,
  OVERALL_GAIN, NOTE_FREQ, DISTORTION_DB,
  MOD_FREQMULT_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A
} from '../general'

import {
  updateFrequencies, updateMainWaveShape, updateModWaveShapeA, updateMod2WaveShapeA,
  updateDistortionDb, updateModIndexA, updateMod2FreqA, updateMod2IndexA
} from '../initialise/setup/setupNodesSynthValues'

import { updateMainGain } from '../initialise/setup/setupNodesMixerValues'

let nextActionId = 0
const actionCreator = ({type, data}) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const windowResizeAction = data => actionCreator({type: WINDOW_RESIZE, data})

export const selectFromPicklistAction = data => actionCreator({type: SET_PICKLIST, data})
export const selectFromPicklistThunk = data => (dispatch, getState, objStore) => {
  dispatch(selectFromPicklistAction(data))
  if (objStore.setup) {
    const state = getState()
    switch (data.id) {
      case MAIN_WAVE_SHAPE:
        updateMainWaveShape(objStore, state)
        break
      case MOD_WAVE_SHAPE_A:
        updateModWaveShapeA(objStore, state)
        break
      case MOD2_WAVE_SHAPE_A:
        updateMod2WaveShapeA(objStore, state)
        break
      default:
        //
    }    
  }
}

export const moveSliderAction = data => actionCreator({type: SLIDER_MOVE, data})
export const moveSliderThunk = data => (dispatch, getState, objStore) => {
  dispatch(moveSliderAction(data))
  if (objStore.setup) {
    const state = getState()
    switch (data.id) {
      case OVERALL_GAIN:
        updateMainGain(objStore, state)
        break
      case NOTE_FREQ:
      case MOD_FREQMULT_A:
        updateFrequencies(objStore, state)
        break
      case DISTORTION_DB:
        updateDistortionDb(objStore, state)
        break
      case MOD_IDX_A:
        updateModIndexA(objStore, state)
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
  }
}

export const buttonPressAction = data => actionCreator({type: BUTTON_PRESS, data})
export const buttonPressThunk = data => (dispatch, getState, objStore) => {
  dispatch(buttonPressAction(data))
  if (objStore.setup) {
    switch (data.id) {
      case PLAY_SOUND:
        (!data.isActive) ? objStore.fn.startSoundAndGraphics() : objStore.fn.stopSound()
        break
      default:
        //
    }    
  }
}
