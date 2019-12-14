import { numericMap } from '../general/mappings'

export const getSliderByName = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId)
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found.`)
    return null
  }
}

export const getSliderOutputValue = (state, sliderId) => {
  const slider = getSliderByName(state, sliderId)
  return (slider) ? numericMap(slider.value, slider.displayFn) : 0
}

export const getSliderInternalValue = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId).value
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}
