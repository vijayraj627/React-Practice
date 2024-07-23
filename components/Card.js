import { CDN_URL } from "../utils/constants";
const Card = (props) =>{
    return(
        <div className="p-10 m-8 bg-slate-300 min-w-64 max-h-96 hover:bg-slate-400">
                <img className="h-56 w-56 ml-12" src={`${CDN_URL}${props.menuData.info.cloudinaryImageId}`} alt="Restaurant" />
                <div className="max-w-64 ml-12">
                    <p>{props.menuData.info.cuisines.join(", ")}</p>
                    <p>{props.menuData.info.areaName}</p>
                    <p>{props.menuData.info.avgRating}</p>
                </div>
                
            </div>
    )
}
export const RestaurantOpenClose = (Card) =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-8 p-2">Open</label>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card;