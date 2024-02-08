import Bottom from '../components/Bottom';
import Top from '../components/Top';
import './Profile.scss';
import RightBar from '../layout/RightBar';
import Notifications from '../components/notifications/Notifications';


const Profile=()=>{
    return (
      <>
        <div className="prof-right-content">
          <div className="prof-content">
          <div className="top">
            <Top/>
          </div>
          <div className="bottom">
            <Bottom/>
          </div>
          </div>            
        </div>
      </>

    )
};

export default Profile;

