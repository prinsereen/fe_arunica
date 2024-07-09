import PropTypes from "prop-types";

export const BigButton = (props) => {
  const { label, onClick, isExpanded } = props;

  return (
    <button
      className={`bg-[#40B14F] py-[12px] rounded-[12px] ${
        isExpanded && "w-full"
      }`}
      onClick={onClick}
    >
      <span className=" font-bold text-white">{label}</span>
    </button>
  );
};

BigButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
};
