import React, {useEffect, useState} from 'react';
import ideaIcon from '../../assets/suggestions/icon-suggestions.svg'
import './suggestion-count.scss';
import {useStatusCount} from "../../hooks/useStatusCount";
import {useSelector} from "react-redux";

const SuggestionCount = () => {
    const [suggestionCount, setSuggestionCount] = useState(0);
    const {sortProductRequest} = useSelector(state => state.suggestion);
    const {roadMapCount} = useStatusCount(sortProductRequest);

    useEffect(()=>{
        setSuggestionCount(roadMapCount.find(item => item.title === 'suggestion'));
    },[sortProductRequest])

    return (
        <div className='suggestion--count'>
            <img src={ideaIcon} alt='icon-suggestions' />
            <h3 className='suggestion--title-amount'>
                {suggestionCount?.count || 0} Suggestions
            </h3>
        </div>
    );
};

export default SuggestionCount;