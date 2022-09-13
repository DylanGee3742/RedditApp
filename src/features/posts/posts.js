import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import moment from 'moment';
import "./post.css";


export const Posts = () => {
    const posts = useSelector(selectPosts);


    return (
        <div>
            {posts.map((post) => (
                <li 
                key={post.id}
                className= 'post'>
                    <span>Posted By {post.author}</span>
                    <span>  </span>
                    <span>{moment.unix(post.created_utc).fromNow()}</span>
                    <br></br>
                    <span>{post.title}</span>
                    <br></br>
                    <span>{ post.is_video ? <video height = '150' width = '300' controls >
                        <source src = {post.media.reddit_video.fallback_url} type="video/mp4" className = 'post_media' /> </video>
                     : < img src = {post.thumbnail} className = 'post_media' /> }</span>
                </li>
            ))}
        </div>
    )
}
