import {
  waveShapes,
  PLAY_SOUND, 
  OVERALL_GAIN, NOTE_FREQ, DISTORTION_DB,
  MOD_FREQMULT_A, MOD_IDX_A, MOD2_RATE_A, MOD2_IDX_A,
  MAIN_WAVE_SHAPE, MOD_WAVE_SHAPE_A, MOD2_WAVE_SHAPE_A
} from '../general'


export const getInitialPlayButtonState = () => ({
  id: PLAY_SOUND,
  labelInactive: 'Play sound',
  labelActive: 'Stop sound',
  isActive: false
})

export const getInitialPicklistsState = () => [
  {
    id: MAIN_WAVE_SHAPE,
    label: 'Main wave shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: MOD_WAVE_SHAPE_A,
    label: 'Modulating wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: MOD2_WAVE_SHAPE_A,
    label: 'Mod2 wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  }
]

export const getInitialSlidersState = () => [
  {
    id: OVERALL_GAIN,
    label: 'Overall Gain',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-8',
    len: 5,
    unit: 'dB'
  },
  {
    id: NOTE_FREQ,
    label: 'Note Frequency',
    min: '1',
    step: '1',
    max: '720',
    value: '432',
    len: 4,
    unit: 'Hz'
  },
  {
    id: DISTORTION_DB,
    label: 'Distortion',
    min: '0',
    step: '0.01',
    max: '20',
    value: '0',
    len: 5,
    unit: 'dB'
  },
  {
    id: MOD_FREQMULT_A,
    label: 'FM Multiplier A',
    min: '1',
    step: '1',
    max: '64',
    value: '3',
    len: 2,
    unit: ''
  },
  {
    id: MOD_IDX_A,
    label: 'Modulating Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '200',
    len: 4,
    unit: 'Hz'
  },
  {
    id: MOD2_RATE_A,
    label: 'Mod2 Rate (Log10 Hz) A',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '0.3',
    len: 5,
    unit: ''
  },
  {
    id: MOD2_IDX_A,
    label: 'Mod2 Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '200',
    len: 4,
    unit: 'Hz'
  },
]

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})
