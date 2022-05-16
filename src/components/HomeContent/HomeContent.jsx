import React from 'react';
import './home-content.scss';
import SuggestionList from "../SuggestionList/SuggestionList";
import SuggestionNavigations from "../SuggestionNavigations/SuggestionNavigations";

const HomeContent = () => {
    return (
        <div className="home--content">
            <SuggestionNavigations />
            <SuggestionList />
        </div>
    );
};

export default HomeContent;