import {
  waveShapes,
  PLAY_SOUND, MIXER_GAIN, SYNTH_DISTORTION, SYNTH_WAVE_SHAPE, SYNTH_NOTE_FREQ, DELAY_RESONANCE, MOD_FREQ_DENOM,
  MOD_FREQ_NUM_A, MOD_IDX_A, MOD_WAVE_SHAPE_A, MOD2_RATE_A, MOD2_IDX_A, MOD2_WAVE_SHAPE_A,
  MOD_FREQ_NUM_B, MOD_IDX_B, MOD_WAVE_SHAPE_B, MOD2_RATE_B, MOD2_IDX_B, MOD2_WAVE_SHAPE_B
} from '../constants'


export const getInitialPlayButtonState = () => ({
  id: PLAY_SOUND,
  labelInactive: 'Play sound',
  labelActive: 'Stop sound',
  isActive: false
})

export const getInitialPicklistsState = () => [
  {
    id: SYNTH_WAVE_SHAPE,
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
  },
  
  {
    id: MOD_WAVE_SHAPE_B,
    label: 'Modulating wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: MOD2_WAVE_SHAPE_B,
    label: 'Mod2 wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  }
]

export const getInitialSlidersState = () => [
  {
    id: MIXER_GAIN,
    label: 'Overall Gain',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-6',
    len: 5,
    unit: 'dB'
  },
  {
    id: SYNTH_NOTE_FREQ,
    label: 'Note Frequency',
    min: '1',
    step: '1',
    max: '720',
    value: '155',
    len: 4,
    unit: 'Hz'
  },
  {
    id: SYNTH_DISTORTION,
    label: 'Distortion',
    min: '0',
    step: '0.01',
    max: '20',
    value: '3',
    len: 5,
    unit: 'dB'
  },
  
  {
    id: DELAY_RESONANCE,
    label: 'Delay Resonance',
    min: '0',
    step: '0.01',
    max: '16',
    value: '8',
    len: 5,
    unit: ''
  },
  
  {
    id: MOD_FREQ_DENOM,
    label: 'FM Denominator',
    min: '1',
    step: '1',
    max: '16',
    value: '1',
    len: 2,
    unit: ''
  },
  {
    id: MOD_FREQ_NUM_A,
    label: 'FM Multiplier A',
    min: '1',
    step: '1',
    max: '64',
    value: '2',
    len: 2,
    unit: ''
  },
  {
    id: MOD_IDX_A,
    label: 'Modulating Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  },
  {
    id: MOD2_RATE_A,
    label: 'Mod2 Rate (Log10 Hz) A',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.69897',
    len: 5,
    unit: ''
  },
  {
    id: MOD2_IDX_A,
    label: 'Mod2 Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  },
  
  {
    id: MOD_FREQ_NUM_B,
    label: 'FM Multiplier B',
    min: '1',
    step: '1',
    max: '64',
    value: '3',
    len: 2,
    unit: ''
  },
  {
    id: MOD_IDX_B,
    label: 'Modulating Index B',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  },
  {
    id: MOD2_RATE_B,
    label: 'Mod2 Rate (Log10 Hz) B',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.845098',
    len: 5,
    unit: ''
  },
  {
    id: MOD2_IDX_B,
    label: 'Mod2 Index B',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  }
]

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})
