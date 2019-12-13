import React from 'react'

const Button = ({ button, valueChange }) => (
  <button
    id={button.id}
    onClick={valueChange}
  >
    {[...(new Array(button.padSpaces || 0))].map( () => "\u00a0")}
    {button.isActive ? button.labelActive : button.labelInactive}
    {[...(new Array(button.padSpaces || 0))].map( () => "\u00a0")}
  </button>
)
// "\u00a0" are non-breaking spaces

export default Button
