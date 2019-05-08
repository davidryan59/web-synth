const audioStop = (objStore, reduxStore) => {
  // console.log('Stopping audio')
  objStore.audioNode.tempSynth.nodesToStartAndStop.forEach( osc => osc.stop(0) )
  // console.log('Removing all references to transient nodes')
  objStore.audioNode.tempSynth = null
}

export default audioStop
