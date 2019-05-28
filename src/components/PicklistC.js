import { connect } from 'react-redux'

import Picklist from '../components/Picklist'
import { getSynthUpdateThunk } from '../actions'
import { SET_PICKLIST } from '../constants/actionTypes'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getSynthUpdateThunk(SET_PICKLIST, {id: ownProps.picklist.id, value: e.target.value}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklist)
