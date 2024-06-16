import "../css/Title.css";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
