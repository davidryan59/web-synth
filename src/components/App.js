import React from 'react'

import DisplayGraphC from './DisplayGraphC'
import ButtonC from './ButtonC'
import SlidersC from './SlidersC'
import StateViewerC from './StateViewerC'

const App = () => (
  <div className='app'>
    <div className='topline'>
      <b>Web Synth</b> -
      View a waveform created using Web Audio API, in both time and frequency domains
      - <i>by David Ryan, 2019</i>
    </div>
    <DisplayGraphC id='oscilloscope' />
    <DisplayGraphC id='spectrum' />
    <ButtonC
      id='startstop'
      label='Start or stop audio (NOT YET IMPLEMENTED)'
    />
    <SlidersC />
    <StateViewerC />
  </div>
)

export default App
