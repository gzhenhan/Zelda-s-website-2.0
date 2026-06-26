import Title from "./Title";
import Sidebar from "./Sidebar";
import diaryData from "../diaryData";
import { Link } from "react-router-dom";
import { WanderingPet } from "react-wandering-pet";
import catGif from "react-wandering-pet/dist/assets/cat.gif";

const Diary = () => {
  return (
    <div className="m-[30px]">
      <Title title="Welcome to Zelda's (Mom's) Diary" />
      <div className="flex">
        <Sidebar />
        <div className="w-[70%] p-5 bg-white/40 border border-[#ddd]">
          <h2>Diary List</h2>
          {diaryData.map((diary) => (
            <Link
              key={diary.date}
              to={`/diary/${diary.date}`}
              className="no-underline text-inherit"
            >
              <div className="flex justify-between ml-[10px] mb-[10px] p-[5px] transition-colors duration-300 hover:bg-[#f4e7c2]">
                <h3 className="m-0">{diary.title}</h3>
                <p className="m-0 text-[#888]">{diary.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <WanderingPet
        src={catGif} // Optional. Default is the orange cat GIF.
        height={80} // Default is 48px.
        width={125} // Default is auto
        className="walkingcat"
        heightOffset={200} // The hight of the GIF from the bottom of the screen. Default is -9px.
        maxLimitOffset={20} // When will the GIF reset and repeat offset from the right edge of the screen.
        movementInterval={50} // The number (milliseconds) at which will add movementOffset to the GIF to move it.
        movementOffset={0.8} // The number of pixels at which the GIF will move by for each interval.
        startingOffset={-20} // The offset at which the GIF starts from.
      />
    </div>
  );
};

export default Diary;
