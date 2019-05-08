import {
  WINDOW_RESIZE, SLIDER_MOVE, BUTTON_PRESS,
  NOTE_FREQ, OVERALL_GAIN, PLAY_SOUND
} from '../general'

let nextActionId = 0
const actionCreator = ({type, data}) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const windowResizeAction = data => actionCreator({type: WINDOW_RESIZE, data})

export const moveSliderAction = data => actionCreator({type: SLIDER_MOVE, data})
export const moveSliderThunk = data => (dispatch, getState, objStore) => {
  dispatch(moveSliderAction(data))
  if (objStore.setup) {
    const synth = objStore.audioNode.tempSynth
    const newValue = data.value
    switch (data.id) {
      case NOTE_FREQ:
        if (synth) {
          // Need to update both main frequency and modulating frequency
          synth.mainOsc.frequency.value = newValue
          synth.modOscA.frequency.value = newValue * synth.modOscMultA
          // Other modulating oscillators might get added here too...
        }
        break
      case OVERALL_GAIN:
        objStore.audioNode.mainGain.gain.value = 10 ** (newValue / 20)
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
