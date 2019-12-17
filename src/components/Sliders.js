import React from 'react'

import SliderC from './SliderC'

const Sliders = ({ sliders }) => (
  <div className='inputPanelContainer'>
    {sliders.map(slider =>
      <SliderC
        key={slider.id}
        slider={slider}
      />
    )}
  </div>
)

export default Sliders
