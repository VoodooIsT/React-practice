import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch  = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return(     
        <div>
            <ul>
                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex gap-x-10">
                        <img src={CDN_URL + item.card.info.imageId}  className="w-3/12 shadow-lg rounded-lg relative"/>
                        <div className="absolute " >
                            <button className="p-2 bg-white shadow-lg  mx-16 " onClick={() =>
                                handleAddItem(item)
                            }> Add + </button>
                        </div>
                    
                    
                        <div className="w-9/12">
                            <div className="flex flex-col py-2">
                                <span className="">{item.card.info.name}</span>
                                {" "}
                                <span>₹ {item.card.info.price/100}</span>
                            </div>
                            <p className="text-sm font-light">
                            {item.card.info.description}
                            </p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ItemList