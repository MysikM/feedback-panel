import React, {useEffect, useState} from 'react';
import './suggestion-select.scss';
import {suggestionSelect} from "../../data/data";
import menuArrow from '../../assets/shared/icon-arrow-up.svg';
import selectActive from '../../assets/shared/icon-check.svg';
import {useDispatch} from "react-redux";
import {
    ascCommentSuggestion,
    ascUpvotesSuggestion,
    desCommentSuggestion,
    descUpvotesSuggestion
} from "../../store/slices/suggestionSlice";

const SuggestionSelect = () => {
    const [sortItem, setSortItem] = useState(suggestionSelect[0]);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const menuHandle = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    }
    const selectSortItem = (name) => {
        setSortItem(suggestionSelect.find(item => item.title === name));
        setIsSortMenuOpen(false);
    }

    useEffect(()=>{
        if(sortItem.sort === 'upvotes asc'){
            dispatch(ascUpvotesSuggestion());
        }
        if(sortItem.sort === 'upvotes desc'){
            dispatch(descUpvotesSuggestion());
        }
        if(sortItem.sort === 'comment asc'){
            dispatch(ascCommentSuggestion());
        }
        if(sortItem.sort === 'comment desc'){
            dispatch(desCommentSuggestion());
        }
    },[sortItem]);

    return (
        <div className='suggestion--sort-select'>
            <button className={`suggestion--sort-title ${isSortMenuOpen && 'suggestion--sort-title__active'}`} onClick={menuHandle}>
                Sort by:
                <span> {sortItem.title}</span>
                <img className={`suggestion--sort-arrow ${isSortMenuOpen && 'suggestion--sort-arrow__open'}`} src={menuArrow} alt="menu arrow"/>
            </button>
            <ul className={`suggestion--sort-list ${isSortMenuOpen && 'suggestion--sort-list__open'}`}>
                {suggestionSelect.map((selectItem,i) => {
                    const {title, sort} = selectItem;
                    return (
                        <li className='suggestion--sort-item' key={i} onClick={()=>selectSortItem(title)}>
                            <button className='body'>
                                {title}
                            </button>
                            <img className={`suggestion--sort-icon ${sortItem.title === title && 'suggestion--sort-icon__select'}`} src={selectActive} alt='icon selected'/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SuggestionSelect;