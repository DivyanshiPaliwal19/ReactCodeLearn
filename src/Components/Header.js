import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReactName,setbtnReactName]=useState("LOG IN");
  const onlineStatus=useOnlineStatus();

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
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                   btnReactName==="LOG IN"?setbtnReactName("LOG OUT"):setbtnReactName("LOG IN")
                }}>{btnReactName}</button>
            </ul>
           </div>
        
    </div>
    )
};

export default Header;