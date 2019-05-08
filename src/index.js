import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AppC from './components/AppC'
import appReducer from './reducers'

import setupObjectStore from './initialise/setupObjectStore'
import windowResizeHandler from './handlers/windowResizeHandler'

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
