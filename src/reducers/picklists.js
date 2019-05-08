import { getInitialPicklistsState } from '../initialise/setupReduxState'
import { SET_PICKLIST } from '../general'

import picklist from './picklist'

const picklists = (state = getInitialPicklistsState(), action) => {  
  switch (action.type) {
    case SET_PICKLIST:
      return state.map( picklistState =>
        (picklistState.id === action.id) ? picklist(picklistState, action) : picklistState
      )
    default:
      return state
  }
}

export default picklists
