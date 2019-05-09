import { connect } from 'react-redux'

import Slider from './Slider'
import { getSynthUpdateThunk } from '../actions'
import { SLIDER_MOVE } from '../constants'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getSynthUpdateThunk(SLIDER_MOVE, {id: ownProps.slider.id, value: parseFloat(e.target.value)}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
 
