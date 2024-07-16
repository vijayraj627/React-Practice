import { useEffect, useState } from "react"; 
import { RestaurantMenu_API_URL } from "../utils/constants";
const useRestaurantMenu = (resId) =>{

    const[restMenuData, setRestMenuData] = useState();
    
    useEffect(()=>{
        fetchAPI();
    },[])

    const fetchAPI = async () =>{
        const data = await fetch(RestaurantMenu_API_URL + resId);
        const json = await data.json();
        setRestMenuData(json)
    }
    return restMenuData;
}

export default useRestaurantMenu;