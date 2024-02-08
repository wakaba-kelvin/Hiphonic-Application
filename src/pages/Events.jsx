import Bottom from "../components/Bottom";
import Top from "../components/Top";
import EventCard from "../components/event/EventCard";
import "./Events.scss";

const Events = () => {
  return (
    <div className="main-right-content">
      <div className="middle-content">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
