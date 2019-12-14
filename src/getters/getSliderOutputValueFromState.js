import { callFunction } from '../functions'

const getSliderOutputValueFromState = (state, sliderId) => {
  try {
    const slider = state.sliders.find(slider => slider.id === sliderId)
    const outputValue = callFunction(slider.value, slider.displayFn)
    return outputValue
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}

export default getSliderOutputValueFromState
