import React, {useState} from 'react';
import './road-map-item.scss';
import {Link} from "react-router-dom";
import arrowUp from '../../assets/shared/icon-arrow-up.svg';
import commentIcon from '../../assets/shared/icon-comments.svg';
import {useDispatch} from "react-redux";
import {upvoteSuggestion} from "../../store/slices/suggestionSlice";

const RoadMapItem = ({id, title, category, upvotes, upvoted, status, description, commentsCount, borderColor}) => {
    const dispatch = useDispatch();
    const [upvotesCount, setUpvotesCount] = useState(upvotes);
    const [isUpvoted, setIsUpvoted] = useState(upvoted)
    const upvote = (e) => {
        e.stopPropagation();
        dispatch(upvoteSuggestion({id}))
        setUpvotesCount(isUpvoted ? upvotesCount - 2 : upvotesCount + 2);
        setIsUpvoted(!isUpvoted);
    }

    return (
        <article className={`roadmap-item ${borderColor}`}>
            <div className='roadmap-item--category-title'>
                <div className={`roadmap-item--circle ${borderColor}`} />
                <p className="body roadmap-item--title">{status}</p>
            </div>
            <Link className='roadmap-item--info' to={`/feedback/${id}`}>
                <h3>{title}</h3>
                <p className="body">{description}</p>
                <div className='body-xs roadmap-item--category'>{category}</div>
            </Link>
            <div className="roadmap-item--bottom">
                <button className={`body-xs roadmap-item--btn ${isUpvoted && 'roadmap-item--btn__active'}`} onClick={upvote}>
                    <img src={arrowUp} alt="arrow up"/>
                    {upvotesCount}
                </button>
                <div className='roadmap-item--comment' style={{opacity: `${commentsCount > 0 ? '1' : '0.5'}`}}>
                    <img src={commentIcon} alt="comment icon"/>
                    {commentsCount}
                </div>
            </div>
        </article>
    );
};

export default RoadMapItem;