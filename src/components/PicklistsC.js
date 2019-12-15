import { connect } from 'react-redux'

import Picklists from './Picklists'

const mapStateToProps = (state, ownProps) => ({
  picklists: state.picklists
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklists)
