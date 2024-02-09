import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
    const {loggedIn}=useContext(UserContext);
    return (
        <div>
            <h1>About page</h1>
            <p>Hey!!!{loggedIn}</p>
        </div>
    )
}

export default About;