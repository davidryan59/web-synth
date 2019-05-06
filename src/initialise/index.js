export const getInitialSliderState = () => [
  {
    id: 'noteFreq',
    label: 'Note Frequency',
    min: '20',
    step: '2',
    max: '800',
    value: '320',
    len: 4,
    unit: 'Hz'
  },
  {
    id: 'overallGain',
    label: 'Overall Gain',
    min: '-30',
    step: '0.2',
    max: '0',
    value: '-6',
    len: 6,
    unit: 'dB'
  }
]

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})
