// React and Redux
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// App specifics
import AppC from './components/AppC'
import appReducer from './reducers'

// Event listeners
import windowResizeHandler from './handlers/windowResizeHandler'
import keyDownHandler from './handlers/keyDownHandler'
import keyUpHandler from './handlers/keyUpHandler'
import setupObjectStore from './setup/setupObjectStore'

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

window.addEventListener('resize', evt => windowResizeHandler(evt, objStore, reduxStore))
window.addEventListener('keydown', evt => keyDownHandler(evt, objStore, reduxStore))
window.addEventListener('keyup', evt => keyUpHandler(evt, objStore, reduxStore))
window.addEventListener('load', evt => setupObjectStore(evt, objStore, reduxStore))
// Can only initialise object store once page elements are available
