import React from 'react';
import './burger-menu.scss';
import FilterCategory from "../FilterCategory/FilterCategory";
import RoadMap from "../RoadMap/RoadMap";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu} from "../../store/slices/burgerMenuSlice";

const BurgerMenu = () => {
    const {isOpen} = useSelector(state => state.menu);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(closeMenu());
    }
    return (
        <div className={`burger-menu ${ isOpen && 'burger-menu__open'}`} onClick={close}>
            <div className={`burger-menu--container ${ isOpen && 'burger-menu--container__open'} `} onClick={(e) => e.stopPropagation()}>
                <FilterCategory />
                <RoadMap />
            </div>
        </div>
    );
};

export default BurgerMenu;