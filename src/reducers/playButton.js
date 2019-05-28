import { getInitialPlayButtonState } from '../setup/setupReduxState'
import { BUTTON_PRESS } from '../constants/actionTypes'

const playButton = (state = getInitialPlayButtonState(), action) => {  
  switch (action.type) {
    case BUTTON_PRESS:
      return {
        ...state,
        isActive: !state.isActive
      }
    default:
      return state
  }
}

export default playButton
