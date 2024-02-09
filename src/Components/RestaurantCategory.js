import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {title}=props.data;
    const {showItems,setShowIndex}=props;
    // const [showItems,setShowItems]=useState(false);
    const handleClick = () => {               //do state lifting to restauMenu
        console.log("arrow clicked");
        setShowIndex();
    }
    return (
    <div>
        <div className="Restaurant-category">
        <div className="res-category-name">
       <b><span>{title} ({props.data.itemCards.length})</span></b> 
        <span className="arrow" onClick={handleClick}>⬇️</span>
        </div>
        {showItems && <ItemList items={props.data.itemCards}/>}
        </div>
    </div>
    )
}

export default RestaurantCategory;