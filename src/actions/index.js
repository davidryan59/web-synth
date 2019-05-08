import { WINDOW_RESIZE, SLIDER_MOVE } from './types'

let nextActionId = 0
const actionCreator = ({type, data}) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const windowResizeAction = data => actionCreator({type: WINDOW_RESIZE, data})
export const moveSliderAction = data => actionCreator({type: SLIDER_MOVE, data})
