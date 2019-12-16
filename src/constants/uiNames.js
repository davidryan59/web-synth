export const TOGGLE_AUDIO = 'TOGGLE_AUDIO'
export const TOGGLE_ANIMATION = 'TOGGLE_ANIMATION'
export const TOGGLE_DISTORT_MODE = 'TOGGLE_DISTORT_MODE'
export const TOGGLE_ANALYSER_LOG = 'TOGGLE_ANALYSER_LOG'

// Format of each row is:
// [keyboard coard, UI element, optional user message]
export const keyUpMap = [
  ['KeyS', TOGGLE_AUDIO, 'Toggling sound (play button) via S key'],
  ['KeyA', TOGGLE_ANIMATION, 'Toggling animation via A key'],
  ['KeyD', TOGGLE_DISTORT_MODE, 'Toggling distortion via D key'],
  ['KeyL', TOGGLE_ANALYSER_LOG, 'Toggling analyser log mode via L key']
]

export const SLIDER_MIXER_GAIN = 'SLIDER_MIXER_GAIN'

export const SLIDER_ANIMATION_RATE = 'SLIDER_ANIMATION_RATE'
export const SLIDER_WAVEFORM_ZOOM = 'SLIDER_WAVEFORM_ZOOM'
export const SLIDER_WAVEFORM_HEIGHT = 'SLIDER_WAVEFORM_HEIGHT'
export const SLIDER_SPECTRUM_HEIGHT = 'SLIDER_SPECTRUM_HEIGHT'
export const getHeightSliderNameFromCanvasId = {
  waveform: SLIDER_WAVEFORM_HEIGHT,
  spectrum: SLIDER_SPECTRUM_HEIGHT
}
export const SLIDER_SPECTRUM_MAX_FREQ = 'SLIDER_SPECTRUM_MAX_FREQ'
export const SLIDER_SPECTRUM_MIN_DB = 'SLIDER_SPECTRUM_MIN_DB'

export const PICK_SCALE = 'PICK_SCALE'
export const PICK_MAIN_SHAPE = 'PICK_MAIN_SHAPE'
export const SLIDER_MAIN_FREQ = 'SLIDER_MAIN_FREQ'
export const SLIDER_BASE_FREQ = 'SLIDER_BASE_FREQ'
export const SLIDER_MAIN_MULT = 'SLIDER_MAIN_MULT'
export const SLIDER_DISTORTION = 'SLIDER_DISTORTION'

export const SLIDER_DELAY_VOL_PC = 'SLIDER_DELAY_VOL_PC'
export const SLIDER_DELAY_CENTRE_PC = 'SLIDER_DELAY_CENTRE_PC'
export const SLIDER_DELAY_RES_L = 'SLIDER_DELAY_RES_L'
export const SLIDER_DELAY_RES_C = 'SLIDER_DELAY_RES_C'
export const SLIDER_DELAY_RES_R = 'SLIDER_DELAY_RES_R'

export const PICK_MOD_SHAPE_A = 'PICK_MOD_SHAPE_A'
export const SLIDER_MOD_MULT_A = 'SLIDER_MOD_MULT_A'
export const SLIDER_MOD_IDX_A = 'SLIDER_MOD_IDX_A'
export const PICK_MOD2_SHAPE_A = 'PICK_MOD2_SHAPE_A'
export const SLIDER_MOD2_RATE_A = 'SLIDER_MOD2_RATE_A'
export const SLIDER_MOD2_IDX_A = 'SLIDER_MOD2_IDX_A'

export const PICK_MOD_SHAPE_B = 'PICK_MOD_SHAPE_B'
export const SLIDER_MOD_MULT_B = 'SLIDER_MOD_MULT_B'
export const SLIDER_MOD_IDX_B = 'SLIDER_MOD_IDX_B'
export const PICK_MOD2_SHAPE_B = 'PICK_MOD2_SHAPE_B'
export const SLIDER_MOD2_RATE_B = 'SLIDER_MOD2_RATE_B'
export const SLIDER_MOD2_IDX_B = 'SLIDER_MOD2_IDX_B'
