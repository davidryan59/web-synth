const drawLine = (ctx, height, colour, minVal, maxVal, cX, cY) => {
  const zoom = 2 / (maxVal - minVal)
  const vHeight = 0.5 + zoom * (height - 0.5)
  if (vHeight < 0 || vHeight > 1) return
  ctx.strokeStyle = colour
  ctx.beginPath()
  ctx.moveTo(0, Math.floor(vHeight*cY)+0.5)   // 0.5 looks sharper on Retina
  ctx.lineTo(cX, Math.floor(vHeight*cY)+0.5)  // ... make more general
  ctx.stroke()
}

const drawCanvasShared = ({
  arrayToDraw,
  minVal,
  maxVal,
  canvasCtx,
  canvasElt,
  widthMult = 1.0,
  logXMode = false,
  logXParam = 100,
  drawGrid = false
}) => {
  const bufferLength = arrayToDraw.length
  const denomReciprocal = 1 / (maxVal - minVal)
  canvasCtx.fillStyle = '#000'
  const cX = canvasElt.width
  const cY = canvasElt.height
  canvasCtx.fillRect(0, 0, cX, cY)
  canvasCtx.lineWidth = 1
  if (drawGrid) {
    drawLine(canvasCtx, 0.125, '#444', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.25, '#555', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.375, '#444', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.5, '#666', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.625, '#444', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.75, '#555', minVal, maxVal, cX, cY)
    drawLine(canvasCtx, 0.875, '#444', minVal, maxVal, cX, cY)
  }
  canvasCtx.strokeStyle = '#0F0'
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
