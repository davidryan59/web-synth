import React from 'react'

const Button = ({ id, label }) => (
  <div>
    <button
      id={id}
    >
      {label}
    </button>
  </div>
)

export default Button
