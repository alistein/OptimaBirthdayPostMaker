// components/ImageUpload.jsx
import PropTypes from 'prop-types';

const ImageUpload = ({ onUpload, className }) => {
  return (
    <>
      <input
        type="file"
        id="fileInput"
        onChange={onUpload}
        style={{ display: 'none' }}
      />
      <label htmlFor="fileInput" className={className}>
        Upload Image
      </label>
    </>
  );
};

ImageUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ImageUpload;
