import React, {useEffect, useState} from 'react';
import './road-map.scss'
import RoadMapHeader from "../../components/RoadMapHeader/RoadMapHeader";
import RoadMapListCategory from "../../components/RoadMapListCategory/RoadMapListCategory";
import {roadmapsSectionList} from "../../data/data";
import RoadMapToggle from "../../components/RoadMapToggle/RoadMapToggle";

const RoadMap = () => {
    const [activeCategory, setActiveCategory] = useState(roadmapsSectionList[1].title);
    const [activeCategoryList, setActiveCategoryList] = useState(roadmapsSectionList.find(el => el.title === activeCategory));

    useEffect(()=>{
        setActiveCategoryList(roadmapsSectionList.find(el => el.title === activeCategory));
        },
        [activeCategory]);

    return (
        <section className='roadmap'>
            <div className="roadmap--container container">
                <RoadMapHeader />
                <RoadMapToggle activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <div className='roadmap--section'>
                    {roadmapsSectionList.slice(1).map(item => <RoadMapListCategory key={item.title} title={item.title} borderColor={item.circle} subtitle={item.subtitle} />)}
                </div>
                <div className="roadmap--section roadmap--section-mobile">
                    <RoadMapListCategory title={activeCategoryList.title} borderColor={activeCategoryList.circle} subtitle={activeCategoryList.subtitle} />
                </div>
            </div>
        </section>
    );
};

export default RoadMap;