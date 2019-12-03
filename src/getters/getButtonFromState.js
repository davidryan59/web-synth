const getButtonFromState = (state, buttonId) => {
  try {
    const button = state.buttons.find(button => button.id === buttonId)
    return button
  } catch(e) {
    console.log(`Button ${buttonId} could not be found. Default value null returned.`)
    return null
  }
}

export default getButtonFromState
