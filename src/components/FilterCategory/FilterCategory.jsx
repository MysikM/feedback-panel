import React, {useMemo, useState} from 'react';
import './filter-category.scss';
import FilterItem from "../FIlterItem/FilterItem";
import {homeNavigations} from "../../data/data";
import {useDispatch, useSelector} from "react-redux";
import {sortSuggestion} from "../../store/slices/suggestionSlice";

const FilterCategory = () => {
    const dispatch = useDispatch();
    const {productRequests} = useSelector(state => state.suggestion);
    const [pickCategory, setPickCategory] = useState('all');
    const allCategory = productRequests.reduce((res, el) => {
            if(!res.includes(el.category)) {
                res.push(el.category);
            }
            return res
        }, [])
    const changeCategory = (title) => {
        if(title === 'all') {
            dispatch(sortSuggestion({category: allCategory}))
        } else {
            setPickCategory(title);
            dispatch(sortSuggestion({category: title}))
        }

    }
    return (
        <ul className='home--category'>
            {homeNavigations.map((item, i) => (<FilterItem key={i} changeCategory={changeCategory} active={item.category === pickCategory} {...item} />))}
        </ul>
    );
};

export default FilterCategory;