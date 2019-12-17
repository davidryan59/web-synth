import React from 'react'

import ButtonC from './ButtonC'
import PicklistC from './PicklistC'
import SliderC from './SliderC'
import TextC from './TextC'

import * as ui from '../constants/uiNames'

const Panel = ({ items }) => (
  <div className='inputPanelContainer'>
    {items.map(item =>
      (item.type === ui.TYPE_TOGGLE)
      ?
      <ButtonC
        key={item.id}
        button={item}
      />
      :
      (item.type === ui.TYPE_PICKLIST)
      ?
      <PicklistC
        key={item.id}
        picklist={item}
      />
      :
      (item.type === ui.TYPE_SLIDER)
      ?
      <SliderC
        key={item.id}
        slider={item}
      />
      :
      <TextC
        key={item.id}
        text='Error: panel item not recognised'
      />
    )}
  </div>
)

export default Panel
