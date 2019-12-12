const getButtonFromState = (state, buttonId) => {
  try {
    return state.buttons.find(button => button.id === buttonId)
  } catch(e) {
    console.log(`Button ${buttonId} could not be found. Default value null returned.`)
    return null
  }
}

export default getButtonFromState
