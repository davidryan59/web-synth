import { getInitialWindowState } from '../initialise'

const windowReducer = (state = getInitialWindowState(), action) => {
  if (action.type === 'WINDOW_RESIZE') return {
    width: action.width,
    height: action.height
  }
  return state
}

export default windowReducer
