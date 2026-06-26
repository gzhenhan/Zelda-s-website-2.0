import PropTypes from "prop-types";

const PhotoWindow = ({ photoSrc, onClose }) => {
  if (!photoSrc) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/80 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div className="bg-white p-5 rounded-lg max-w-[90%] max-h-[90%] overflow-auto relative">
        <img src={photoSrc} alt="Timeline" className="max-w-full max-h-[80vh]" />
        <button
          className="absolute top-[10px] right-[10px] bg-[#333] text-white border-none rounded-[4px] px-[10px] py-[5px] cursor-pointer"
          onClick={onClose}
        >
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
