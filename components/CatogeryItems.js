import { CDN_URL } from "../utils/constants";
import { useState } from "react";
const CatogeryItems = (props) =>{
    console.log(props);

    const handleClick = () =>{
        props.func();
    }
    return(
         <div className="w-6/12 bg-gray-100 mx-auto my-2 rounded-xl px-2 py-2 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-extrabold text-xl">{props?.items?.title}({props?.items?.itemCards.length})</span>
                    <span>🢃</span>
                </div>
                <div className="p-4">
                    
                    {props.showMenu && props?.items?.itemCards.map((item,i)=>(
                            <div  key={i} className="flex flex-row justify-between">
                                    <div className="flex flex-col m-2 p-2 border-b-4 border-stone-300">
                                    <span className="text-lg font-semibold">{item.card.info.name}</span>
                                    <span className="font-medium">₹{item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                                    <span>★ {item.card.info.ratings.aggregatedRating.rating ? item.card.info.ratings.aggregatedRating.rating : "No Ratings"} ({item.card.info.ratings.aggregatedRating.ratingCountV2 ? item.card.info.ratings.aggregatedRating.ratingCountV2 : 0})</span>
                                    <span className="text-xs m-1">{item.card.info.description}</span>
                                </div>
                                <div className="w-16 h-16">
                                    <img className="w-16 h-16" src= {`${CDN_URL}/${item.card.info.imageId}`} alt="img not found"/>
                                    <span className="bg-black p-1 font-bold text-white text-xs absolute rounded cursor-pointer">ADD</span>
                                </div>
                            </div>
                            
                    ))}
                </div>
            </div> 
    )
}

export default CatogeryItems;