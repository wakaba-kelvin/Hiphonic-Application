import React from "react";
import "./TimelineCard.scss";
import wade from "../../assets/wade.png";
import jane from "../../assets/jane.png";
import esther from "../../assets/esther.png";
import brooklyn from "../../assets/brooklyn.png";
import Angela from "../../assets/angela.png";
import Leslie from "../../assets/leslie.png";
import Jenny from "../../assets/jenny.png";
import Robert from "../../assets/robert.png";
import Cody from "../../assets/cody.png";
import Kristina from "../../assets/kristina.png";

import RightContent from "../RightContent";

const TimelineCard = () => {
  const friends = [
    {
      image: Angela,
      username: "You",
    },
    {
      image: wade,
      username: "wadee",
    },
    {
      image: jane,
      username: "jane",
    },
    {
      image: esther,
      username: "esther",
    },
    {
      image: brooklyn,
      username: "Brooklyn",
    },
    {
      image: Leslie,
      username: "Leslie",
    },
    {
      image: Jenny,
      username: "Jenny",
    },
    {
      image: Robert,
      username: "Robert",
    },
    {
      image: Cody,
      username: "Cody",
    },
    {
      image: Kristina,
      username: "Kristina",
    },
  ];
  return (
    <div className="timeContainer">
      <div className="timeline-menu">
        <div className="timeline-heading">
          <h2>Your Timeline</h2>
        </div>

       <div className="timelines">
       {friends &&
          friends.map((item, index) => (
            <div className="timeline" key={index}>
              <div className="timeline-card-top">
                <img src={item.image} alt={item.name} />
                <p>{item.username}</p>
              </div>
            </div>
          ))}
       </div>
      </div>
      <RightContent />
    </div>
  );
};
export default TimelineCard;
