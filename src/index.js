import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppC from './components/AppC'
import rootReducer from './reducers'

import windowResizeHandler from './handlers/windowResizeHandler'

const store = createStore(rootReducer)

window.addEventListener('resize', e => windowResizeHandler(e, store))

render(
  <Provider store={store}>
    <AppC />
  </Provider>,
  document.getElementById('root')
)
