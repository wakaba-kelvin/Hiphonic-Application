import "./RightBar.scss"
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Groups";
import Contacts from "../components/Contacts";
import Top from "../components/Top";
import Bottom from "../components/Bottom";

const RightBar=()=>{
  return (
    <div className="RightContent">
     
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <ShortCuts />
        </div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default RightBar;