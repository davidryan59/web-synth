import { connect } from 'react-redux'

import DisplayGraph from './DisplayGraph'
import { windowSizeChangeMinDiff, windowSizeChangeExtraReduction } from '../constants/general'
import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

const mapStateToProps = (state, ownProps) => ({
  width: state.window.width - windowSizeChangeMinDiff - windowSizeChangeExtraReduction,
  height: getSliderDisplayValue(state, ui.getHeightSliderNameFromCanvasId[ownProps.id])
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayGraph)
