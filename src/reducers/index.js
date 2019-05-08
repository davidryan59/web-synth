import { combineReducers } from 'redux'

import windowReducer from './window'
import playButton from './playButton'
import picklists from './picklists'
import sliders from './sliders'
import lastAction from './lastAction'

const appReducer = combineReducers({
  window: windowReducer,
  playButton,
  picklists,
  sliders,
  lastAction
})

export default appReducer
