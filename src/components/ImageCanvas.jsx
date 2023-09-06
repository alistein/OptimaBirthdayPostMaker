/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import FallbackImage from '../assets/img/Main.png';

const ImageCanvas = ({name,message,date, writeTextToImage , className }) => {
  const displayCanvasRef = useRef(null);
  const exportCanvasRef = useRef(null);
  const img = useRef(new Image());

  useEffect(() => {

    const updateCanvas = (canvas, ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img.current, 0, 0, width, height);
        let yPosition = 290;
        yPosition = writeTextToImage(ctx, name, 20, yPosition, 40, 140, 40, 'right', 1);
        yPosition += 27; // Add additional gap between this and next text block
        yPosition = writeTextToImage(ctx, date, 20, yPosition, 15, 140, 42, 'right', 2);
        yPosition += 17;
        yPosition = writeTextToImage(ctx, message, 20, yPosition, 15, 140, 42, 'right', 2);
        
      };

      const updateCanvasOriginal = (canvas, ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img.current, 0, 0, width, height);
        
        const scalingFactor = 3.75;  // 1500 / 400
      
        let yPosition = 1050;
        let baseX = 30;
        let fontSize = 200;
        let fontSizeSmall = 50;
        let maxWidth = 800;
        let lineHeight = 190;
        let textAlign = 'right';
  
        
        yPosition = writeTextToImage(ctx, name, baseX, yPosition, fontSize, 190 * scalingFactor, lineHeight, textAlign,1);
        yPosition += 30 * scalingFactor
        yPosition = writeTextToImage(ctx, date, baseX, yPosition, fontSizeSmall, 160 * scalingFactor, lineHeight, textAlign,2);
        yPosition += 20 * scalingFactor
        yPosition = writeTextToImage(ctx, message, baseX, yPosition, fontSizeSmall, 160 * scalingFactor, lineHeight, textAlign,2);
      };
      

    img.current.src = FallbackImage;
    img.current.onload = () => {
      // Update display canvas
      const displayCanvas = displayCanvasRef.current;
      const displayCtx = displayCanvas.getContext('2d');
      updateCanvas(displayCanvas, displayCtx, 400, 400);

      // Update export canvas
      const exportCanvas = exportCanvasRef.current;
      const exportCtx = exportCanvas.getContext('2d');
      updateCanvasOriginal(exportCanvas, exportCtx, 1500, 1500);
    };
  }, [name,message,date, writeTextToImage]);

  return (
    <>
      <canvas ref={displayCanvasRef} width="400" height="400" className={className} />
      <canvas ref={exportCanvasRef} width="1500" height="1500" style={{ display: 'none' }} />
      <ActionButton
        canvasRef={exportCanvasRef} // Pass the exportCanvasRef here
        className="gradient-button"
        label="Extract Image"
        onClick={() => {}}
      />
    </>
  );
};

ImageCanvas.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  writeTextToImage: PropTypes.func.isRequired,
  writeTextToImageOriginal: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ImageCanvas;
