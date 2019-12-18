import { getSynthUpdateThunk } from '../actions'
import { buttonActive } from '../getters/button'
import { BUTTON_PRESS } from '../constants/actionTypes'
import { keyUpMap } from '../constants/uiNames'

const keyUpHandler = (evt, objStore, reduxStore) => {
  const keyCode = evt.code
  const keyUI = keyUpMap[keyCode]
  if (!keyUI) {
    console.log(`Key up ${keyCode}`)
    return
  }
  const buttonState = buttonActive(reduxStore.getState(), keyUI)
  console.log(`Key up ${keyCode}: ${keyUI} on previous state ${buttonState}`)
  reduxStore.dispatch(
    getSynthUpdateThunk(BUTTON_PRESS, {
      id: keyUI,
      isActive: buttonState
    })
  )
}

export default keyUpHandler
