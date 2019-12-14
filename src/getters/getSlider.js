import { numericMap } from '../general/mappings'

export const getSliderFromState = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId)
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value null returned.`)
    return null
  }
}

export const getSliderOutputValueFromState = (state, sliderId) => {
  try {
    const slider = state.sliders.find(slider => slider.id === sliderId)
    const outputValue = numericMap(slider.value, slider.displayFn)
    return outputValue
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}

export const getSliderInternalValueFromState = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId).value
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}
