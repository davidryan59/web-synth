import { PLAY_SOUND, NOTE_FREQ, OVERALL_GAIN } from '../general'

export const getInitialPlayButtonState = () => ({
  id: PLAY_SOUND,
  labelInactive: 'Play sound',
  labelActive: 'Stop sound',
  isActive: false
})

export const getInitialSlidersState = () => [
  {
    id: NOTE_FREQ,
    label: 'Note Frequency',
    min: '30',
    step: '2',
    max: '200',
    value: '150',
    len: 4,
    unit: 'Hz'
  },
  {
    id: OVERALL_GAIN,
    label: 'Overall Gain',
    min: '-30',
    step: '0.5',
    max: '0',
    value: '-20',
    len: 6,
    unit: 'dB'
  }
]

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})
