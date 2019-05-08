import { WINDOW_RESIZE } from '../actions/types'
import { getInitialWindowState } from '../initialise/reduxState'

const windowReducer = (state = getInitialWindowState(), action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        width: action.width,
        height: action.height
      }
    default:
      return state
  }
}

export default windowReducer
