import PropTypes from "prop-types";
import { useRef } from "react";

const PhotoItem = ({ img, video, title }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <article className="mb-[30px] relative shadow-[1px_1px_8px_rgba(0,0,0,0.25)] rounded-[10px] bg-white overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[10px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
      {img && (
        <img
          src={img}
          className="w-full h-auto object-cover block"
          alt={title}
        />
      )}
      {video && (
        <video
          ref={videoRef}
          src={video}
          className="w-full h-auto cursor-pointer relative z-[2]"
          controls
          onClick={handleVideoClick}
        />
      )}
    </article>
  );
};

PhotoItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  video: PropTypes.string,
  // category: PropTypes.string,
  // date: PropTypes.string,
};

export default PhotoItem;
