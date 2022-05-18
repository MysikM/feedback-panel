import React, {useState} from 'react';
import './reply-comment-form.scss';
import {useDispatch} from "react-redux";
import {addReplyToComment} from "../../store/slices/suggestionSlice";

const ReplyCommentForm = ({postId, commentId, replyingTo}) => {
    const [newReplyContent, setNewReplyComment] = useState('');

    const dispatch = useDispatch();
    const createReply = (content) => {
        const newReply = {
            content,
            replyingTo,
            user: {
                image: "/user-images/image-zena.jpg",
                name: "Zena Kelley",
                username: "velvetround"
            }
        }
        dispatch(addReplyToComment({postId,commentId, newReply}))
        setNewReplyComment('');
    }

    return (
        <div className='reply-comment'>
                <textarea
                    value={newReplyContent}
                    onChange={(e) => setNewReplyComment(e.target.value)}
                    className='body-s input'
                    placeholder='Type your reply here'
                    maxLength={255}
                    spellCheck={false}
                />
            <button className='reply-comment--btn' onClick={() => createReply(newReplyContent)}>Post Reply</button>
        </div>
    );
};

export default ReplyCommentForm;