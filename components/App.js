import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body from "./Body";
import About from "./About"
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../utils/userContext";
import { useEffect} from "react";
const App = () =>{


    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            user : "Vijayraj"
        }
        setUserName(data.user)
    },[]);

    return(
        <UserContext.Provider value = {{loginInfo : userName, setUserName}}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement : <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);