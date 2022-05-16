import React from 'react';
import './suggestion-empty.scss';
import empty from '../../assets/suggestions/illustration-empty.svg';
import SuggestionAdd from "../SuggestionAdd/SuggestionAdd";

const SuggestionEmpty = () => {
    return (
        <div className='suggestion--empty-list empty-list'>
            <img src={empty} alt="illustration-empty"/>
            <h1 className='empty-list--title'>
                There is no feedback yet.
            </h1>
            <p className='empty-list--description body'>
                Got a suggestion? Found a bug that needs to be squashed?
                We love hearing about new ideas to improve our app.
            </p>
            <SuggestionAdd />
        </div>
    );
};

export default SuggestionEmpty;