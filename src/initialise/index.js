export const getInitialSliderState = () => [
  {
    id: 'noteFreq',
    label: 'Note Frequency',
    min: '25',
    step: '1',
    max: '800',
    value: '255',
    len: 4,
    unit: 'Hz'
  },
  {
    id: 'overallGain',
    label: 'Overall Gain',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-7.1',
    len: 6,
    unit: 'dB'
  }
]


export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})
