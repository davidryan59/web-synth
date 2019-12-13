import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import AppC from './components/AppC'
import appReducer from './reducers'
import setupObjectStore from './setup/setupObjectStore'
import windowResizeHandler from './handlers/windowResizeHandler'
import { getSynthUpdateThunk } from './actions'
import getButtonFromState from './getters/getButtonFromState'
import { BUTTON_PRESS } from './constants/actionTypes'
import * as ui from './constants/uiNames'

// Object store contains general things like audio contexts, page elements, e.g. non-pure objects
// Redux store is standard Redux state management with state and actions as pure objects
// Use thunk middleware to allow thunk actions which update the object store
// in addition to dispatching to the redux store
const objStore = {}
const reduxStore = createStore(appReducer, applyMiddleware(thunk.withExtraArgument(objStore)))

render(
  <Provider store={reduxStore}>
    <AppC />
  </Provider>,
  document.getElementById('root')
)

// Can only initialise object store once page elements are available
window.addEventListener('load', () => {
  setupObjectStore(objStore, reduxStore)
})

// If window resizes, that has an additional action
window.addEventListener('resize', e => windowResizeHandler(e, reduxStore))

// Keyboard
window.addEventListener('keydown', e => console.log(`Key down ${e.code}`))
window.addEventListener('keyup', e => {
  console.log(`Key up ${e.code}`)
  if (e.code === 'KeyS') {
    console.log('Toggling sound (play button) via S key')
    reduxStore.dispatch(
      getSynthUpdateThunk(BUTTON_PRESS, {
        id: ui.TOGGLE_AUDIO,
        isActive: getButtonFromState(reduxStore.getState(), ui.TOGGLE_AUDIO).isActive
      })
    )
  }
  if (e.code === 'KeyA') {
    console.log('Toggling animation via A key')
    reduxStore.dispatch(
      getSynthUpdateThunk(BUTTON_PRESS, {
        id: ui.TOGGLE_ANIMATION,
        isActive: getButtonFromState(reduxStore.getState(), ui.TOGGLE_ANIMATION).isActive
      })
    )
  }
  if (e.code === 'KeyD') {
    console.log('Toggling distortion via D key')
    reduxStore.dispatch(
      getSynthUpdateThunk(BUTTON_PRESS, {
        id: ui.TOGGLE_DISTORT_MODE,
        isActive: getButtonFromState(reduxStore.getState(), ui.TOGGLE_DISTORT_MODE).isActive
      })
    )
  }
})
