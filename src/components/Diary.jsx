import Title from "./Title";
import Sidebar from "./Sidebar";
import diaryData from "../diaryData";
import { Link } from "react-router-dom";
import "../css/Diary.css";
import { WanderingPet } from "react-wandering-pet";
import catGif from "react-wandering-pet/dist/assets/cat.gif";

const Diary = () => {
  return (
    <div className="diary-page-container">
      <Title title="Welcome to Zelda's (Mom's) Diary" />
      <div className="diary-container">
        <Sidebar />
        <div className="diary-list">
          <h2>Diary List</h2>
          {diaryData.map((diary) => (
            <Link
              key={diary.date}
              to={`/diary/${diary.date}`}
              className="diary-link"
            >
              <div className="diary-entry">
                <h3>{diary.title}</h3>
                <p>{diary.date}</p>
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
