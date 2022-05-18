import React, {useState} from 'react';
import './feedback-form.scss';
import arrowLeft from '../../assets/shared/icon-arrow-left.svg';
import {useNavigate} from "react-router-dom";
import InputGroupItem from "../../components/InputGroupItem/InputGroupItem";
import iconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import iconEditFeedback from '../../assets/shared/icon-new-feedback.svg';
import iconActiveCategory from '../../assets/shared/icon-check.svg';
import {homeNavigations} from "../../data/data";

const FeedbackForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(homeNavigations[1]);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const pickCategory = (category) => {
        setCategory(category);
        setIsDropdownActive(false);
    }
    const [detail, setDetail] = useState('');
    const goBack = () => {
        navigate(-1)
    }
    const postFeedback = (e) => {
        e.preventDefault();
    }
    return (
        <section className='feedback-form'>
            <div className="feedback-form--container">
                <button className='feedback-form--navigate' onClick={goBack}>
                    <img src={arrowLeft} alt="arrow left"/>
                    go back
                </button>
                <form className='feedback-form--form form' onSubmit={postFeedback}>
                    <img className='feedback-form--icon' src={iconNewFeedback} alt="icon"/>
                    <h1 className="feedback-form--title">Create new Feedback</h1>

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
                                {category.title}
                                <img style={{transform: `rotate(${isDropdownActive ? '90deg' : '-90deg'})`}} src={arrowLeft} alt="arrow back"/>
                            </button>
                            <ul className={`feedback-form--dropdown-list ${isDropdownActive && 'feedback-form--dropdown-list__open'}`}>
                                {homeNavigations.slice(1).map((item, i) => (
                                    <li key={i} onClick={() => pickCategory(item)} className={`${category === item && '__active'}`}>
                                        {item.title}
                                        {category === item && <img src={iconActiveCategory} alt="icon active category"/>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InputGroupItem>
                    <InputGroupItem label={'Feedback Detail'} description={'Include any specific comments on what should be improved, added, etc.'}>
                        <textarea className='feedback-form--textarea body-s input' maxLength={255}/>
                    </InputGroupItem>

                    <div className="feedback-form--btns-container">
                        <button className='feedback-form--btn feedback-form--btn-delete'>Delete</button>
                        <button className='feedback-form--btn feedback-form--btn-cancel'>Cancel</button>
                        <button className='feedback-form--btn feedback-form--btn-save'>Save Changes</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;