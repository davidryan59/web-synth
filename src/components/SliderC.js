import { connect } from 'react-redux'

import Slider from './Slider'
import { getSynthUpdateThunk } from '../actions'
import makeNChars from '../general/makeNChars'
import { SLIDER_MOVE, POWER2, POWER10 } from '../constants'

const getDisplayVal = (sliderVal, displayMap) => {
  switch (displayMap) {
    case POWER2:
      return 2 ** sliderVal
    case POWER10:
      return 10 ** sliderVal
    default:
      return sliderVal
  }
}

const mapStateToProps = (state, ownProps) => ({
  displayVal: makeNChars(getDisplayVal(ownProps.slider.value, ownProps.slider.displayMap), ownProps.slider.len)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getSynthUpdateThunk(SLIDER_MOVE, {id: ownProps.slider.id, value: parseFloat(e.target.value)}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
 
