import { getPostComments } from "../../api/api";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import './commentsNew.css';
import moment from 'moment';

export const CommentsNew = (props) => {
    const [ comments, setComments ] = useState([])
    const [ toggleComments, setToggleComments ] = useState(false);
    const dispatch = useDispatch();
    const selectedComments = useSelector(selectComments);
    const { permalink, num_comments } = props;

    const getComments = (permalink) => {
        dispatch(getPostComments(permalink));
        setComments(selectedComments);
        setToggleComments(!toggleComments);

    };


    return (
        <div>
            <button onClick={() => getComments(permalink)}>Comments {num_comments}</button>
            <span className='comment'>{toggleComments ?  <span>{comments.map((comment) => (
                <li key={comment.id}
                className='comment'> 
                <span className='commentTop'>{comment.author} || {moment.unix(comment.created_utc).fromNow()} </span>
                <br></br>
                {comment.body} </li>
            ))}</span> : null }</span>
        </div>
    )
}