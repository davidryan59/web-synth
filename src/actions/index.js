import { startingIdValue } from '../constants'

let nextActionId = startingIdValue

export const actionDoNothing = () => ({
  type: 'DO_NOTHING',
  actionId: nextActionId++
})


export const windowResizeAction = ({newX, newY}) => ({
  type: 'WINDOW_RESIZE',
  actionId: nextActionId++,
  width: newX,
  height: newY
})
