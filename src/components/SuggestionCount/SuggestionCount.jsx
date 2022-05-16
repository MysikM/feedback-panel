import React from 'react';
import ideaIcon from '../../assets/suggestions/icon-suggestions.svg'
import './suggestion-count.scss';
import {useStatusCount} from "../../hooks/useStatusCount";

const SuggestionCount = () => {
    const {roadMapCount} = useStatusCount();
    const suggestionCount = roadMapCount.find(item => item.title === 'suggestion');
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