import { synthUpdate } from '../synth/synthUpdates'

let nextActionId = 0
export const getActionObject = (type, data) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const getSynthUpdateThunk = (type, data) => (dispatch, getState, objStore) => {
  dispatch(getActionObject(type, data))
  synthUpdate(data, getState, objStore)
}
