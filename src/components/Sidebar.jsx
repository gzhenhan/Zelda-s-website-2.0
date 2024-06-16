import "../css/Sidebar.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
// import { WanderingPet } from "react-wandering-pet";
// import catGif from "react-wandering-pet/dist/assets/cat.gif";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Calendar />
      {/* <WanderingPet
        src={catGif} // Optional. Default is the orange cat GIF.
        height={100} // Default is 48px.
        width={125} // Default is auto
        className="walkingcat"
        heightOffset={100} // The hight of the GIF from the bottom of the screen. Default is -9px.
        maxLimitOffset={20} // When will the GIF reset and repeat offset from the right edge of the screen.
        movementInterval={50} // The number (milliseconds) at which will add movementOffset to the GIF to move it.
        movementOffset={0.8} // The number of pixels at which the GIF will move by for each interval.
        startingOffset={-20} // The offset at which the GIF starts from.
      /> */}
    </div>
  );
};

export default Sidebar;
