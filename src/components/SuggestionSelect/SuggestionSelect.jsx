import React, {useState} from 'react';
import './suggestion-select.scss';
import {suggestionSelect} from "../../data/data";
import menuArrow from '../../assets/shared/icon-arrow-up.svg';
import selectActive from '../../assets/shared/icon-check.svg';

const SuggestionSelect = () => {
    const [sortItem, setSortItem] = useState(suggestionSelect[0].title);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    const menuHandle = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    }
    const selectSortItem = (name) => {
        setSortItem(name);
        setIsSortMenuOpen(false);
    }
    return (
        <div className='suggestion--sort-select'>
            <button className={`suggestion--sort-title ${isSortMenuOpen && 'suggestion--sort-title__active'}`} onClick={menuHandle}>
                Sort by:
                <span> {sortItem}</span>
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
                            <img className={`suggestion--sort-icon ${sortItem === title && 'suggestion--sort-icon__select'}`} src={selectActive} alt='icon selected'/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SuggestionSelect;