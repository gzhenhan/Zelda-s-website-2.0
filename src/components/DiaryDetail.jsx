import { useParams, useNavigate } from "react-router-dom";
import diaryData from "../diaryData";

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
    <div className="px-10 py-5 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] m-5">
      <div className="flex justify-between items-center mb-[30px]">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-[10px] bg-brand text-white border-none rounded-[5px] cursor-pointer text-[13px] hover:bg-brand-dark"
        >
          Back
        </button>
        <h2 className="text-2xl">{diary.title}</h2>
        <p>{diary.date}</p>
      </div>
      <div className="flex flex-col ml-[30px]">
        <p>{diary.content}</p>
        <div className="mt-5 flex flex-row gap-5">
          {diary.photoSrc &&
            diary.photoSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-[30%] rounded-lg"
                alt={`${diary.title} ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryDetail;
