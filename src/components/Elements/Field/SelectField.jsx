import PropTypes from "prop-types";

export const SelectField = (props) => {
  const { options, id, placeholder, value, onChange, isRequired, isDisabled } =
    props;
  return (
    <select
      className="w-full bg-[#E8E8E8] px-[20px] py-[4px] rounded-[8px]"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    >
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
