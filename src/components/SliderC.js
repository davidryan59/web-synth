import { connect } from 'react-redux'

import Slider from './Slider'
import { getSynthUpdateThunk } from '../actions'
import makeNChars from '../general/makeNChars'
import { SLIDER_MOVE } from '../constants/actionTypes'
import { callFunction } from '../functions'

const mapStateToProps = (state, ownProps) => {
  const slider = ownProps.slider
  return {
    displayVal: makeNChars(callFunction(slider.value, slider.displayFn), slider.len)
  }  
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getSynthUpdateThunk(SLIDER_MOVE, {id: ownProps.slider.id, value: parseFloat(e.target.value)}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
 
