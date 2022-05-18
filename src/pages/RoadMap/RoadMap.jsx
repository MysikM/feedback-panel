import React from 'react';
import './road-map.scss'
import RoadMapHeader from "../../components/RoadMapHeader/RoadMapHeader";

const RoadMap = () => {
    return (
        <section className='roadmap'>
            <div className="roadmap--container container">
                <RoadMapHeader />
            </div>
        </section>
    );
};

export default RoadMap;