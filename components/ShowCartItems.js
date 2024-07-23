import { useSelector } from "react-redux";
import List from "./List";
import { useDispatch } from 'react-redux';
import { clearItem } from "../utils/CartSlice";

const ShowCartItems = () =>{
    console.log("---")
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const clearCart = () =>{
        dispatch(clearItem())
    }
    return(
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-3xl">Cart</h1>
            <button  className="p-2 m-4 bg-orange-400 hover:bg-orange-500 rounded" onClick={clearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className="font-bold text-3xl">No items found....</h1>}
            <div className="w-3/6 m-auto">
            {cartItems.map((item,i)=>(
                <List key = {i} item = {item}/>
            ))}
            </div>
            

        </div>
    )
}

export default ShowCartItems;