import React, {useState} from 'react';
import './reply-item.scss';
import ReplyCommentForm from "../ReplyCommentForm/ReplyCommentForm";

const ReplyOnCommentItem = ({content, replyingTo, user: {image, name, username}}) => {
    const [isReplyOnComment, setIsReplyOnComment] = useState(false);
    const replyToggle = () => setIsReplyOnComment(!isReplyOnComment);
    return (
            <div className='item--container reply-on-comment'>
                <div className='item--container' >
                    <img src={image} alt="avatar"/>
                    <div className="comment--user">
                        <h4 className="comment--user-name">
                            {name}
                        </h4>
                        <small className="comment--user-login">
                            @{username}
                        </small>
                        <p className="body-s comment--user-description">
                            <span className='reply-on-comment--replyingTo'>@{replyingTo} </span>{content}
                        </p>
                    </div>
                    <button className='comment--reply body-xs' onClick={replyToggle}>Reply</button>
                </div>
                {isReplyOnComment && (<ReplyCommentForm />)}
            </div>
    );
};

export default ReplyOnCommentItem;