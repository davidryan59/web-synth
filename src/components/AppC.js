import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = (state, ownProps) => ({
  playButton: state.playButton
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
 
