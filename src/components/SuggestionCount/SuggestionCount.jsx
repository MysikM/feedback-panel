import React from 'react';
import ideaIcon from '../../assets/suggestions/icon-suggestions.svg'
import './suggestion-count.scss';

const SuggestionCount = () => {
    return (
        <div className='suggestion--count'>
            <img src={ideaIcon} alt='icon-suggestions' />
            <h3 className='suggestion--title-amount'>
                0 Suggestions
            </h3>
        </div>
    );
};

export default SuggestionCount;