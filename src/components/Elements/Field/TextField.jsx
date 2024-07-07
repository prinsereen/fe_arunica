import PropTypes from "prop-types";

export const TextField = (props) => {
  const { id, placeholder, value, onChange, isRequired, isDisabled } = props;
  return (
    <input
      className="w-full bg-[#E8E8E8] px-[20px] py-[4px] rounded-[8px]"
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
