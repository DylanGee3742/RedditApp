import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubreddits } from "../../api/api";
import { selectSubreddits } from "./subredditSlice";



export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, []);

    return (
        <div className = "subreddits">
                <h1>Subreddits</h1>
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id}>
                        {/* Once posts section sorted, link button click to return posts of that sub not reassing window */}
                        <button onClick={() => window.location.assign(`https://www.reddit.com${subreddit.url}`) }>
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