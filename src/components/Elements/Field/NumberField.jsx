import PropTypes from "prop-types";

export const NumberField = (props) => {
  const { id, placeholder, value, min, max, onChange, isRequired, isDisabled } =
    props;
  return (
    <input
      className="w-full bg-[#E8E8E8] px-[10px] py-[4px] rounded-[8px]"
      type="number"
      id={id}
      placeholder={placeholder}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
