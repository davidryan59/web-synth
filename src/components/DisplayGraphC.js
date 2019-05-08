import { connect } from 'react-redux'

import DisplayGraph from './DisplayGraph'
import { windowSizeChangeMinDiff, windowSizeChangeExtraReduction } from '../general'

const mapStateToProps = (state, ownProps) => ({
  width: state.window.width - windowSizeChangeMinDiff - windowSizeChangeExtraReduction,
  height: 0.35 * state.window.height
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayGraph)
 
