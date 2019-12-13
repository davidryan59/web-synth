export const TOGGLE_AUDIO = 'TOGGLE_AUDIO'
export const TOGGLE_ANIMATION = 'TOGGLE_ANIMATION'
export const TOGGLE_DISTORT_MODE = 'TOGGLE_DISTORT_MODE'

// Format of each row is:
// [keyboard coard, UI element, optional user message]
export const keyUpMap = [
  ['KeyS', TOGGLE_AUDIO, 'Toggling sound (play button) via S key'],
  ['KeyA', TOGGLE_ANIMATION, 'Toggling animation via A key'],
  ['KeyD', TOGGLE_DISTORT_MODE, 'Toggling distortion via D key'],
]

export const MIXER_GAIN = 'MIXER_GAIN'

export const MAIN_SHAPE = 'MAIN_SHAPE'
export const MAIN_SCALE = 'MAIN_SCALE'
export const MAIN_FREQ = 'MAIN_FREQ'
export const BASE_FREQ = 'BASE_FREQ'
export const MAIN_MULT = 'MAIN_MULT'
export const MAIN_DISTORT = 'MAIN_DISTORT'

export const DELAY_VOLUME_PERCENT = 'DELAY_VOLUME_PERCENT'
export const DELAY_RESONANCE_L = 'DELAY_RESONANCE_L'
export const DELAY_RESONANCE_M = 'DELAY_RESONANCE_M'
export const DELAY_RESONANCE_R = 'DELAY_RESONANCE_R'

export const MOD_SHAPE_A = 'MOD_SHAPE_A'
export const MOD_MULT_A = 'MOD_MULT_A'
export const MOD_IDX_A = 'MOD_IDX_A'
export const MOD2_SHAPE_A = 'MOD2_SHAPE_A'
export const MOD2_RATE_A = 'MOD2_RATE_A'
export const MOD2_IDX_A = 'MOD2_IDX_A'

export const MOD_SHAPE_B = 'MOD_SHAPE_B'
export const MOD_MULT_B = 'MOD_MULT_B'
export const MOD_IDX_B = 'MOD_IDX_B'
export const MOD2_SHAPE_B = 'MOD2_SHAPE_B'
export const MOD2_RATE_B = 'MOD2_RATE_B'
export const MOD2_IDX_B = 'MOD2_IDX_B'
