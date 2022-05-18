import React from 'react';
import './road-map-list-category.scss';
import {useSelector} from "react-redux";
import RoadMapItem from "../RoadMapItem/RoadMapItem";

const RoadMapListCategory = ({title, subtitle, borderColor}) => {
    const {productRequests} = useSelector(state => state.suggestion);
    const listItems =  productRequests.filter(el => el.status.toLowerCase() === title.toLowerCase());
    return (
        <div className='roadmap--category-list category-list'>
            <div className='category-list--description'>
                <h3 className='category-list--title'>{title} ({listItems.length})</h3>
                <p className="body category-list--subtitle">{subtitle}</p>
            </div>
            {listItems.map(item => <RoadMapItem key={item.id} {...item} commentsCount={item.comments.length} borderColor={borderColor} /> )}
        </div>
    );
};

export default RoadMapListCategory;