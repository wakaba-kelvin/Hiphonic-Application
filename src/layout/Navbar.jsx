import "./Navbar.scss";
import LogoIcon from "../assets/logo.png";
import Responsive from "../assets/responsive.png";
import NavIcon from "../components/NavIcon";
import ActiveNotification from "../assets/active-notification.png";
import Profile from "../assets/profile-image.png";
import Chevron from "../assets/chevron-down.png";
import Message from "../assets/message-circle.png";
import SearchForm from "../components/SearchForm";
import Notifications from "../components/notifications/Notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const [isNotificationVisible, setNotificationVisibility] = useState(false);
    const[showProfile, setShowProfile]=useState(false)
    const navigate = useNavigate();
  
    const handleProfile=()=>{
        setShowProfile(true)
        navigate("/profile");
        console.log("navigation");
    }
    
    const toggleNotification = () => {
        // console.log("Everything is good");
      setNotificationVisibility(!isNotificationVisible);
    };
  
  return (
    <>
    <div className="nav-top">
    <div className="navbar">
      <div className="nav-logo">
        <img src={Responsive} alt={Responsive} />
        <img src={LogoIcon} alt={LogoIcon} />
      </div>
      <div className="right-nav">
        <div className="nav-input">
          <SearchForm />
        </div>
        <div>
          <div className="nav-icons">
            <NavIcon url={Message} />
            <NavIcon url={ActiveNotification}  onClick={toggleNotification} />
            <img className="profile" onClick={handleProfile} width={50} src={Profile} alt="profile" />
            <NavIcon url={Chevron} />
          </div>
        </div>
      </div>
      
    </div>
    </div>
    {isNotificationVisible && (
        <div className="notifications-main">
          <Notifications /> 
        </div>
      )}
    </>
  );
};

export default Navbar;


