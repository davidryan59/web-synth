import React from 'react'

import makeNChars from '../general/makeNChars'

const Slider = ({ slider, valueChange }) => (
  <div>
    <label
      id={`label-${slider.id}`}
      htmlFor={`slider-${slider.id}`}
    >
      {slider.label}
    </label>
    &nbsp;
    <input
      id={`slider-${slider.id}`}
      type='range'
      min={slider.min}
      step={slider.step}
      max={slider.max}
      value={slider.value}
      onChange={valueChange}
      style={{width:'400px'}}
    />
    &nbsp;
    <span
      id={`display-${slider.id}`}
    >
      {makeNChars(slider.value, slider.len)}
    </span>
    &nbsp;
    <span>{slider.unit}</span>
  </div>
)

export default Slider
