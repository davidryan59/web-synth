import { connect } from 'react-redux'

import Buttons from './Buttons'

const mapStateToProps = (state, ownProps) => ({
  buttons: state.buttons
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)
 
