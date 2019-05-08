import { combineReducers } from 'redux'

import windowReducer from './window'
import playButton from './playButton'
import sliders from './sliders'
import lastAction from './lastAction'

const appReducer = combineReducers({
  window: windowReducer,
  playButton,
  sliders,
  lastAction
})

export default appReducer
