import PropTypes from "prop-types";

export const InputLabel = (props) => {
  const { children, label, id, unit } = props;

  return (
    <div className="w-full flex items-center">
      <div className="w-1/3">
        <label className="" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="w-2/3 flex items-center">
        <div className="flex-1">{children}</div>
        {unit && (
          <div>
            <label className=" ml-5">{unit}</label>
          </div>
        )}
      </div>
    </div>
  );
};

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  unit: PropTypes.string,
};
