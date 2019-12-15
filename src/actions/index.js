import { synthUpdate } from '../synth/synthUpdates'

let nextActionId = 0
export const getActionObject = (type, data) => ({
  type,
  actionId: nextActionId++,
  ...data
})

let nextThunkId = 0
export const getSynthUpdateThunk = (type, data) => (dispatch, getState, objStore) => {
  const theData = { thunkId: nextThunkId++, ...data }
  console.log(theData)
  dispatch(getActionObject(type, theData))
  synthUpdate(data, getState, objStore)
}
