import React from 'react';
import style from './comments.module.css';
import { IComment } from "@/database/blogSchema";

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){

    const datetime = new Date(time)

	return datetime.toUTCString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div className = {style.div}>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;