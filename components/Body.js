import Card, {RestaurantOpenClose} from "./Card";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext";

const Body = () => {

    const [searchItem, setSearchItem] = useState("");
    const [menuItems, setMenuItems] = useState([]);
    const [filterItems, setFilteredItems] = useState([]);
    const onlineStatus = useOnlineStatus();
    const RestaurantsOpen = RestaurantOpenClose(Card);
    const {loginInfo, setUserName} = useContext(UserContext);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json =await  data.json();
        setMenuItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
        console.log(json)
    }

    if(onlineStatus === false){
        return <h1>Your Internet connection is offline</h1>
    }
    return (
        <div className="m-4">
            <div className="inline-block m-4">
                <input type="text" className="bg-slate-300 p-2" value={searchItem} placeholder="Please Search Your Food" onChange={(e)=>
                    {setSearchItem(e.target.value)}
                    }/>
                <button className="p-2 bg-orange-400 hover:bg-orange-500" onClick={()=>{
                   let searchFilter =  menuItems.filter((item)=>
                        (item.info.cuisines.includes(searchItem))
                    )
                    console.log("searchFilter",searchFilter)
                    setFilteredItems(searchFilter)
                }}>submit</button>

            </div>
            <button className="p-2 bg-orange-400 hover:bg-orange-500" onClick={()=>{
               let filteredList=  menuItems.filter((item)=>
                    
                    (item.info.avgRating >4.2)
            )
            setFilteredItems(filteredList)
            }}>
                Top Rated Restaurants
                </button>

                <label className="ml-10">Enter User : </label>
                <input type="text" className="bg-slate-300 p-2" value={loginInfo} onChange={(e)=>setUserName(e.target.value)}/>
               
                <div className="flex flex-wrap flex-row">
                    
                {filterItems.map((item) => (
                    <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
                    {item.info.isOpen ? (
                        <RestaurantsOpen menuData={item} />
                    ) : (
                        <Card menuData={item} />
                    )}
                    </Link>
                ))}
                </div>

        </div>
    );
  };

  export default Body;