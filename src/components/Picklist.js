import React from 'react'

const Picklist = ({ picklist, valueChange }) => (
  <div className='inputPanel'>
    <label
      className='inputLabel'
      style={{ width: '95px' }}
    >
      {picklist.label}
    </label>
    &nbsp;
    <select
      value={picklist.value}
      onChange={valueChange}
      style={{ width: '145px', background: '#D4CCD9' }}
    >
      {picklist.values.map(pv => <option key={pv}>{pv}</option>)}
    </select>
  </div>
)

export default Picklist
