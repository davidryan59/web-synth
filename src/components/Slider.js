import React from 'react'

const Slider = ({ slider, displayVal, valueChange }) => (
  <div className='inputPanel'>
    <div className='inputPanelElt'>
      <label
        id={`label-${slider.id}`}
        htmlFor={`slider-${slider.id}`}
        className='inputLabel'
      >
        {slider.label}
      </label>
      &nbsp;&nbsp;
      <span
        id={`display-${slider.id}`}
        className='inputValue'
      >
        {displayVal}
      </span>
      &nbsp;
      <span
        className='inputLabel'
      >
        {slider.unit}
      </span>
    </div>
    <div className='inputPanelElt'>
      <input
        id={`slider-${slider.id}`}
        type='range'
        min={slider.min}
        step={slider.step}
        max={slider.max}
        value={slider.value}
        onChange={valueChange}
        style={{ width: '200px' }}
      />
    </div>
  </div>
)

export default Slider
