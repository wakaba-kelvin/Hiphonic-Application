import React from 'react'
import BackGround from "../assets/profile-background.png"
import Avatar from "../assets/avatar.png"
import './Top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          
         <div className="btn">
         <div>
         <button  className='profile-btn'>Edit Profile</button>
         </div>
         </div> 
          {/* <img className="bg-img" src={BackGround} alt="noimage" /> */}
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
    </div>
  );
}

export default Top;