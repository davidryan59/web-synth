import { connect } from 'react-redux'

import DisplayGraph from './DisplayGraph'
import { windowSizeChangeMinDiff, windowSizeChangeExtraReduction, windowVerticalMult } from '../general'

const mapStateToProps = (state, ownProps) => ({
  width: state.window.width - windowSizeChangeMinDiff - windowSizeChangeExtraReduction,
  height: windowVerticalMult * state.window.height
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayGraph)
 
