import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body from "./Body";

const App = () =>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);