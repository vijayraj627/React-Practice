import Card from "./Card";
import { useState } from "react";
import resData from "../utils/config";

const Body = () => {
    const [menuItems, setMenuItems] = useState(resData);
    return (
        <>
            <button className="btn-topStar" onClick={()=>{
               filteredList =  menuItems.filter((item)=>(
                    item.rating>4
                ))
                setMenuItems(filteredList)
            }}>
                Top Rated Restaurants
                </button>
                <div className="body">
                    {
                        menuItems.map((item,index)=>
                            (<Card  key={index} menuData = {item}/>)
                        )
                    }
                </div>
        </>
    );
  };

  export default Body;