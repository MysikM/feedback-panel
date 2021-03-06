import React, {useEffect, useState} from 'react';
import './feedback-detail.scss';
import {useParams} from "react-router-dom";
import DetailNavigation from "../../components/DetailNavigation/DetailNavigation";
import SuggestionItem from "../../components/SuggestionItem/SuggestionItem";
import {useSelector} from "react-redux";
import CommentList from "../../components/CommentList/CommentList";
import CommentAddForm from "../../components/CommentAddForm/CommentAddForm";

const FeedbackDetail = () => {
    const {id} = useParams();

    const {productRequests} = useSelector(state => state.suggestion);
    const [suggestionItem, setSuggestionItem] = useState(productRequests.find(item => item.id === +id));

    useEffect(()=>{
        setSuggestionItem(productRequests.find(item => item.id === +id));
    },[productRequests])

    useEffect(()=>{
        setSuggestionItem(productRequests.find(item => item.id === +id));
    },[id]);

    return (
        <section className='detail'>
            <div className="detail--container">
                <DetailNavigation postId={id} />
                <SuggestionItem {...suggestionItem} />
                <CommentList count={suggestionItem.comments.length} comments={suggestionItem.comments} postId={id}/>
                <CommentAddForm postId={id} />
            </div>
        </section>
    );
};

export default FeedbackDetail;