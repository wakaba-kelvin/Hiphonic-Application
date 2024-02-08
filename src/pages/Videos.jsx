import GroupVideos from "../components/videos/GroupVideos";
import SingleVideo from "../components/videos/SingleVideo";
import "./Videos.scss";

const Videos = () => {
  return (
    <div className="main-right-content">
      <div className="middle-content">
        <div className="top">
          <GroupVideos />
        </div>
        <div className="bottom">
          <SingleVideo/>
        </div>
      </div>
    </div>
  );
};

export default Videos;
