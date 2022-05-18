import React from 'react';
import './road-map.scss';
import {Link} from "react-router-dom";
import {roadmapsSectionList} from "../../data/data";
import {useStatusCount} from "../../hooks/useStatusCount";
import {useSelector} from "react-redux";

const RoadMap = () => {
    const {productRequests} = useSelector(state => state.suggestion)
    const {roadMapCount} = useStatusCount(productRequests);
    return (
        <div className='home--roadmaps roadmaps'>
            <div className="roadmaps--section">
                <h3 className="roadmaps--title">
                    RoadMap
                </h3>
                <Link className='body-xs' to='/roadmap' >View</Link>
            </div>
            <div className="roadmaps--list">
                {roadmapsSectionList.slice(1)?.map((item, i) => (
                    <div key={i} className='roadmaps--item'>
                        <div className={`roadmaps--circle ${item.circle}`} />
                        <p className="roadmaps--subtitle body">{item.title}</p>
                        <p className="body roadmaps--count">{roadMapCount ? roadMapCount[i]?.count : 0}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadMap;