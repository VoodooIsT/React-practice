
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRatingString,
}) => {
    return(
        <div className="m-4 p-2 w-[200px] shadow-lg rounded-lg hover:bg-gray-200">
            <img  src={
          CDN_URL + cloudinaryImageId} className="rounded-md" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(' ,')} stars</h4>
            <h4>₹ {costForTwo / 100} For Tow</h4>
            <h4>{areaName}</h4>
            <h4 className="text-yellow-400">{avgRatingString} stars</h4>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label htmlFor="" className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard