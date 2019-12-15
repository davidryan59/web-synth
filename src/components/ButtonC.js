import { connect } from 'react-redux'

import Button from './Button'
import { getSynthUpdateThunk } from '../actions'
import { BUTTON_PRESS } from '../constants/actionTypes'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getSynthUpdateThunk(BUTTON_PRESS, { id: ownProps.button.id, isActive: ownProps.button.isActive }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
