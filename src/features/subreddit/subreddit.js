import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits } from "./subredditSlice";
import { fetchSubreddits} from "./subredditSlice";


export const Subreddits = () => {
    const { loaded, setLoaded } = useState(false)
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [])

    return (
        <div className = "subreddits">
                <h1>Subreddits</h1>
                {subreddits.map((subreddit, i) => {
                    return subreddit.subreddit
                })}
            
        </div>
    );
}