import React, {useState} from 'react';
import './home-intro.scss';
import burgerOpen from '../../assets/shared/mobile/icon-hamburger.svg';
import burgerClose from '../../assets/shared/mobile/icon-close.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../store/slices/burgerMenuSlice";

const HomeIntro = () => {
    const {isOpen} = useSelector(state => state.menu);
    const dispatch = useDispatch();

    return (
        <div className='intro'>
            <div className="intro--title">
                <h2>Frontend Mentor</h2>
            </div>
            <div className="intro--description body-s">
                Feedback board
            </div>
            <button className='intro--burger' onClick={() => dispatch(toggleMenu())}>
                <img src={isOpen ? burgerClose :burgerOpen} alt="burger open"/>
            </button>
        </div>
    );
};

export default HomeIntro;