const synthStop = (objStore, reduxStore) => {
  objStore.synth.sourceList.forEach( node => node.stop(0) )
  Object.values(objStore.synth.nodes).forEach( node => node.disconnect() )
  objStore.synth.nodes = null
}

export default synthStop
