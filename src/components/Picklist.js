import React from 'react'

const Picklist = ({ picklist, valueChange }) => (
  <span style={{textAlign: 'center', margin: '2px 10px'}}>
    <label>
      {picklist.label}
    </label>
    &nbsp;&nbsp;
    <select
      defaultValue = {picklist.value}
      onChange = {valueChange}
    >
      { picklist.values.map( pv => <option key={`${picklist.id}|${pv}`}>{pv}</option> ) }
    </select>
  </span>
)

export default Picklist
