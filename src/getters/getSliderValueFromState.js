const getSliderValueFromState = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId).value
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}

export default getSliderValueFromState
