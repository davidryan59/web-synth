import React from 'react'

const Button = ({ button, valueChange }) => (
  <div className='inputPanel inputPanel-noBackground'>
    <button
      id={button.id}
      onClick={valueChange}
      style={{ fontSize: '12px', width: '160px', background: '#DFDACF'}}
    >
      {button.isActive ? button.labelActive : button.labelInactive}
    </button>
  </div>
)

export default Button
