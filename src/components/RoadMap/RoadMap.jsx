import React, {useMemo} from 'react';
import './road-map.scss';
import {Link} from "react-router-dom";
import {roadmapsSectionList} from "../../data/data";
import {useStatusCount} from "../../hooks/useStatusCount";

const RoadMap = () => {
    const {roadMapCount} = useStatusCount();
    return (
        <div className='home--roadmaps roadmaps'>
            <div className="roadmaps--section">
                <h3 className="roadmaps--title">
                    RoadMap
                </h3>
                <Link className='body-xs' to='/roadmap' >View</Link>
            </div>
            <div className="roadmaps--list">
                {roadmapsSectionList?.map((item, i) => (
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