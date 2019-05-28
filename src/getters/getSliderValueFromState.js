const getSliderValueFromState = (state, sliderId) => {
  try {
    const slider = state.sliders.find(slider => slider.id === sliderId)
    return slider.value
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value 0 returned.`)
    return 0
  }
}

export default getSliderValueFromState
