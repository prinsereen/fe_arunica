import PropTypes from "prop-types";

export const SmallButton = (props) => {
  const { type, label, onClick, isExpanded } = props;

  return (
    <button
      className={`${
        type === "primary" ? "bg-[#1450A3]" : "bg-[#91C8E4]"
      } py-[6px] rounded-[12px] w-full ${
        isExpanded ? "lg:w-full" : "lg:w-2/3"
      }`}
      onClick={onClick}
    >
      <span className={`${type === "primary" ? "text-white" : "text-black"}`}>
        {label}
      </span>
    </button>
  );
};

SmallButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
};
