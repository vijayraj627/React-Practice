import { logo } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Header = () =>{
    const [loginbtn, setLoginbtn] = useState('Login');
    const user = useContext(UserContext);
    console.log(user.loginInfo) 
    const onlineStatus = useOnlineStatus();

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
                        <li className="mx-8 font-medium hover:text-orange-400">Cart</li>
                        <button className="mx-8 font-medium hover:text-orange-400" onClick={loginFunction}>{loginbtn}</button>
                        <li className="mx-8 font-medium hover:text-orange-400">{user.loginInfo}</li>
                    </ul>
                </div>
        </div>
    )
    
}

export default Header;