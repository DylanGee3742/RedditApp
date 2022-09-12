import "./home.css";
import { Posts } from "../../features/posts/posts";

export const Home = () => {
    return (
        <div className="home">

            <div className="posts-container">
            <Posts /> 
            </div>

        </div>
    )
}