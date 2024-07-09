import PropTypes from "prop-types";

export const TextField = (props) => {
  const { color, id, placeholder, value, onChange, isRequired, isDisabled } =
    props;
  return (
    <input
      className={`w-full ${
        color === "white" ? "bg-white" : "bg-[#E8E8E8]"
      } px-[20px] py-[4px] rounded-[8px]`}
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
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
