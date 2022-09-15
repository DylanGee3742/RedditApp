import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectPosts, selectPostPermalink } from "./postsSlice";
import './posts.css';
import moment from 'moment';
import { BsFillArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import { fetchComments } from "../../api/api";
import { selectComments } from "../comments/commentsSlice";


export const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts);
    const permalinks = useSelector(selectPostPermalink)
    const comments = useSelector(selectComments);
    console.log(posts)
  
    useEffect(() => {
        dispatch(fetchComments(permalinks))
    }, []);

    return (
        <div className = "post-container" >
            {posts.map((post) => (
                <article 
                key={post.id}
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
                </article>               
            ))}
        </div>
    )
}