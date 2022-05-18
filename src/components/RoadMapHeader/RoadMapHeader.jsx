import React from 'react';
import './road-map-header.scss';
import {Link} from "react-router-dom";
import arrowBack from '../../assets/shared/icon-arrow-left.svg';

const RoadMapHeader = () => {
    return (
        <header className='roadmap--header header'>
            <div className="header--nav">
                <Link className='header--back-btn' to='/'>
                    <img src={arrowBack} alt="arrow left"/>
                    Go Back
                </Link>
                <h1 className='header--title'>Roadmap</h1>
            </div>
            <Link to='/feedback/form/' className="header--btn">
                + Add Feedback
            </Link>
        </header>
    );
};

export default RoadMapHeader;