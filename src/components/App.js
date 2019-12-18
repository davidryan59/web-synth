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
    <StateViewerC />
  </div>
)

export default App
