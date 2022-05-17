import React from 'react';
import './comment-list.scss';
import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({count, comments}) => {
    return (
        <div className='detail--comments comments'>
           <h3 className="comments--title">
               {count || 0} comments
           </h3>
            <ul className='comments--list'>
                {comments.map((item) => <CommentItem key={item.id} {...item} />)}
            </ul>
        </div>
    );
};

export default CommentList;