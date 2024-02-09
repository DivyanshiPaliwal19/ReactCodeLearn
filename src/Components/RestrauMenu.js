import { useState } from "react";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
// import Shimmer from "./Shimmer";
import  Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestrauMenu = () => {
    // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(null);
//     useEffect(()=>{
//         fetchMenu();
//     },[])
// const fetchMenu = async () => {
//         const fetchData= await fetch(MENU_API+ resId );
//         const json=await fetchData.json();
//         console.log(json);
//         setResInfo(json.data);
//     }
    //110815132
const resInfo=useRestaurantMenu(resId);


 if (resInfo===null) return <Shimmer/>;
 
console.log("resInfo",resInfo);
const {name,costForTwoMessage,cuisines}=resInfo.cards[0].card.card.info;
const {itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
console.log("item",itemCards);
console.log("resInfo",resInfo);

const categories=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
    c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)

console.log(categories);



return (
        <div className="restau-info">
            <h1 className="restau-name"c>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>
            {/* <h3>Menu</h3>
            <ul>
                {itemCards.map(item =>(
                    <li key={item.card.info.id}>{item.card.info.name }- {"Rs"}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>
                ))}
            </ul> */}
            {categories.map((category,index)=> 
            <RestaurantCategory 
            key={category.card.card.name} 
            data={category.card.card}
            showItems={index==showIndex?true:false}
            setShowIndex={()=> setShowIndex(index)}
            />
            )}
        </div>
    )
    
};

export default RestrauMenu;