const synthStop = (objStore, reduxStore) => {
  objStore.synth.nodes.sourceList.forEach( osc => osc.stop(0) )
  objStore.synth.nodes = null
}

export default synthStop
