import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AppC from './components/AppC'
import rootReducer from './reducers'

import windowResizeHandler from './handlers/windowResizeHandler'

const store = createStore(rootReducer, applyMiddleware(thunk))

window.addEventListener('resize', e => windowResizeHandler(e, store))

render(
  <Provider store={store}>
    <AppC />
  </Provider>,
  document.getElementById('root')
)
