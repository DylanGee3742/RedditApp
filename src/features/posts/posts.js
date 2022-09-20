import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./postsSlice";
import './posts.css';
import moment from 'moment';
import { BsFillArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import { CommentsNew } from "../comments/commentsNew";

export const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts);


    return (
        <div className = "post-container" >
            {posts.map((post, index) => (
                <article 
                key={index}
                className= 'singlepost'>
                    <button><BsFillArrowUpSquareFill />{post.ups}</button>
                    <div className='postcontent'>
                    <h4>{moment.unix(post.created_utc).fromNow()}
                    <span> | </span>{post.author}
                    <span> | </span>{post.title}</h4>
                     <span>{post.thumbnail.includes('https')  ? <span className='postmedia'>{ post.is_video ? <video height = '150' width = '300' controls >
                        <source src = {post.media.reddit_video.fallback_url} type="video/mp4" className = 'post_media' /> </video>
                     : < img src = {post.thumbnail } height = '150' width = '300' className = 'post_media' /> }</span> : null }   </span>
                     <br></br>
                    </div>
                     <button><BsArrowDownSquareFill />{post.downs}</button>
                     <CommentsNew num_comments = {post.num_comments} permalink = {post.permalink} index={index} />
                </article>               
            ))}
        </div>
    )
}