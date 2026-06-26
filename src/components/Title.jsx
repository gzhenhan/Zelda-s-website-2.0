import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="text-center my-[50px]">
      <h2 className="mb-1">{title || "Default Title"}</h2>
      <div className="bg-brand-light w-28 h-1 mx-auto"></div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
