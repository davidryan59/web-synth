export const POWER2 = 'POWER2'
export const POWER2ROUND = 'POWER2ROUND'
export const POWER10 = 'POWER10'

export const callFunction = (val, fnType) => {
  switch (fnType) {
    case POWER2:
      return 2 ** val
    case POWER2ROUND:
      return Math.round(2 ** val)
    case POWER10:
      return 10 ** val
    default:
      return val
  }
}
