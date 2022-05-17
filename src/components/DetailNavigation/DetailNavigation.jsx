import React from 'react';
import './detail-navigation.scss'
import {Link, useNavigate} from "react-router-dom";
import arrowBack from '../../assets/shared/icon-arrow-left.svg';

const DetailNavigation = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='detail--navigate navigate-detail'>
            <button className='navigate-detail--btn' onClick={goBack}>
                <img src={arrowBack} alt='arrow back' />
                Go Back
            </button>
            <Link className='navigate-detail--link' to='/feedback/form' >Edit Feedback</Link>
        </div>
    );
};

export default DetailNavigation;