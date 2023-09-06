import PropTypes from 'prop-types';

const TextInput = ({ value, onChange, className, placeholder, type, disabled }) => {
  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export default TextInput;
