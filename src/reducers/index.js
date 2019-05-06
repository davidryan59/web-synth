import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import lastAction from './lastAction'
import windowReducer from './window'

const globalReducer = combineReducers({
  window: windowReducer,
  lastAction
})

const globalUndoableReducer = undoable(globalReducer, {limit: 50})

export default globalUndoableReducer
