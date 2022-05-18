import React from 'react';
import './road-map.scss'
import RoadMapHeader from "../../components/RoadMapHeader/RoadMapHeader";
import RoadMapListCategory from "../../components/RoadMapListCategory/RoadMapListCategory";
import {roadmapsSectionList} from "../../data/data";

const RoadMap = () => {
    return (
        <section className='roadmap'>
            <div className="roadmap--container container">
                <RoadMapHeader />
                <div className='roadmap--section'>
                    {roadmapsSectionList.slice(1).map(item => <RoadMapListCategory key={item.title} title={item.title} borderColor={item.circle} subtitle={item.subtitle} />)}
                </div>
            </div>
        </section>
    );
};

export default RoadMap;