import * as map from '../mappings'

it('numericMap using MAP_EXP_2: 2 ^ 3 = 8', () => {
  expect(map.numericMap(3, map.MAP_EXP_2)).toEqual(8)
})

it('numericMap using MAP_DB_TO_GAIN: +40dB = x100', () => {
  expect(map.numericMap(40, map.MAP_DB_TO_GAIN)).toEqual(100)
})
