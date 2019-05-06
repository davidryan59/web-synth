import { getInitialSliderState } from '../initialise'

import slider from './slider'

const sliders = (state = getInitialSliderState(), action) => {  
  switch (action.type) {
    case 'SLIDER_MOVE':
      return state.map( sliderState => (sliderState.id === action.id) ? slider(sliderState, action) : sliderState )
    default:
      return state
  }
}

export default sliders
