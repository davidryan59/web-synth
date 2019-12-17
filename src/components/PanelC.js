import { connect } from 'react-redux'

import Panel from './Panel'

import * as ui from '../constants/uiNames'

const extractUIItems = (state, panelId) => {
  const innerItemIdArray = ui.panelSetup[panelId]
  if (!innerItemIdArray) return []
  const currentItemState = [...state.buttons, ...state.picklists, ...state.sliders]
  return innerItemIdArray.map( itemId =>
    currentItemState.find( item =>
      item.id === itemId
    )
  )
}

const mapStateToProps = (state, ownProps) => ({
  items: extractUIItems(state, ownProps.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel)
