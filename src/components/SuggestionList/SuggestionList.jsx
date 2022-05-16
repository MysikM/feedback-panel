import React, {useEffect} from 'react';
import './suggestion-list.scss';
import SuggestionItem from "../SuggestionItem/SuggestionItem";
import {useDispatch, useSelector} from "react-redux";
import {initialSuggestion} from "../../store/slices/suggestionSlice";
import SuggestionEmpty from "../SuggestionEmpty/SuggestionEmpty";

const SuggestionList = () => {
    const dispatch = useDispatch();
    const {sortProductRequest} = useSelector(state => state.suggestion);
    useEffect(()=>{
        if (sortProductRequest.length === 0) {
            dispatch(initialSuggestion());
        }
    },[]);
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