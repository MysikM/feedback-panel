import React from 'react';
import './suggestion-item.scss';
import arrow from '../../assets/shared/icon-arrow-up.svg';
import commentIcon from '../../assets/shared/icon-comments.svg';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {upvoteSuggestion} from "../../store/slices/suggestionSlice";

const SuggestionItem = ({id, title, category, upvotes, upvoted, description, comments}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const upvote = (e) => {
        e.stopPropagation();
        dispatch(upvoteSuggestion({id}))
    }
    return (
        <article className='suggestion--item suggestion-item' onClick={() => navigate(`/feedback/${id}`)}>
            <button className={`suggestion-item--upvote ${upvoted && 'suggestion-item--upvote__active'}`} onClick={upvote}>
                <img src={arrow} alt="arrow"/>
                <span className="body-xs">{upvotes}</span>
            </button>
            <div className='suggestion-item--content'>
                <h3 className='suggestion-item--title'>
                    {title}
                </h3>
                <p className="body suggestion-item--description">
                    {description}
                </p>
                <div className="suggestion-item--category body-xs">
                    {category}
                </div>
            </div>
            <div className="suggestion-item--comment">
                <img src={commentIcon} alt="comment icon"/>
                <span className='body'>{comments?.length}</span>
            </div>
        </article>
    );
};

export default SuggestionItem;