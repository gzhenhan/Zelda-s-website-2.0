import timelineData from "../timelineData.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/Timeline.css";
import { FaCat } from "react-icons/fa";
import Title from "./Title";
import { useState } from "react";
import PhotoWindow from "./PhotoWindow.jsx";

const Timeline = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photoSrc) => {
    console.log("Photo source:", photoSrc);
    setSelectedPhoto(photoSrc);
  };

  const handlePhotoClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <Title title="Timeline" />
      <VerticalTimeline>
        {timelineData.map((data) => {
          return (
            <VerticalTimelineElement
              key={data.id}
              date={data.date}
              dateClassName="date"
              text={data.text}
              iconStyle={{ background: "#D4C3AD" }}
              icon={<FaCat />}
              onTimelineElementClick={() => handlePhotoClick(data.photoSrc)}
            >
              <h4>{data.text}</h4>
              <p>{data.desc}</p>
              {data.photoSrc && (
                <p className="click-hint">Click to see photo</p>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {selectedPhoto && (
        <PhotoWindow photoSrc={selectedPhoto} onClose={handlePhotoClose} />
      )}
    </div>
  );
};

export default Timeline;
