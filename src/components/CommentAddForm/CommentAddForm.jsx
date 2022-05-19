import React, {useState} from 'react';
import './comment-add-form.scss';
import {useDispatch} from "react-redux";
import {addCommentToSuggestion} from "../../store/slices/suggestionSlice";


const CommentAddForm = ({postId}) => {
    const [newCommentContent, setNewCommentContent] = useState('');
    const maxSizeComment = 255;
    const [commentLength, setCommentLength] = useState(maxSizeComment);
    const dispatch = useDispatch();
    const handleComment = (e) => {
        setNewCommentContent(e.target.value);
        setCommentLength(maxSizeComment - e.target.value.length);
    }
    const createComment = (content) => {
        const newComment = {
            id: new Date().getTime(),
            content,
            user: {
                image: "https://lm-product-feedback-app.netlify.app/assets/user-images/image-zena.jpg",
                name: "Zena Kelley",
                username: "velvetround"
            }
        }
        dispatch(addCommentToSuggestion({postId,  newComment}));
        setNewCommentContent('');
    };

    return (
        <form className='comment-form' onSubmit={(e) => e.preventDefault()}>
            <h3 className='comment-form--title'>Add Comment</h3>
            <textarea
                      value={newCommentContent}
                      onChange={handleComment}
                      className='body-s input'
                      maxLength={255}
                      placeholder='Type your comment here'
            />
            <div className='comment-form--bottom'>
                <small className='comment-form--length body-s'>{commentLength} characters left</small>
                <button className='comment-form--btn' onClick={() => createComment(newCommentContent)}>Post Comment</button>
            </div>
        </form>
    );
};

export default CommentAddForm;