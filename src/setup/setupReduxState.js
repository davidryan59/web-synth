import * as map from '../general/mappings'
import * as ui from '../constants/uiNames'
import { scaleLabels } from '../constants/scales'
import { waveShapes } from '../constants/general'

export const getInitialButtonsState = () => ([
  {
    id: ui.TOGGLE_ANIMATION,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'Animation OFF (A)',
    labelActive: 'Animation ON (A)',
    padSpaces: 2,
    isActive: false
  },
  {
    id: ui.TOGGLE_AUDIO,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'Sound OFF (S)',
    labelActive: 'Sound ON (S)',
    padSpaces: 6,
    isActive: false
  },
  {
    id: ui.TOGGLE_DISTORT_MODE,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'Distortion CLIP (D)',
    labelActive: 'Distortion AMPLIFY (D)',
    isActive: false
  },
  {
    id: ui.TOGGLE_SPECTRUM_LOG,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'Analyser LINEAR (L)',
    labelActive: 'Analyser LOG (L)',
    isActive: false
  }
])

export const getInitialPicklistsState = () => [
  {
    id: ui.PICK_SCALE,
    type: ui.TYPE_PICKLIST,
    label: 'Scale',
    values: [...scaleLabels],
    value: scaleLabels[0]
  },
  {
    id: ui.PICK_MAIN_SHAPE,
    type: ui.TYPE_PICKLIST,
    label: 'Main wave shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.PICK_MOD_SHAPE_A,
    type: ui.TYPE_PICKLIST,
    label: 'Modulating wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.PICK_MOD2_SHAPE_A,
    type: ui.TYPE_PICKLIST,
    label: 'Mod2 wave shape A',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.PICK_MOD_SHAPE_B,
    type: ui.TYPE_PICKLIST,
    label: 'Modulating wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.PICK_MOD2_SHAPE_B,
    type: ui.TYPE_PICKLIST,
    label: 'Mod2 wave shape B',
    values: [...waveShapes],
    value: waveShapes[0]
  }
]

export const getInitialSlidersState = () => [
  {
    id: ui.SLIDER_MIXER_GAIN,
    type: ui.TYPE_SLIDER,
    label: 'Overall Gain',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-8',
    len: 5,
    unit: 'dB'
  },
  {
    id: ui.SLIDER_ANIMATION_RATE,
    type: ui.TYPE_SLIDER,
    label: 'Animation Rate',
    min: '1',
    step: '0.01',
    max: '24',
    value: '8',
    len: 5,
    unit: 'frames'
  },
  {
    id: ui.SLIDER_WAVEFORM_ZOOM,
    type: ui.TYPE_SLIDER,
    label: 'Waveform zoom',
    min: '0',
    step: '1',
    max: '100',
    value: '0',
    len: 3,
    unit: '%'
  },
  {
    id: ui.SLIDER_WAVEFORM_HEIGHT,
    type: ui.TYPE_SLIDER,
    label: 'Waveform height',
    min: '5',
    step: '1',
    max: '960',
    value: '140',
    len: 3,
    unit: 'px'
  },
  {
    id: ui.SLIDER_SPECTRUM_HEIGHT,
    type: ui.TYPE_SLIDER,
    label: 'Spectrum height',
    min: '5',
    step: '1',
    max: '960',
    value: '180',
    len: 3,
    unit: 'px'
  },
  {
    id: ui.SLIDER_SPECTRUM_MAX_FREQ,
    type: ui.TYPE_SLIDER,
    label: 'Analyser Max Freq',
    min: '8',
    step: '0.02',
    max: '14.5',
    value: '12',
    len: 5,
    displayFn: map.MAP_EXP2_ROUNDED,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_SPECTRUM_MIN_DB,
    type: ui.TYPE_SLIDER,
    label: 'Min dB for Analyser',
    min: '30',
    step: '1',
    max: '240',
    value: '120',
    len: 4,
    displayFn: map.MAP_NEGATE,
    unit: 'dB'
  },
  {
    id: ui.SLIDER_MAIN_FREQ,
    type: ui.TYPE_SLIDER,
    label: 'Note Frequency',
    min: '1',
    step: '1',
    max: '720',
    value: '256',
    len: 3,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_BASE_FREQ,
    type: ui.TYPE_SLIDER,
    label: 'Start of scale',
    min: '200',
    step: '1',
    max: '600',
    value: '256',
    len: 3,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MAIN_MULT,
    type: ui.TYPE_SLIDER,
    label: 'Frequency multiplier',
    min: '0',
    step: '1',
    max: '32',
    value: '1',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.SLIDER_DISTORTION,
    type: ui.TYPE_SLIDER,
    label: 'Distortion',
    min: '0',
    step: '0.01',
    max: '20',
    value: '1',
    len: 5,
    unit: 'dB'
  },

  {
    id: ui.SLIDER_DELAY_VOL_PC,
    type: ui.TYPE_SLIDER,
    label: 'Delay Volume',
    min: '0',
    step: '1',
    max: '100',
    value: '100',
    len: 3,
    unit: '%'
  },

  {
    id: ui.SLIDER_DELAY_CENTRE_PC,
    type: ui.TYPE_SLIDER,
    label: 'Delay Fraction C',
    min: '0',
    step: '1',
    max: '100',
    value: '50',
    len: 3,
    unit: '%'
  },
  {
    id: ui.SLIDER_DELAY_RES_L,
    type: ui.TYPE_SLIDER,
    label: 'Delay Resonance L',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '-0.7',
    len: 6,
    displayFn: map.MAP_EXP_2,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_DELAY_RES_C,
    type: ui.TYPE_SLIDER,
    label: 'Delay Resonance C',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '1.1',
    len: 6,
    displayFn: map.MAP_EXP_2,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_DELAY_RES_R,
    type: ui.TYPE_SLIDER,
    label: 'Delay Resonance R',
    min: '-2',
    step: '0.05',
    max: '13',
    value: '0.6',
    len: 6,
    displayFn: map.MAP_EXP_2,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MOD_MULT_A,
    type: ui.TYPE_SLIDER,
    label: 'FM Multiplier A',
    min: '1',
    step: '1',
    max: '32',
    value: '2',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.SLIDER_MOD_IDX_A,
    type: ui.TYPE_SLIDER,
    label: 'Modulating Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '200',
    len: 4,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MOD2_RATE_A,
    type: ui.TYPE_SLIDER,
    label: 'Mod2 Rate A',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.69897',
    len: 6,
    displayFn: map.MAP_EXP_10,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MOD2_IDX_A,
    type: ui.TYPE_SLIDER,
    label: 'Mod2 Index A',
    min: '0',
    step: '1',
    max: '2000',
    value: '0',
    len: 4,
    unit: 'Hz'
  },

  {
    id: ui.SLIDER_MOD_MULT_B,
    type: ui.TYPE_SLIDER,
    label: 'FM Multiplier B',
    min: '1',
    step: '1',
    max: '32',
    value: '3',
    len: 2,
    unit: 'x'
  },
  {
    id: ui.SLIDER_MOD_IDX_B,
    type: ui.TYPE_SLIDER,
    label: 'Modulating Index B',
    min: '0',
    step: '1',
    max: '2000',
    value: '160',
    len: 4,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MOD2_RATE_B,
    type: ui.TYPE_SLIDER,
    label: 'Mod2 Rate B',
    min: '-2',
    step: '0.01',
    max: '4',
    value: '-0.845098',
    len: 6,
    displayFn: map.MAP_EXP_10,
    unit: 'Hz'
  },
  {
    id: ui.SLIDER_MOD2_IDX_B,
    type: ui.TYPE_SLIDER,
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
