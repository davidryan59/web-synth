import { windowResizeAction } from '../actions'
import { windowSizeChangeDiff } from '../general'

const windowResizeHandler = (event, store) => {
  const windowState = store.getState().window
  const dispatch = store.dispatch
  
  const newX = event.target.innerWidth
  const newY = event.target.innerHeight
  const oldX = windowState.width
  const oldY = windowState.height
  
  const diffX = Math.abs(newX - oldX)
  const diffY = Math.abs(newY - oldY)
  const diff = Math.max(diffX, diffY)
  
  // Only dispatch action if change is more than a specific amount,
  // to avoid too many window resize actions
  if (windowSizeChangeDiff <= diff) dispatch(windowResizeAction({width:newX, height:newY}))
}

export default windowResizeHandler
