import { getInitialPlayButtonState } from '../initialise/setupReduxState'
import { BUTTON_PRESS } from '../general'

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
