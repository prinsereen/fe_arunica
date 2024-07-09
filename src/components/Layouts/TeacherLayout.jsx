import Footer from "../Footer";
import GuruNavbar from "../GuruNavbar";
import PropTypes from "prop-types";

export const TeacherLayout = (props) => {
  const { children, breadcrumb } = props;
  return (
    <div>
      <GuruNavbar />
      <div className="mx-5 lg:mx-44">
        <h1 className="text-center text-[22px] font-bold py-[32px]">
          {breadcrumb}
        </h1>
        <article>{children}</article>
      </div>
      <Footer />
    </div>
  );
};

TeacherLayout.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumb: PropTypes.string.isRequired,
};
