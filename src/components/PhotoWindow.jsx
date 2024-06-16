import PropTypes from "prop-types";
import "../css/PhotoWindow.css";

const PhotoWindow = ({ photoSrc, onClose }) => {
  if (!photoSrc) return null;

  return (
    <div className="photo-window-overlay" onClick={onClose}>
      <div className="photo-window">
        <img src={photoSrc} alt="Timeline" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

PhotoWindow.propTypes = {
  photoSrc: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default PhotoWindow;
