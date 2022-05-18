import React from 'react';
import './roadmap-toggle.scss';
import {roadmapsSectionList} from "../../data/data";

const RoadMapToggle = ({activeCategory, setActiveCategory}) => {
    return (
        <div className='roadmap-toggle'>
            {roadmapsSectionList.slice(1).map(item => (
                <div key={item.title} className={`roadmap-toggle--item ${activeCategory === item.title && `${item.circle}`}`} onClick={() => setActiveCategory(item.title)}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default RoadMapToggle;