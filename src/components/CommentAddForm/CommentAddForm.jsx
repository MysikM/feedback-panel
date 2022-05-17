import React, {useState} from 'react';
import './comment-add-form.scss';

const CommentAddForm = () => {
    const [newComment, setNewComment] = useState('');
    const maxSizeComment = 255;
    const [commentLength, setCommentLength] = useState(maxSizeComment);
    const handleComment = (e) => {
        setNewComment(e.target.value);
        setCommentLength(maxSizeComment - e.target.value.length);
    }
    return (
        <form className='comment-form' onSubmit={(e) => e.preventDefault()}>
            <h3 className='comment-form--title'>Add Comment</h3>
            <textarea
                      value={newComment}
                      onChange={handleComment}
                      className='body-s input'
                      maxLength={255}
                      placeholder='Type your comment here'
            />
            <div className='comment-form--bottom'>
                <small className='comment-form--length body-s'>{commentLength} characters left</small>
                <button className='comment-form--btn'>Post Comment</button>
            </div>
        </form>
    );
};

export default CommentAddForm;