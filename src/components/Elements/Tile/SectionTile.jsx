import PropTypes from "prop-types";

export const SectionTile = (props) => {
  const { color, title } = props;
  return (
    <div
      className={`${
        color == "yellow" ? "bg-[#EFD595]" : "bg-[#91C8E4]"
      } p-[6px] text-center rounded-[12px]`}
    >
      <h3 className="font-bold ">{title}</h3>
    </div>
  );
};

SectionTile.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};
