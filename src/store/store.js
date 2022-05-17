import {configureStore} from "@reduxjs/toolkit";
import suggestionReducer from './slices/suggestionSlice';
import burgerMenuReducer from './slices/burgerMenuSlice';

export const store = configureStore({
    reducer: {
        suggestion: suggestionReducer,
        menu: burgerMenuReducer,
    },
})