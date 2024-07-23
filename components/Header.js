import { logo } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [loginbtn, setLoginbtn] = useState('Login');
    const user = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    const cartCount = useSelector(state => state.cart.items.length);
    const loginFunction = () =>{
        loginbtn === "Login" ? setLoginbtn('Logout') : setLoginbtn('Login')
    }

    
    return(
        <div className="flex justify-between shadow-lg">
                <div>
                    <Link to="/"><img className="w-28" src={logo} alt="Image not found"/></Link>
                </div>

                <div className="nav-items">
                    <ul className="flex p-8">
                        <li className="mx-8 font-medium">
                            Online Status : {onlineStatus ? '🟢' : '🔴'}
                        </li>
                        <li className="mx-8 font-medium hover:text-orange-400">
                            <Link to = "/">Home</Link>
                        </li>
                        <li className="mx-8 font-medium hover:text-orange-400">
                            <Link to = "/About">About</Link>
                        </li>
                        <li className="mx-8 font-medium hover:text-orange-400">
                            <Link to = "/Contact">Contact</Link>
                        </li>
                        <li className="mx-8 font-medium hover:text-orange-400 cursor-pointer">
                            <Link to = "/Cart">Cart - ({cartCount}Items)</Link>
                        </li>
                        {/* <li className="mx-8 font-medium hover:text-orange-400 cursor-pointer">
                            <Link to = "/showCartItems">Cart<span className="font-bold text-orange-400">({cartCount}) </span></Link> </li> */}

                        <button className="mx-8 font-medium hover:text-orange-400" onClick={loginFunction}>{loginbtn}</button>
                        <li className="mx-8 font-medium hover:text-orange-400">{user.loginInfo}</li>
                    </ul>
                </div>
        </div>
    )
    
}

export default Header;