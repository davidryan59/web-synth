import {
  waveShapes,
  PLAY_SOUND, MIXER_GAIN, SYNTH_DISTORTION, SYNTH_WAVE_SHAPE, SYNTH_NOTE_FREQ, MOD_MULT_MAIN,
  POWER2, DELAY_RESONANCE_L, DELAY_RESONANCE_M, DELAY_RESONANCE_R,
  POWER10,
  MOD_MULT_A, MOD_IDX_A, MOD_WAVE_SHAPE_A, MOD2_RATE_A, MOD2_IDX_A, MOD2_WAVE_SHAPE_A,
  MOD_MULT_B, MOD_IDX_B, MOD_WAVE_SHAPE_B, MOD2_RATE_B, MOD2_IDX_B, MOD2_WAVE_SHAPE_B
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
    value: '-8',
    len: 5,
    unit: 'dB'
  },
  {
    id: SYNTH_NOTE_FREQ,
    label: 'Note Frequency',
    min: '1',
    step: '1',
    max: '720',
    value: '239',
    len: 4,
    unit: 'Hz'
  },  
  {
    id: MOD_MULT_MAIN,
    label: 'Frequency multiplier',
    min: '1',
    step: '1',
    max: '32',
    value: '1',
    len: 2,
    unit: 'x'
  },
  {
    id: SYNTH_DISTORTION,
    label: 'Distortion',
    min: '0',
    step: '0.01',
    max: '20',
    value: '1',
    len: 5,
    unit: 'dB'
  },
  
  {
    id: DELAY_RESONANCE_L,
    label: 'Delay Resonance L',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '-0.7',
    len: 6,
    displayMap: POWER2,
    unit: 'Hz'
  },
  
  {
    id: DELAY_RESONANCE_M,
    label: 'Delay Resonance M',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '1.1',
    len: 6,
    displayMap: POWER2,
    unit: 'Hz'
  },
  
  {
    id: DELAY_RESONANCE_R,
    label: 'Delay Resonance R',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '0.6',
    len: 6,
    displayMap: POWER2,
    unit: 'Hz'
  },
  {
    id: MOD_MULT_A,
    label: 'FM Multiplier A',
    min: '1',
    step: '1',
    max: '32',
    value: '2',
    len: 2,
    unit: 'x'
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
    label: 'Mod2 Rate A',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.69897',
    len: 6,
    displayMap: POWER10,
    unit: 'Hz'
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
    id: MOD_MULT_B,
    label: 'FM Multiplier B',
    min: '1',
    step: '1',
    max: '32',
    value: '3',
    len: 2,
    unit: 'x'
  },
  {
    id: MOD_IDX_B,
    label: 'Modulating Index B',
    min: '0',
    step: '1',
    max: '2000',
    value: '160',
    len: 4,
    unit: 'Hz'
  },
  {
    id: MOD2_RATE_B,
    label: 'Mod2 Rate B',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.845098',
    len: 6,
    displayMap: POWER10,
    unit: 'Hz'
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
