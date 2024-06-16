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
    <article className="photo-item">
      {img && <img src={img} className="img" alt={title} />}
      {video && (
        <video
          ref={videoRef}
          src={video}
          className="video"
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
