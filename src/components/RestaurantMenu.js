import { useState, useEffect } from "react";
import { MENU_API} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

 
  if(resInfo === null) return <Shimmer />



  const itemCard = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

  const categories = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card?.["@type"]
    === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

 return (
    <div className="text-center">
        <h1 className="font-bold text-3xl my-10">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
        <p className="font-bold">{resInfo?.cards[0]?.card?.card?.info.cuisines.join(" ,")} - {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
      {
        categories.map((category, index) => (
          <RestaurantCategory data={...category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
          />
        ))
      }
    </div>
 )
};

export default RestaurantMenu;
