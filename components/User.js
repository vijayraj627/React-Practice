import react from "react";
import {useState} from 'react';

const User = (props)=>{

    const [state] = useState(0);
    console.log(state)
    return(
        <div className="user">
        <h3>value : {state}</h3>
        <h3>Name : {props.name}</h3>
        <h3>Job : {props.job}</h3>
        </div>
    )
}

export default User;