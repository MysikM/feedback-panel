import React from 'react';
import './suggestion-navigations.scss';
import SuggestionSelect from "../SuggestionSelect/SuggestionSelect";
import SuggestionAdd from "../SuggestionAdd/SuggestionAdd";
import SuggestionCount from "../SuggestionCount/SuggestionCount";

const SuggestionNavigations = () => {
    return (
        <div className='suggestion--navigations'>
            <SuggestionCount />
            <SuggestionSelect />
            <SuggestionAdd />
        </div>
    );
};

export default SuggestionNavigations;