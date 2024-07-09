import PropTypes from "prop-types";

export const QuestionTile = (props) => {
  const { children, title } = props;
  return (
    <div className="py-[6px] px-[12px] text-center rounded-[12px] border-[#9F9F9F] flex items-center border-[1px]">
      <span className="flex-1 text-left">{title}</span>
      <div className="min-w-[400px] flex space-x-2">{children}</div>
    </div>
  );
};

QuestionTile.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
