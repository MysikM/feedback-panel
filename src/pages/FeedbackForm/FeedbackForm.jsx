import React, {useEffect, useState} from 'react';
import './feedback-form.scss';
import arrowLeft from '../../assets/shared/icon-arrow-left.svg';
import {useNavigate, useParams} from "react-router-dom";
import InputGroupItem from "../../components/InputGroupItem/InputGroupItem";
import iconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import iconEditFeedback from '../../assets/shared/icon-edit-feedback.svg';
import iconActiveCategory from '../../assets/shared/icon-check.svg';
import {homeNavigations} from "../../data/data";
import {useSelector} from "react-redux";

const FeedbackForm = () => {
    const params = useParams();
    const {productRequests} = useSelector(state => state.suggestion);
    const [suggestionItem, setSuggestionItem] = useState('');
    const navigate = useNavigate();

    const [title, setTitle] = useState(suggestionItem?.title || '');

    const [category, setCategory] = useState(suggestionItem?.category || homeNavigations[1].category);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const pickCategory = (category) => {
        setCategory(category);
        setIsDropdownActive(false);
    };

    const [detail, setDetail] = useState(suggestionItem?.description || '');

    const goBack = () => {
        navigate(-1)
    };

    const postFeedback = (e) => {
        e.preventDefault();
    };

    useEffect(()=>{
        if(params?.id) {
            setSuggestionItem(productRequests.find(item => item.id === +params.id));
            setTitle(productRequests.find(item => item.id === +params.id).title);
            setCategory(productRequests.find(item => item.id === +params.id).category);
            setDetail(productRequests.find(item => item.id === +params.id).description);
        }
    }, [params])
    return (
        <section className='feedback-form'>
            <div className="feedback-form--container">
                <button className='feedback-form--navigate' onClick={goBack}>
                    <img src={arrowLeft} alt="arrow left"/>
                    go back
                </button>
                <form className='feedback-form--form form' onSubmit={postFeedback}>
                    <img className='feedback-form--icon' src={params?.id ? iconEditFeedback :iconNewFeedback} alt="icon"/>
                    <h1 className="feedback-form--title">{params?.id ? `Editing \`${title}\`` : 'Create new Feedback' }</h1>

                    <InputGroupItem label={'Feedback Title'} description={'Add a short, descriptive headline'} >
                        <input
                               type="text"
                               className='body-s input'
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}

                        />
                    </InputGroupItem>
                    <InputGroupItem label={'Category'} description={'Choose a category for your feedback'} >
                        <div className='feedback-form--dropdown'>
                            <button className='body-s feedback-form--dropdown-btn' onClick={() => setIsDropdownActive(!isDropdownActive)}>
                                {category}
                                <img style={{transform: `rotate(${isDropdownActive ? '90deg' : '-90deg'})`}} src={arrowLeft} alt="arrow back"/>
                            </button>
                            <ul className={`feedback-form--dropdown-list ${isDropdownActive && 'feedback-form--dropdown-list__open'}`}>
                                {homeNavigations.slice(1).map((item, i) => (
                                    <li key={i} onClick={() => pickCategory(item)} className={`${category === item.category && '__active'}`}>
                                        {item.title}
                                        {category === item.category && <img src={iconActiveCategory} alt="icon active category"/>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InputGroupItem>
                    <InputGroupItem label={'Feedback Detail'} description={'Include any specific comments on what should be improved, added, etc.'}>
                        <textarea
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            className='feedback-form--textarea body-s input'
                            maxLength={255}/>
                    </InputGroupItem>

                    <div className="feedback-form--btns-container">
                        {params?.id && (<button className='feedback-form--btn feedback-form--btn-delete'>Delete</button>)}
                        <button className='feedback-form--btn feedback-form--btn-cancel'>Cancel</button>
                        <button className='feedback-form--btn feedback-form--btn-save'>{params?.id ? 'Save Changes' : 'Add Feedback'}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;