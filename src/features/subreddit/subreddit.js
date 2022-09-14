import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchSubreddits } from "../../api/api";
import { selectSubreddits } from "./subredditSlice";


export const Subreddits = () => {
    const [ selected, setSelected ] = useState('r/popular')
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, []);

    useEffect(() => {
        dispatch(fetchPosts(selected));
    });

    return (
        <div className = "subreddits">
                <h1>Subreddits</h1>
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id}>
                        <button onClick={() => setSelected(subreddit.url) }>
                            <img src = {subreddit.icon_img}
                            alt = "Subreddit Icon"
                            className = "subreddit_icon"
                            style = {{ height: '2em'}}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
        </div>
    );
}