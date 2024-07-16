import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        console.log(props);

        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <div className="user">
            <h3>value : {this.state.count}</h3>
            <h3>Name : {this.props.name}</h3>
            <h3>Job : {this.props.job}</h3>
            </div>
        )
        
    }
}

export default UserClass;