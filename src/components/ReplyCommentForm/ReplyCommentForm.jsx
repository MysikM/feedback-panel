import React from 'react';
import './reply-comment-form.scss';

const ReplyCommentForm = () => {
    return (
        <div className='reply-comment'>
                <textarea
                    className='body-s input'
                    placeholder='Type your reply here'
                    maxLength={255}
                    spellCheck={false}
                />
            <button className='reply-comment--btn'>Post Reply</button>
        </div>
    );
};

export default ReplyCommentForm;