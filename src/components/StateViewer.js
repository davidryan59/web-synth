import React from 'react'
import { Column, Row } from 'simple-flexbox'

const StateViewer = ({actionJSON, stateJSON}) => (
  <Column
    horizontal = 'center'
    vertical = 'center'
    className = 'StateViewer'
  >
    <Row>
      &nbsp;
    </Row>
    <Row>
      <b>state.lastAction</b>:&nbsp;&nbsp;{actionJSON}
    </Row>
    <Row>
      &nbsp;
    </Row>
    <Row>
      <b>state</b>:&nbsp;&nbsp;{stateJSON}
    </Row>
    <Row>
      &nbsp;
    </Row>
  </Column>
)

export default StateViewer
