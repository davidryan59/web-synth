export const scaleSetupArray = []
// First scale is default
// Format is: [ [Label 1, Scale frequency array 1], [Label 2, Scale frequency array 2], ... ]

scaleSetupArray.push(['Major Scale', [24, 27, 30, 32, 36, 40, 45]])
scaleSetupArray.push(['Major Chord', [3, 4, 5]])
scaleSetupArray.push(['Pentatonic (Major 9th)', [5, 6, 7, 8, 9]])
scaleSetupArray.push(['Pentatonic (7-limit)', [12, 14, 16, 18, 21]])
scaleSetupArray.push(['11-limit', [6, 7, 8, 9, 10, 11]])
scaleSetupArray.push(['13-limit', [7, 8, 9, 10, 11, 12, 13]])
scaleSetupArray.push(['8 to 16', [8, 9, 10, 11, 12, 13, 14, 15]])
scaleSetupArray.push(['17-limit', [9, 10, 11, 12, 13, 14, 15, 16, 17]])
scaleSetupArray.push(['16 to 32', [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]])
scaleSetupArray.push(['32 to 64', [
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63
]])

export const scaleLabels = scaleSetupArray.map( row => row[0] )
export const scaleFromLabel = label => {
  const foundRow = scaleSetupArray.find( row => row[0] === label ) || scaleSetupArray[0]
  const scale = foundRow[1]
  return scale
}
