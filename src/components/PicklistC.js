import { connect } from 'react-redux'

import Picklist from '../components/Picklist'
import { selectFromPicklistThunk } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectFromPicklist: e => dispatch( selectFromPicklistThunk( {id: ownProps.picklist.id, value: e.target.value} ) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklist)
