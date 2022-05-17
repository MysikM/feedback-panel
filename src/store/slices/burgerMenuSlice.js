import {createSlice} from "@reduxjs/toolkit";

const burgerMenuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false
    },
    reducers: {
        openMenu: (state) => {
            state.isOpen = true;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const {openMenu, closeMenu, toggleMenu} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer