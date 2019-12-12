const getSliderFromState = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId)
  } catch(e) {
    console.log(`Slider ${sliderId} could not be found. Default value null returned.`)
    return null
  }
}

export default getSliderFromState