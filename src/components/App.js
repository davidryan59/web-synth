import React from 'react'

import DisplayGraphC from './DisplayGraphC'
import PanelC from './PanelC'
import StateViewerC from './StateViewerC'

import * as ui from '../constants/uiNames'

const App = () => (
  <div className='appDiv'>
    <div className='appTopLine'>
      <b style={{ fontSize: '120%' }}>Web Synth</b> -
      See, hear and control a synth waveform
      - Press A, S to turn on animation and sound
      - Use the MAIN FREQUENCY slider to play different notes
      - Zoom browser out to see more controls
      - Have fun!
      - <i>by David Ryan, 2020</i>
    </div>
    <PanelC id={ui.PANEL_GRAPHS} innerClassNames='flex greyBack justifyStart' />
    <PanelC id={ui.PANEL_WAVEFORM} innerClassNames='flex greyBack justifyStart' />
    <DisplayGraphC id='waveform' />
    <PanelC id={ui.PANEL_SPECTRUM} innerClassNames='flex greyBack justifyStart' />
    <DisplayGraphC id='spectrum' />
    <div className='flex justifyStart'>
      <PanelC id={ui.PANEL_MAIN} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_DELAY} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_DISTORT} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_SCALE} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_MOD_A} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_MOD_B} innerClassNames='greyBack' />
    </div>
    <div><p>Technologies used: HTML, CSS, JavaScript, Jest, Flexbox, React, Redux, Web Audio API, Tone.js, Web Canvas API, Firebase hosting. <a href='https://github.com/davidryan59/web-synth'>GitHub repo here</a>.</p></div>
    <StateViewerC />
  </div>
)

export default App
