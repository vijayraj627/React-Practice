import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div className="aboutUs">
            <h1>About Us</h1>
            <User name = {"Vijayraj"}
                  job = {"Front End Developer"}
            />
            <UserClass name = {"Vijayraj"}
                  job = {"Front End Developer"}
            />
        </div>
    )
}

export default About;