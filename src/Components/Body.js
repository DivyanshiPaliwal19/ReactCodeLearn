import { useState ,useEffect} from "react";
import {Link} from "react-router-dom";
import RestaurantCard,{withRestaurantPromoted} from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";

const Body = () => {
    const [RestaurantList,setRestaurantList] = useState([]);

    const [filterRestaurant,setFilterRestaurant]=useState([]);

    const withRestaurantPromotedCard=withRestaurantPromoted(RestaurantCard);

    useEffect(()=> {
        getData();
    },[]);

async function getData(){
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8225942&lng=75.8659493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const json=await data.json();
   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   //setfiletered bi or setrestaulist bi
   setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   setFilterRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   
   
};
    const [SearchText,setSearchText]= useState(" ");
    const onlineStatus= useOnlineStatus();

    if (onlineStatus===false) return <h1>Error,check your connection</h1>;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=> {
                    let filteredList=RestaurantList.filter(
                    (res) => res.info.avgRating>4
                    );
                    setFilterRestaurant(filteredList);
                }}>Get Top Rated Names</button>
                <input type="text" className="input-text" value={SearchText}
                onChange={(e)=> {
                    setSearchText(e.target.value);
                    console.log("text enter");
                }}/>
                <button className="search-btn"
                 onClick={()=> {
                    console.log(SearchText);
                    let s=SearchText.toLowerCase();
                    const filteredSearchList=RestaurantList.filter((res) => 
                        res.info.name.toLowerCase().includes(s)
                    );
                console.log(filteredSearchList);
                setFilterRestaurant(filteredSearchList);
                }}>Search</button>
            </div>
            <div className="res-container">
               { filterRestaurant.map((restau) => 
               (
               <Link key={restau.info.id} to={"/res/"+ restau.info.id}>
                {restau.info.promoted? ( <withRestaurantPromotedCard resData={restau}/>):(<RestaurantCard  resData={restau}/>)}
                </Link>
               )
               )}
            </div>
        </div>
    )
}

export default Body;