import React from 'react'

import PicklistC from './PicklistC'

const Picklists = ({ picklists }) => (
  <div className='inputPanelContainer'>
    {picklists.map(picklist =>
      <PicklistC
        key={picklist.id}
        picklist={picklist}
      />
    )}
  </div>
)

export default Picklists
