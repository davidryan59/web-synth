const setupNodesMixerGraph = (objStore, reduxStore) => {
  objStore.audioNode = {}
  const audNode = objStore.audioNode
  const audioCtx = objStore.ctx.audio
  audNode.mainGain = audioCtx.createGain();
  audNode.analyser = audioCtx.createAnalyser()
  audNode.mainGain.connect(audioCtx.destination);
  audNode.mainGain.connect(audNode.analyser);
  audNode.mixerInput = audNode.mainGain
}

export default setupNodesMixerGraph
