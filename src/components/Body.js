import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useEffect, useState } from "react"
import { swiggy_api_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatue from "../utils/useOnlineStatue"
const Body = () => {

    const[restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatue();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
       
    },[])

    const fetchData = async() => {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            // console.log(json);
            // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

            setRestaurantList(
              json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
            );
            setFilteredRestaurantList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            // setFilteredRestaurants(
            //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            //     ?.restaurants
            // );
            console.log(restaurantList)
          } catch (error) {
            console.error(`${error.message}`);
          }
    }

    if(onlineStatus === false){
        return(
            <div>
                <h1>Looks like you're offline!! Please check your internet connection</h1>
            </div>
        )
    }


    if(restaurantList.length === 0) {
        return <Shimmer />
    }
    return(
       <div className="body">
           <div className="filter flex items-center ">
            <div className="mx-10 p-4 ">
                <input type="text" className="border border-solid p-2 rounded-lg border-gray-200 shadow-md  "  value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                } }/>
                <button onClick={() => {
                    console.log(searchText)

                    const filteredRes = restaurantList.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()) );

                    setFilteredRestaurantList(filteredRes)
                }} className="px-4 py-2 bg-slate-900 text-white m-4 rounded-lg">search</button>
            </div>
                <div>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredData = restaurantList.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setRestaurantList(filteredData);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
           </div>
           <div className="flex flex-wrap px-10">
               {
                   filteredRestaurantList.map((restaurant) => (
                       <Link key={restaurant.info.id}  to={"/restaurants/" + restaurant.info.id}>{
                        restaurant.info.promoted ? (
                            <RestaurantCardPromoted {...restaurant.info}/>
                        ) : (<RestaurantCard {...restaurant.info}/>)
                       }</Link>
                   ))
               }
           </div>
       </div>
    )
}

export default Body