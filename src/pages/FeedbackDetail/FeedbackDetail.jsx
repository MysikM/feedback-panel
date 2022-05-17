import React from 'react';
import './feedback-detail.scss';
import {useParams} from "react-router-dom";
import DetailNavigation from "../../components/DetailNavigation/DetailNavigation";

const FeedbackDetail = () => {
    const {id} = useParams();
    return (
        <section className='detail'>
            <div className="detail--container">
                <DetailNavigation />
            </div>
        </section>
    );
};

export default FeedbackDetail;