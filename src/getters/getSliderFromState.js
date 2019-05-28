const getSliderFromState = (state, sliderId) => {
  try {
    const slider = state.sliders.find(slider => slider.id === sliderId)
    return slider
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value null returned.`)
    return null
  }
}

export default getSliderFromState
