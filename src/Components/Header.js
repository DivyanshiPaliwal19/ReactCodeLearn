import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnReactName,setbtnReactName]=useState("LOG IN");
  const onlineStatus=useOnlineStatus();
  const {loggedIn}=useContext(UserContext);
 

return(
    <div className="header">
        <div className="logo-container">
           <img src={LOGO_LINK} alt="logo" className="logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Status:{onlineStatus?"online":"offline"}</li>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li>{loggedIn}</li>
                <button className="login-btn" onClick={() => {
                   btnReactName==="LOG IN"?setbtnReactName("LOG OUT"):setbtnReactName("LOG IN")
                }}>{btnReactName}</button>
            </ul>
           </div>
        
    </div>
    )
};

export default Header;