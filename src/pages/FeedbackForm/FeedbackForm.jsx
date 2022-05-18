import React, {useEffect, useState} from 'react';
import './feedback-form.scss';
import arrowLeft from '../../assets/shared/icon-arrow-left.svg';
import {useNavigate, useParams} from "react-router-dom";
import InputGroupItem from "../../components/InputGroupItem/InputGroupItem";
import iconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import iconEditFeedback from '../../assets/shared/icon-edit-feedback.svg';
import iconActiveCategory from '../../assets/shared/icon-check.svg';
import {homeNavigations, roadmapsSectionList} from "../../data/data";
import {useDispatch, useSelector} from "react-redux";
import {removeSuggestion, addSuggestion, editSuggestion} from "../../store/slices/suggestionSlice";

const FeedbackForm = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {productRequests} = useSelector(state => state.suggestion);
    const [suggestionItem, setSuggestionItem] = useState('');
    const navigate = useNavigate();

    const [title, setTitle] = useState(suggestionItem?.title || '');

    const [category, setCategory] = useState(suggestionItem?.category || homeNavigations[1].category);
    const [isDropdownCategoryActive, setIsDropdownCategoryActive] = useState(false);
    const pickCategory = (category) => {
        setCategory(category);
        setIsDropdownCategoryActive(false);
    };

    const [status, setStatus] = useState(suggestionItem?.status || roadmapsSectionList[0].title);
    const [isDropdownStatusActive, setIsDropdownStatusActive] = useState(false);
    const pickStatus = (status) => {
        setStatus(status);
        setIsDropdownStatusActive(false);
    }

    const [detail, setDetail] = useState(suggestionItem?.description || '');

    const goBack = () => {
        navigate(-1)
    };

    const postFeedback = (e) => {
        e.preventDefault();
    };

    const removeItem = () => {
        dispatch(removeSuggestion({id: suggestionItem.id}))
        navigate('/')
    }

    const edit = () => {
        const edited = {
            ...suggestionItem,
            title,
            category,
            status,
            description: detail
        }
        dispatch(editSuggestion(edited));
        navigate(-1);
    }

    const create = () => {
        const newSuggestion = {
            id: new Date().getTime(),
            title,
            category,
            upvotes: 0,
            upvoted: false,
            status: "suggestion",
            description: detail,
            comments: [],
        }
        dispatch(addSuggestion(newSuggestion));
        navigate(`/feedback/${newSuggestion.id}`);
    }

    useEffect(()=>{
        if(params?.id) {
            setSuggestionItem(productRequests.find(item => item.id === +params.id));
            setTitle(productRequests.find(item => item.id === +params.id).title);
            setCategory(productRequests.find(item => item.id === +params.id).category);
            setDetail(productRequests.find(item => item.id === +params.id).description);
            setStatus(productRequests.find(item => item.id === +params.id).status);
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
                            <button className='body-s feedback-form--dropdown-btn' onClick={() => setIsDropdownCategoryActive(!isDropdownCategoryActive)}>
                                {category.toUpperCase()}
                                <img style={{transform: `rotate(${isDropdownCategoryActive ? '90deg' : '-90deg'})`}} src={arrowLeft} alt="arrow back"/>
                            </button>
                            <ul className={`feedback-form--dropdown-list ${isDropdownCategoryActive && 'feedback-form--dropdown-list__open'}`}>
                                {homeNavigations.slice(1).map((item, i) => (
                                    <li key={i} onClick={() => pickCategory(item.category)} className={`${category === item.category && '__active'}`}>
                                        {item.title}
                                        {category === item.category && <img src={iconActiveCategory} alt="icon active category"/>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InputGroupItem>
                    {params?.id && (<InputGroupItem label={'Update Status'} description={'Change feature state'} >
                        <div className='feedback-form--dropdown'>
                            <button className='body-s feedback-form--dropdown-btn' onClick={() => setIsDropdownStatusActive(!isDropdownStatusActive)}>
                                {status.toUpperCase()}
                                <img style={{transform: `rotate(${isDropdownStatusActive ? '90deg' : '-90deg'})`}} src={arrowLeft} alt="arrow back"/>
                            </button>
                            <ul className={`feedback-form--dropdown-list ${isDropdownStatusActive && 'feedback-form--dropdown-list__open'}`}>
                                {roadmapsSectionList.map((item, i) => (
                                    <li key={i} onClick={() => pickStatus(item.title)} className={`${status.toLowerCase() === item.title.toLowerCase() && '__active'}`}>
                                        {item.title}
                                        {status.toLowerCase() === item.title.toLowerCase() && <img src={iconActiveCategory} alt="icon active category"/>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InputGroupItem>)}
                    <InputGroupItem label={'Feedback Detail'} description={'Include any specific comments on what should be improved, added, etc.'}>
                        <textarea
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            className='feedback-form--textarea body-s input'
                            maxLength={255}/>
                    </InputGroupItem>

                    <div className="feedback-form--btns-container">
                        {params?.id && (<button className='feedback-form--btn feedback-form--btn-delete' onClick={removeItem}>Delete</button>)}
                        <button className='feedback-form--btn feedback-form--btn-cancel' onClick={() => navigate(-1)}>Cancel</button>
                        <button type="submit" className='feedback-form--btn feedback-form--btn-save' onClick={ () => params?.id ? edit() : create() }>{params?.id ? 'Save Changes' : 'Add Feedback'}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;