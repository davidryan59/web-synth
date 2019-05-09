import { SLIDER_MOVE } from '../constants'

const slider = (state = {}, action) => {  
  switch (action.type) {
    case SLIDER_MOVE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

export default slider
