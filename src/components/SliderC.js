import { connect } from 'react-redux'

import Slider from './Slider'
import { moveSliderThunk } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  moveSlider: e => dispatch( moveSliderThunk( {id: ownProps.slider.id, value: parseFloat(e.target.value)} ) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
 
