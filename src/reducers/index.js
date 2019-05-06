import { combineReducers } from 'redux'

import windowReducer from './window'
import sliders from './sliders'
import lastAction from './lastAction'

const rootReducer = combineReducers({
  window: windowReducer,
  sliders,
  lastAction
})

export default rootReducer
