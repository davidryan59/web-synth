const getPicklistValueFromState = (state, picklistId) => {
  try {
    return state.picklists.find( picklist => picklist.id === picklistId ).value
  } catch(e) {
    console.log(`Picklist ${picklistId} could not be found. Default value (empty string) returned.`)
    return ''
  }
}

export default getPicklistValueFromState
