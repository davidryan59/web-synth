import React from 'react'

const Picklist = ({ picklist, selectFromPicklist }) => (
  <span style={{textAlign: 'center'}}>
    <label>
      {picklist.label}
    </label>
    &nbsp;&nbsp;
    <select
      defaultValue = {picklist.value}
      onChange = {selectFromPicklist}
    >
      { picklist.values.map( pv => <option key={`${picklist.id}|${pv}`}>{pv}</option> ) }
    </select>
  </span>
)

export default Picklist
