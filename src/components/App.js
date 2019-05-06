import React from 'react'

import StateViewerC from './StateViewerC'
import UndoRedoC from './UndoRedoC'

const App = () => (
  <div className='app'>
    <div className='title'>Web Synth</div>
    <div className='subtitle'>Create and visually inspect lovely synth sounds in a web browser</div>
    <div>&nbsp;</div>
    <UndoRedoC />
    <StateViewerC />
  </div>
)

export default App
