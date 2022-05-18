import React from 'react';
import './reply-list.scss';
import ReplyOnCommentItem from "../ReplyOnCommentItem/ReplyOnCommentItem";

const ReplyList = ({replies, postId, commentId}) => {
    return (
        <div className='reply-list comment--reply-list'>
            {replies.map((reply, i) => {
                return <ReplyOnCommentItem  postId={postId} commentId={commentId}key={i} {...reply} />
            })}
        </div>
    );
};

export default ReplyList;
