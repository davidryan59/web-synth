const r255 = 1/255

const drawCanvasShared = ({ canvasCtx, canvasElt, bufferLength, widthMult=1, bytesToDraw }) => {
  canvasCtx.fillStyle = "#000";
  canvasCtx.lineWidth = 1;
  canvasCtx.strokeStyle = "#0F0";
  canvasCtx.fillRect(0, 0, canvasElt.width, canvasElt.height);
  canvasCtx.beginPath();
  const xDiff = widthMult * canvasElt.width / bufferLength;
  let xPos = 0;
  for (let i = 0; i < bufferLength; i++) {
    // Bytes are in range 0 to 255
    // Invert vertically - canvas origin is top left, want bottom left.
    const yPos = (1 - r255 * bytesToDraw[i]) * canvasElt.height;
    if (i === 0) {
      canvasCtx.moveTo(xPos, yPos);
    } else {
      canvasCtx.lineTo(xPos, yPos);
    }
    xPos += xDiff;
  }
  canvasCtx.stroke();
}

export default drawCanvasShared
