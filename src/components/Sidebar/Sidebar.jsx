import React from 'react';
import './sidebar.scss';
import HomeIntro from "../HomeIntro/HomeIntro";
import FilterCategory from "../FilterCategory/FilterCategory";
import RoadMap from "../RoadMap/RoadMap";

const Sidebar = () => {
    return (
        <div className="home--sidebar sidebar">
            <HomeIntro />
            <FilterCategory />
            <RoadMap />
        </div>
    );
};

export default Sidebar;