import React from 'react';
import './filter-category.scss';
import FilterItem from "../FIlterItem/FilterItem";
import {homeNavigations} from "../../data/data";

const FilterCategory = () => {
    return (
        <ul className='home--category'>
            {homeNavigations.map((item, i) => (<FilterItem key={i} {...item} />))}
        </ul>
    );
};

export default FilterCategory;