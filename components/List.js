import { CDN_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItem} from "../utils/CartSlice";

export default List = (props)=>{
    const data = props.item;
    const dispatch = useDispatch();

    const handleAddItem = (data) =>{
        dispatch(addItem(data))
    }
    return(
        <div className="flex flex-row justify-between">
                                    <div className="flex flex-col m-2 p-2 border-b-4 border-stone-300">
                                    <span className="text-lg font-semibold">{props.item.card.info.name}</span>
                                    <span className="font-medium">₹{props.item.card.info.price/100 ? props.item.card.info.price/100 : props.item.card.info.defaultPrice/100}</span>
                                    <span>★ {props.item.card.info.ratings.aggregatedRating.rating ? props.item.card.info.ratings.aggregatedRating.rating : "No Ratings"} ({props.item.card.info.ratings.aggregatedRating.ratingCountV2 ? props.item.card.info.ratings.aggregatedRating.ratingCountV2 : 0})</span>
                                    <span className="text-xs m-1">{props.item.card.info.description}</span>
                                </div>
                                <div className="w-16 h-16">
                                    <img className="w-16 h-16" src= {`${CDN_URL}/${props.item.card.info.imageId}`} alt="img not found"/>
                                    <span className="bg-black p-1 font-bold text-white text-xs rounded cursor-pointer" onClick={()=>handleAddItem(data)}>ADD+</span>
                                </div>
        </div>
    )
}