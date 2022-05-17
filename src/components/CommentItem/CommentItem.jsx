import React, {useState} from 'react';
import './comment-item.scss';
import ReplyCommentForm from "../ReplyCommentForm/ReplyCommentForm";
import ReplyList from "../ReplyList/ReplyList";


const CommentItem = ({content, user, replies}) => {
    const {image, name, username} = user;
    const [isReplyOnComment, setIsReplyOnComment] = useState(false);
    const replyToggle = () => {
        setIsReplyOnComment(!isReplyOnComment);
    }
    return (
        <li className='comment--item'>
            <div className='item--container'>
                <img src={image} alt="avatar"/>
                <div className="comment--user">
                    <h4 className="comment--user-name">
                        {name}
                    </h4>
                    <small className="comment--user-login">
                        @{username}
                    </small>
                    <p className="body-s comment--user-description">
                        {content}
                    </p>
                </div>
                <button className='comment--reply body-xs' onClick={replyToggle}>Reply</button>
            </div>
            <p className="body-s comment--user-description tablet">
                {content}
            </p>
            {isReplyOnComment && (<ReplyCommentForm />)}
            {replies?.length > 0 && (<ReplyList replies={replies} />)}
            {replies?.length > 0 && (<div className='have-replies' />)}
        </li>
    );
};

export default CommentItem;