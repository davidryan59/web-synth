import React from 'react'

import ButtonC from './ButtonC'

const Buttons = ({ buttons }) => (
  <div>
    {buttons.map(button =>
      <ButtonC
        key={button.id}
        button={button}
      />
    )}
  </div>
)

export default Buttons
