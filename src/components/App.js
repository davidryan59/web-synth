import React from 'react'

import DisplayGraphC from './DisplayGraphC'
import PanelC from './PanelC'
import StateViewerC from './StateViewerC'

import * as ui from '../constants/uiNames'

const App = () => (
  <div className='appDiv'>
    <div className='appTopLine'>
      <b>Web Synth</b> -
      View a waveform created using Tone.JS and Web Audio API, in both time and frequency domains
      - <i>by David Ryan, 2020</i>
    </div>
    <PanelC id={ui.PANEL_GRAPHS} />
    <PanelC id={ui.PANEL_WAVEFORM} />
    <DisplayGraphC id='waveform' />
    <PanelC id={ui.PANEL_SPECTRUM} />
    <DisplayGraphC id='spectrum' />
    <PanelC id={ui.PANEL_MAIN} />
    <PanelC id={ui.PANEL_DISTORT} />
    <PanelC id={ui.PANEL_DELAY} />
    <PanelC id={ui.PANEL_MOD_A} />
    <PanelC id={ui.PANEL_MOD_B} />
    <StateViewerC />
  </div>
)

export default App
