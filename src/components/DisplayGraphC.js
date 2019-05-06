import { connect } from 'react-redux'

import DisplayGraph from './DisplayGraph'

const mapStateToProps = (state, ownProps) => ({
  width: 0.95 * state.window.width,
  height: 0.35 * state.window.height
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayGraph)
 
