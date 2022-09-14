import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import './posts';
import moment from 'moment';


export const Posts = () => {
    const posts = useSelector(selectPosts);

    return (
        <article className = "post-container">
            <h1>Posts</h1>

            {posts.map((post) => (
                <article 
                key={post.id}
                className= 'indiv-post'>
                    <h4>{moment.unix(post.created_utc).fromNow()}
                    <span> | </span>{post.author}
                    <span> | </span>{post.title}</h4>
                    <span>{ post.is_video ? <video height = '150' width = '300' controls >
                        <source src = {post.media.reddit_video.fallback_url} type="video/mp4" className = 'post_media' /> </video>
                     : < img src = {post.thumbnail} className = 'post_media' /> }</span>
                </article>               
            ))}

        </article>
    )
}