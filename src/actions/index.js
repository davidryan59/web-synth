import { WINDOW_RESIZE, SLIDER_MOVE } from './types'

let nextActionId = 0

export const windowResizeAction = ({newX, newY}) => ({
  type: WINDOW_RESIZE,
  actionId: nextActionId++,
  width: newX,
  height: newY
})

export const moveSliderAction = ({id, value}) => ({
  type: SLIDER_MOVE,
  actionId: nextActionId++,
  id,
  value
})
