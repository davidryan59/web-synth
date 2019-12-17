import React from 'react'

import DisplayGraphC from './DisplayGraphC'
import ButtonsC from './ButtonsC'
import PicklistsC from './PicklistsC'
import SlidersC from './SlidersC'
import StateViewerC from './StateViewerC'

const App = () => (
  <div className='appDiv'>
    <div className='appTopLine'>
      <b>Web Synth</b> -
      View a waveform created using Tone.JS and Web Audio API, in both time and frequency domains
      - <i>by David Ryan, 2020</i>
    </div>
    <DisplayGraphC id='waveform' />
    <DisplayGraphC id='spectrum' />
    <ButtonsC />
    <PicklistsC />
    <SlidersC />
    <StateViewerC />
  </div>
)

export default App
