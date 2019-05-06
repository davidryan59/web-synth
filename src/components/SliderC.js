import { connect } from 'react-redux'

import Slider from './Slider'
import { moveSliderAction } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  moveSlider: e => dispatch( moveSliderAction( {id: ownProps.slider.id, newVal: e.target.value} ) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
 
