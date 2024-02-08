import React from "react";
import NavIcon from "../NavIcon";
import FriendIcon from "../../assets/friend-icon.png";

import "./PostsCard.scss";


const PostsCard = () => {
  return (
      <div className="post-card-head">
        <div className="post-card-left-items">
          <div className="post-card-user">
            <h4>UD</h4>
          </div>
          <div className="post-card-user-desc">
            <h4>UI / UX Designer</h4>
            <p>
              Bandung • <span>7 posts a day</span>
            </p>
          </div>
        </div>
        <NavIcon url={FriendIcon} />
      </div>
  );
};

export default PostsCard;
