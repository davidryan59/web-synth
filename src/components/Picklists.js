import React from 'react'

import PicklistC from './PicklistC'

const Picklists = ({ picklists }) => (
  <div>
    {picklists.map(picklist =>
      <PicklistC
        key={picklist.id}
        picklist={picklist}
      />
    )}
  </div>
)

export default Picklists
