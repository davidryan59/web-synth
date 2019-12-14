import * as fn from '../functions'
import * as ui from '../constants/uiNames'
import { scaleLabels } from '../constants/scales'
import { waveShapes } from '../constants/general'


export const getInitialButtonsState = () => ([
  {
    id: ui.TOGGLE_ANIMATION,
    labelInactive: 'Animation OFF (A)',
    labelActive: 'Animation ON (A)',
    padSpaces: 2,
    isActive: false
  },
  {
    id: ui.TOGGLE_AUDIO,
    labelInactive: 'Play sound (S)',
    labelActive: 'Stop sound (S)',
    padSpaces: 6,
    isActive: false
  },
  {
    id: ui.TOGGLE_DISTORT_MODE,
    labelInactive: 'Distortion CLIP (D)',
    labelActive: 'Distortion AMPLIFY (D)',
    isActive: false
  }
])

export const getInitialPicklistsState = () => [
  {
    id: ui.MAIN_SCALE,
    label: 'Scale',
    values: [...scaleLabels],
    value: scaleLabels[0]
  },
  {
    id: ui.MAIN_SHAPE,
    label: 'Main wave shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.MOD_SHAPE_A,
    label: 'Modulating wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.MOD2_SHAPE_A,
    label: 'Mod2 wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.MOD_SHAPE_B,
    label: 'Modulating wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.MOD2_SHAPE_B,
    label: 'Mod2 wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  }
]

export const getInitialSlidersState = () => [
  {
    id: ui.MIXER_GAIN,
    label: 'Overall Gain',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-8',
    len: 5,
    unit: 'dB'
  },
  {
    id: ui.ANALYSER_MAX_FREQ,
    label: 'Max Frequency for Analyser',
    min: '8',
    step: '0.02',
    max: '14.5',
    value: '12',
    len: 5,
    displayFn: fn.POWER2ROUND,
    unit: 'Hz'
  },
  {
    id: ui.MAIN_FREQ,
    label: 'Note Frequency',
    min: '1',
    step: '1',
    max: '720',
    value: '256',
    len: 3,
    unit: 'Hz'
  },
  {
    id: ui.BASE_FREQ,
    label: 'Start of scale',
    min: '200',
    step: '1',
    max: '600',
    value: '256',
    len: 3,
    unit: 'Hz'
  },
  {
    id: ui.MAIN_MULT,
    label: 'Frequency multiplier',
    min: '0',
    step: '1',
    max: '32',
    value: '1',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.MAIN_DISTORT,
    label: 'Distortion',
    min: '0',
    step: '0.01',
    max: '20',
    value: '1',
    len: 5,
    unit: 'dB'
  },

  {
    id: ui.DELAY_VOLUME_PERCENT,
    label: 'Delay Volume',
    min: '0',
    step: '1',
    max: '100',
    value: '100',
    len: 3,
    unit: '%'
  },
  {
    id: ui.DELAY_RESONANCE_L,
    label: 'Delay Resonance L',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '-0.7',
    len: 6,
    displayFn: fn.POWER2,
    unit: 'Hz'
  },
  {
    id: ui.DELAY_RESONANCE_C,
    label: 'Delay Resonance M',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '1.1',
    len: 6,
    displayFn: fn.POWER2,
    unit: 'Hz'
  },
  {
    id: ui.DELAY_RESONANCE_R,
    label: 'Delay Resonance R',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '0.6',
    len: 6,
    displayFn: fn.POWER2,
    unit: 'Hz'
  },
  {
    id: ui.MOD_MULT_A,
    label: 'FM Multiplier A',
    min: '1',
    step: '1',
    max: '32',
    value: '2',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.MOD_IDX_A,
    label: 'Modulating Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '200',
    len: 4,
    unit: 'Hz'
  },
  {
    id: ui.MOD2_RATE_A,
    label: 'Mod2 Rate A',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.69897',
    len: 6,
    displayFn: fn.POWER10,
    unit: 'Hz'
  },
  {
    id: ui.MOD2_IDX_A,
    label: 'Mod2 Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  },

  {
    id: ui.MOD_MULT_B,
    label: 'FM Multiplier B',
    min: '1',
    step: '1',
    max: '32',
    value: '3',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.MOD_IDX_B,
    label: 'Modulating Index B',
    min: '0',
    step: '1',
    max: '2000',
    value: '160',
    len: 4,
    unit: 'Hz'
  },
  {
    id: ui.MOD2_RATE_B,
    label: 'Mod2 Rate B',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.845098',
    len: 6,
    displayFn: fn.POWER10,
    unit: 'Hz'
  },
  {
    id: ui.MOD2_IDX_B,
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
