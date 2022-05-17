import React from 'react';
import './reply-list.scss';
import ReplyOnCommentItem from "../ReplyOnCommentItem/ReplyOnCommentItem";

const ReplyList = ({replies}) => {
    return (
        <div className='reply-list comment--reply-list'>
            {replies.map((reply, i) => {
                return <ReplyOnCommentItem key={i} {...reply} />
            })}
        </div>
    );
};

export default ReplyList;
