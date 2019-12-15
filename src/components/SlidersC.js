import { connect } from 'react-redux'

import Sliders from './Sliders'

const mapStateToProps = (state, ownProps) => ({
  sliders: state.sliders
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sliders)
