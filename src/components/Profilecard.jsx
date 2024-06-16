import { useState } from "react";
import "../css/Profilecard.css";

const Profilecard = () => {
  // 追踪哪张图片被点击放大，isZoomed 返回 photo的index
  const [isZoomed, setIsZoomed] = useState(null);

  // 更新被点击图片的状态
  const handleImageClick = (index) => {
    setIsZoomed(index);
  };

  // 点击图片外区域时，恢复图片到原始大小
  const handleOverlayClick = () => {
    setIsZoomed(null);
  };

  return (
    <div className="profile-card">
      <div className="profile">
        <img src="assets/cat_image.jpg" className="profile-image" />
        <div className="profile-content">
          <div className="profile-summary">
            <div className="profile-name-section">
              <span className="profile-label">Name</span>
              <h1 className="profile-name">Zelda</h1>
            </div>
            <div className="profile-info">
              <div className="profile-info-item">
                <span className="info-label">Birthday</span>
                <span className="info-value">26.03.2023</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Gender</span>
                <span className="info-value">Female</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Weight</span>
                <span className="info-value">5.4kg</span>
              </div>
            </div>
          </div>
          <div className="profile-story">
            <span className="info-label">Story</span>
            <p className="story-text">
              Zelda is a <b>British longhair cat</b> and currently lives in
              Munich. She is currently 1 year old, she is very active and
              healthy and loves to be close to people. The British Longhair cat
              is a charming and elegant breed known for its lush, dense coat and
              calm demeanor. This breed is a variant of the British Shorthair,
              with a history that traces back to the early 20th century. British
              Longhairs were developed by crossing British Shorthairs with
              Persian cats, which resulted in the distinctive long, fluffy fur
              that sets them apart.
            </p>
          </div>
          <div className="profile-album">
            <span className="info-label">Photos</span>
            <div className="photos-container">
              {[
                "assets/cat_photo1.jpg",
                "assets/cat_photo2.jpg",
                "assets/cat_photo3.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className={`profile-photos ${
                    isZoomed === index ? "zoomed" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                  alt={`Photo ${index + 1}`}
                />
              ))}
            </div>
            {isZoomed !== null && (
              <div className="overlay" onClick={handleOverlayClick}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
