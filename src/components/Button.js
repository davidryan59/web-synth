import React from 'react'

const Button = ({ button, click }) => (
  <button
    id={button.id}
    onClick={click}
  >
    {button.isActive ? button.labelActive : button.labelInactive}
  </button>
)

export default Button
