import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../api/api";
import { selectPosts } from "./postsSlice";


export const Posts = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}
