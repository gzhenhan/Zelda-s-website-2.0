import { useState } from "react";

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
    <div className="w-[1000px] mx-auto h-auto bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg p-[30px]">
      <div className="flex">
        <img
          src="assets/cat_image.jpg"
          className="w-[250px] h-[250px] rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col ml-[30px] w-full">
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="text-sm text-[#999]">Name</span>
              <h1 className="text-4xl text-ink m-0">Zelda</h1>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#999]">Birthday</span>
                <span className="text-lg font-bold text-ink">26.03.2023</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#999]">Gender</span>
                <span className="text-lg font-bold text-ink">Female</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#999]">Weight</span>
                <span className="text-lg font-bold text-ink">5.4kg</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-sm text-[#999]">Story</span>
            <p className="text-sm text-[#333]">
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
          <div className="flex flex-col mt-5">
            <span className="text-sm text-[#999]">Photos</span>
            <div className="flex gap-[10px] mt-[15px]">
              {[
                "assets/cat_photo1.jpg",
                "assets/cat_photo2.jpg",
                "assets/cat_photo3.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className={`w-[150px] h-[150px] rounded-[10%] object-cover cursor-pointer transition-transform duration-300 ${
                    isZoomed === index ? "scale-[2] z-10" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                  alt={`Photo ${index + 1}`}
                />
              ))}
            </div>
            {isZoomed !== null && (
              <div
                className="fixed inset-0 bg-black/50 z-[5]"
                onClick={handleOverlayClick}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
