const synthStop = (objStore, reduxStore) => {
  objStore.synth.sourceList.forEach( node => node.stop(0) )
  const nodeArray = Object.values(objStore.synth.nodes)
  nodeArray.forEach( node => node.disconnect() )
  objStore.synth.nodes = null
}

export default synthStop
