import { FaRedditAlien } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import "./header.css"; 

export const Header = () => {
    return (
        <div className="header">
                <FaRedditAlien className="logo" />
                <span className="title">Reddit React</span>

            <div className="search">
                <input className="searchBar"></input>
                <span><button className="search-button"><GoSearch className="search-icon"/></button></span>
            </div>


    </div>

    )
}