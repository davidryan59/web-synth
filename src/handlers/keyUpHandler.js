import { getSynthUpdateThunk } from '../actions'
import getButtonFromState from '../getters/getButtonFromState'
import { BUTTON_PRESS } from '../constants/actionTypes'
import { keyUpMap } from '../constants/uiNames'

const keyUpHandler = (evt, objStore, reduxStore) => {
  const thisKeyCode = evt.code
  console.log(`Key up ${thisKeyCode}`)
  keyUpMap.forEach( ([keyCode, keyUI, keyMsg]) => {
    if (thisKeyCode === keyCode) {
      if (keyUI) reduxStore.dispatch(
        getSynthUpdateThunk(BUTTON_PRESS, {
          id: keyUI,
          isActive: getButtonFromState(reduxStore.getState(), keyUI).isActive
        })
      )
      if (keyMsg) console.log(keyMsg)
    }
  })
}

export default keyUpHandler
