import { useParams, useNavigate } from "react-router-dom";
import diaryData from "../diaryData";
import "../css/DiaryDetail.css";

const DiaryDetail = () => {
  const { date } = useParams(); // /diary/:date
  const navigate = useNavigate();
  console.log(date);

  // 根据日期查找对应的日记条目
  const diary = diaryData.find((data) => data.date === date);
  // console.log(diary);

  if (!diary) {
    return <div>Diary not found</div>; // 如果找不到日记条目，显示提示
  }

  return (
    <div className="diary-detail">
      <div className="diary-header">
        <button onClick={() => navigate(-1)} className="go-back-button">
          Back
        </button>
        <h2>{diary.title}</h2>
        <p>{diary.date}</p>
      </div>
      <div className="diary-content">
        <p>{diary.content}</p>
        <div className="photo-gallery">
          {diary.photoSrc &&
            diary.photoSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                className="img"
                alt={`${diary.title} ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryDetail;
