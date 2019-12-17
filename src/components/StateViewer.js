import React from 'react'

const StateViewer = ({ actionJSON, stateJSON }) => (
  <div className='stateViewerDiv'>
    <p>
      <b>state.lastAction</b>:&nbsp;&nbsp;{actionJSON}
    </p>
    <p>
      <b>state</b>:&nbsp;&nbsp;{stateJSON}
    </p>
  </div>
)

export default StateViewer
