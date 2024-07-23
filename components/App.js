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
import store from "../utils/store";
import { Provider } from "react-redux";
import { useEffect} from "react";
import ShowCartItems from "./ShowCartItems";
const App = () =>{


    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            user : "Vijayraj"
        }
        setUserName(data.user)
    },[]);

    return(
        <Provider store={store}>
        <UserContext.Provider value = {{loginInfo : userName, setUserName}}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path : "/cart",
                element : <ShowCartItems/>
            }
        ],
        errorElement : <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);