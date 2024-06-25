import React from "react";
import ReactDOM from "react-dom/client"
{/* <div id="parent">
    <div id="child">
        <h1>Hello React World</h1>
    </div>
</div> */}

// const heading = React.createElement("h1",
//      {id : "heading"},
//       "Hello React World");
const heading = React.createElement("div",
    {id : "parent"},
    [React.createElement("div",
        {id : "child"},
        [React.createElement("h1",
            {id : "heading"},
             "Hello React World")],
            [React.createElement("h2",
                {id : "heading2"},
                 "Hello React World2")])],
                [
                    React.createElement("div",
                        {id : "child2"},
                        [React.createElement("h1",
                            {id : "heading"},
                             "Hello React World")],
                            [React.createElement("h2",
                                {id : "heading2"},
                                 "Hello React World2")])
                ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);