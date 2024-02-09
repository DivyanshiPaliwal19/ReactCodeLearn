import { API_IMG } from "../utils/constants";

const ItemList = (props) => {
    // const {name}=items.info.name;
    console.log("props",props.items);
    const {items}=props;
    // const {name,id,price,defaultPrice,description,
    //     imageId}=items.card.info;
    return (
    <div>
        {items.map((item)=> (
        <div key={item.card.info.id} className="list-contanier">
              <div>  <img className="item-image" src={API_IMG+item.card.info.imageId} alt="item-pic"/>
              <button className="item-add-btn">Add +</button>
              </div>
            <div>
            <div className="list-info">
            <span>{item.card.info.name}</span>
            <span>-{item.card.info.defaultPrice/100 || item.card.info.price/100 } Rs</span>
            <i><p>{item.card.info.description}</p></i>
            </div>
           </div>
        </div>
        
        ))
       }
    </div>
    )
}

export default ItemList;