/* eslint-disable react/prop-types */
const ActionButton = ({ canvasRef, className }) => {
  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      // Convert canvas to data URL
      const imgURL = canvas.toDataURL("image/png");

      // Create an anchor element and trigger download
      const link = document.createElement("a");
      link.href = imgURL;
      link.download = "canvas_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button onClick={handleDownload} className={className}>
      Download Image
    </button>
  );
};

export default ActionButton;
