const slider = (state = {}, action) => {  
  switch (action.type) {
    case 'SLIDER_MOVE':
      return {
        ...state,
        value: action.newVal
      }
    default:
      return state
  }
}

export default slider
