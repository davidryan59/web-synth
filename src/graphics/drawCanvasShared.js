const drawCanvasShared = ({ arrayToDraw, minVal, maxVal, canvasCtx, canvasElt, widthMult=1.0 }) => {
  const bufferLength = arrayToDraw.length
  const denomReciprocal = 1 / (maxVal - minVal)
  canvasCtx.fillStyle = "#000";
  canvasCtx.lineWidth = 1;
  canvasCtx.strokeStyle = "#0F0";
  canvasCtx.fillRect(0, 0, canvasElt.width, canvasElt.height);
  canvasCtx.beginPath();
  const xDiff = widthMult * canvasElt.width / bufferLength;
  let xPos = 0;
  for (let i = 0; i < bufferLength; i++) {
    // Transform data to be in range 0 (min) to 1 (max)
    const relativeVal = Math.max(0, Math.min(1, (arrayToDraw[i] - minVal) * denomReciprocal))
    // Invert vertically - canvas origin is top left, want bottom left.
    const yPos = (1 - relativeVal) * canvasElt.height;
    if (i === 0) {
      canvasCtx.moveTo(xPos, yPos);
    } else {
      canvasCtx.lineTo(xPos, yPos);
    }
    xPos += xDiff;
    if (xPos > canvasElt.width) break   // Is faster for widthMult > 1
  }
  canvasCtx.stroke();
}

export default drawCanvasShared
