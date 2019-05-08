import { connect } from 'react-redux'

import Button from './Button'
import { buttonPressThunk } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  click: e => dispatch( buttonPressThunk({id: ownProps.button.id, isActive: ownProps.button.isActive}) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
 
