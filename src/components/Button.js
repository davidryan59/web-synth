import React from 'react'

const Button = ({ button, valueChange }) => (
  <button
    id={button.id}
    onClick={valueChange}
  >
    {button.isActive ? button.labelActive : button.labelInactive}
  </button>
)

export default Button
