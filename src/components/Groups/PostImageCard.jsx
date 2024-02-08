import React from "react";
import NavIcon from "../NavIcon";
import FriendIcon from "../../assets/friend-icon.png";
import Button from "../shared/Button";

import "./PostImageCard.scss";

const PostImageCard = ({PostImage}) => {
  return (
    <div className="group-post-card">

      <div className="post-card-image">
        <img src={PostImage} alt="post Image" />
      </div>
      
    </div>
  );
};

export default PostImageCard;
