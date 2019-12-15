import { connect } from 'react-redux'

import DisplayGraph from './DisplayGraph'
import { windowSizeChangeMinDiff, windowSizeChangeExtraReduction, canvasHeight } from '../constants/general'

const mapStateToProps = (state, ownProps) => ({
  width: state.window.width - windowSizeChangeMinDiff - windowSizeChangeExtraReduction,
  height: canvasHeight
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayGraph)
