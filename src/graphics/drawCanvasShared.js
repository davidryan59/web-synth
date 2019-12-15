const drawCanvasShared = ({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult = 1.0, logXMode = false, logXParam = 100 }) => {
  const bufferLength = arrayToDraw.length
  const denomReciprocal = 1 / (maxVal - minVal)
  canvasCtx.fillStyle = '#000'
  canvasCtx.lineWidth = 1
  canvasCtx.strokeStyle = '#0F0'
  canvasCtx.fillRect(0, 0, canvasElt.width, canvasElt.height)
  canvasCtx.beginPath()
  const bufferLengthRecip = 1 / bufferLength
  let xPos = 0
  for (let i = 0; i < bufferLength; i++) {
    const xFraction = i * widthMult * bufferLengthRecip // Between 0 and 1
    // x-position depends on logXMode
    if (!logXMode) {
      // Linear Mode
      xPos = xFraction * canvasElt.width
    } else {
      // Log Mode
      // Maps [0, 1] -> [0, P-1] -> [1, P] -(logP)-> [0, 1]
      // Allows DC component to be plotted on log graph
      // For higher values of logXParam, it is truer to a Log graph,
      // but the useful portion (30 Hz and higher) gets smaller
      const xLogFraction = Math.log(1 + xFraction * (logXParam - 1)) / Math.log(logXParam)
      xPos = xLogFraction * canvasElt.width
    }
    // Transform data to be in range 0 (min) to 1 (max)
    const relativeVal = Math.max(0, Math.min(1, (arrayToDraw[i] - minVal) * denomReciprocal))
    // Invert vertically - canvas origin is top left, want bottom left.
    const yPos = (1 - relativeVal) * canvasElt.height
    if (i === 0) {
      canvasCtx.moveTo(xPos, yPos)
    } else {
      canvasCtx.lineTo(xPos, yPos)
    }
    if (xPos > canvasElt.width) break // Is faster for widthMult > 1
  }
  canvasCtx.stroke()
}

export default drawCanvasShared
