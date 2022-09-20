import { FaRedditAlien } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import "./header.css"; 
import { setSearchTerm } from "../../features/searchTerm/searchTermSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectSearchTerm } from "../../features/searchTerm/searchTermSlice";
import { fetchSearchTermPosts } from "../../api/api";

export const Header = () => {
    const [searchTermLocal, setSearchTermLocal ] = useState('');
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value)
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        setSearchTermLocal(searchTermLocal);
        dispatch(fetchSearchTermPosts(searchTermLocal))
    }

    return (
        <div className="header">
                <FaRedditAlien className="logo" />
                <span className="title">Reddit React</span>

            <form className='search' onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                    />
                <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                    <GoSearch />
                </button>
            </form>
    </div>

    )
}