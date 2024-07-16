import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useParams } from "react-router-dom";
import CatogeryItems from "./CatogeryItems"
import { useState } from "react";
const RestaurantMenu = ()=>{

    const [showIndex, setShowIndex] = useState()

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const { name} = resInfo?.data?.cards[2]?.card?.card?.info || {};
    
    const Catogery = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => (
        c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    // console.log(Catogery)
    

    return(
        <div>
            <div className="p-4 text-slate-950 justify-center flex flex-col items-center">
                <h1 className="font-bold text-xl">{name}</h1>
                <h3 className="font-bold">Rating : {resInfo?.data?.cards[2]?.card?.card?.info.avgRatingString}</h3>
                <h3 className="font-bold">Delivery Time : {resInfo?.data?.cards[2]?.card?.card?.info.sla.slaString}</h3>
                {console.log(Catogery)}
                {Catogery ? (
                Catogery?.map((items,i) => (
                    <CatogeryItems key={i}  
                    items = {items.card.card} 
                    showMenu = {i === showIndex ? true : false}
                    func = {()=>(
                        setShowIndex(i)
                    )}
                    />
                ))
            ) : (
                <p>No categories found</p>
            )}
            </div>
        </div>
    )
}

export default RestaurantMenu;