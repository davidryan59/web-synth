import * as map from '../general/mappings'
import * as ui from '../constants/uiNames'
import { scaleLabels } from '../constants/scales'
import { waveShapes } from '../constants/general'

export const getInitialButtonsState = () => ([
  {
    id: ui.TOGGLE_ANIMATION,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'OFF (A)',
    labelActive: 'ON (A)',
    widthPx: 140,
    isActive: false
  },
  {
    id: ui.TOGGLE_SPECTRUM_LOG,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'LINEAR Scale (L)',
    labelActive: 'LOG Scale (L)',
    widthPx: 130,
    isActive: false
  },
  {
    id: ui.TOGGLE_AUDIO,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'Sound OFF (S)',
    labelActive: 'Sound ON (S)',
    widthPx: 175,
    isActive: false
  },
  {
    id: ui.TOGGLE_DISTORT_MODE,
    type: ui.TYPE_TOGGLE,
    labelInactive: 'CLIP Mode (D)',
    labelActive: 'AMPLIFY Mode (D)',
    widthPx: 140,
    isActive: false
  }
])

export const getInitialPicklistsState = () => [
  {
    id: ui.PICK_SCALE,
    type: ui.TYPE_PICKLIST,
    label: 'Type',
    values: [...scaleLabels],
    value: scaleLabels[0]
  },
  {
    id: ui.PICK_MAIN_SHAPE,
    type: ui.TYPE_PICKLIST,
    label: 'Shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.PICK_MOD_SHAPE_A,
    type: ui.TYPE_PICKLIST,
    label: 'Shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.PICK_MOD2_SHAPE_A,
    type: ui.TYPE_PICKLIST,
    label: 'Shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },

  {
    id: ui.PICK_MOD_SHAPE_B,
    type: ui.TYPE_PICKLIST,
    label: 'Shape',
    values: [...waveShapes],
    value: waveShapes[0]
  },
  {
    id: ui.PICK_MOD2_SHAPE_B,
    type: ui.TYPE_PICKLIST,
    label: 'Shape',
    values: [...waveShapes],
    value: waveShapes[0]
  }
]

export const getInitialSlidersState = () => [
  {
    id: ui.SLIDER_MIXER_GAIN,
    type: ui.TYPE_SLIDER,
    label: 'MAIN GAIN',
    min: '-30',
    step: '0.1',
    max: '0',
    value: '-8',
    len: 5,
    unit: 'dB',
    bgColour: '#444',
  },
  {
    id: ui.SLIDER_ANIMATION_RATE,
    type: ui.TYPE_SLIDER,
    label: 'Speed',
    min: '1',
    step: '0.01',
    max: '24',
    value: '8',
    len: 5,
    unit: 'frames'
  },
  {
    id: ui.SLIDER_WAVEFORM_H_ZOOM,
    type: ui.TYPE_SLIDER,
    label: 'Horizontal Zoom',
    min: '0',
    step: '1',
    max: '100',
    value: '0',
    len: 3,
    unit: '%'
  },
  {
    id: ui.SLIDER_WAVEFORM_V_ZOOM,
    type: ui.TYPE_SLIDER,
    label: 'Vertical Zoom',
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
    label: 'Graph Height',
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
    label: 'Graph Height',
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
    label: 'Max Frequency',
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
    label: 'Min dB',
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
    label: 'MAIN FREQUENCY',
    min: '1',
    step: '1',
    max: '720',
    value: '256',
    len: 3,
    unit: 'Hz',
    bgColour: '#444',
  },
  {
    id: ui.SLIDER_BASE_FREQ,
    type: ui.TYPE_SLIDER,
    label: 'Starts At',
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
    label: 'Multiplier',
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
    label: 'Effect Volume',
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
    label: 'Centre Volume',
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
    label: 'Left Resonance',
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
    label: 'Centre Resonance',
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
    label: 'Right Resonance',
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
    label: 'Multiplier',
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
    label: 'Index',
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
    label: 'Frequency',
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
    label: 'Index',
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
    label: 'Multiplier',
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
    label: 'Index',
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
    label: 'Frequency',
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
    label: 'Index',
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
