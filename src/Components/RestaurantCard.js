import { useContext } from "react";
import { API_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // const {resData} = props;
        const {cuisines,name,cloudinaryImageId,avgRating} = props.resData.info;
        const {loggedIn}=useContext(UserContext);
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src={API_IMG +
            cloudinaryImageId}
            />
            <h3>{name}</h3>
            <i>{cuisines.join(",")}</i>
            <h3>{avgRating}</h3>
            <h3>{props.resData.info.sla.deliveryTime} minutes</h3>
            <h5>{loggedIn}</h5>
        </div>
    )
}

export const withRestaurantPromoted = (RestaurantCard) =>{
 return (props) => {
    return (
        <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    )
 }
}

export default RestaurantCard;