import React from 'react';
import './filter-item.scss';

const FilterItem = ({title, category}) => {
    return (
        <li className='filter-item'>
            <button className='filter-item--btn body-xs'>{title}</button>
        </li>
    );
};

export default FilterItem;