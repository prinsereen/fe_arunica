import PropTypes from "prop-types";

export const UploadField = (props) => {
  const { id, value, placeholder, onChange, isRequired, isDisabled } = props; // Define the 'isDisabled' variable
  return (
    <div>
      <label
        className="bg-[#E8E8E8] px-[20px] py-[4px] rounded-[8px]"
        htmlFor={id}
      >
        {value ?? placeholder}
      </label>
      <input
        className="hidden"
        id={id}
        type="file"
        onChange={onChange}
        required={isRequired}
        disabled={isDisabled}
      />
    </div>
  );
};

UploadField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
