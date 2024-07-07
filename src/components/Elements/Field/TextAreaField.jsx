import PropTypes from "prop-types";

export const TextAreaField = (props) => {
  const {
    id,
    placeholder,
    value,
    rows,
    min,
    max,
    onChange,
    isRequired,
    isDisabled,
  } = props;

  return (
    <textarea
      className="w-full bg-[#E8E8E8] px-[20px] py-[4px] rounded-[8px]"
      id={id}
      value={value}
      rows={rows}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

TextAreaField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
