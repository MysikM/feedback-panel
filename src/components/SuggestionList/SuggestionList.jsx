import React from 'react';
import './suggestion-list.scss';
import SuggestionItem from "../SuggestionItem/SuggestionItem";
import {useSelector} from "react-redux";
import SuggestionEmpty from "../SuggestionEmpty/SuggestionEmpty";

const SuggestionList = () => {
    const {sortProductRequest} = useSelector(state => state.suggestion);
    return (
        <section className='suggestion--list'>
            {
               sortProductRequest.length > 0
                   ? sortProductRequest.map((item) => <SuggestionItem key={item.id} {...item} />)
                   : (<SuggestionEmpty />)
            }
        </section>
    );
};

export default SuggestionList;