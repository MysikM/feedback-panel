import React from 'react';
import './filter-item.scss';

const FilterItem = ({title, category, active, changeCategory}) => {
    return (
        <li className='filter-item'>
            <button className={`filter-item--btn body-xs ${active && 'filter-item--btn__active'}`} onClick={() => changeCategory(category)}>{title}</button>
        </li>
    );
};

export default FilterItem;