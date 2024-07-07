import PropTypes from "prop-types";

export const SectionTile = (props) => {
  const { title } = props;
  return (
    <div className="bg-[#91C8E4] p-[6px] text-center rounded-[12px]">
      <h3 className="font-bold ">{title}</h3>
    </div>
  );
};

SectionTile.propTypes = {
  title: PropTypes.string.isRequired,
};
