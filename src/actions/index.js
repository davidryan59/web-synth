import { startingIdValue } from '../constants'

let nextActionId = startingIdValue

export const windowResizeAction = ({newX, newY}) => ({
  type: 'WINDOW_RESIZE',
  actionId: nextActionId++,
  width: newX,
  height: newY
})

export const moveSliderAction = ({id, newVal}) => ({
  type: 'SLIDER_MOVE',
  actionId: nextActionId++,
  id,
  newVal
})
