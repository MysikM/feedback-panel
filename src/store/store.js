import {configureStore} from "@reduxjs/toolkit";
import suggestionReducer from './slices/suggestionSlice';

export const store = configureStore({
    reducer: {
        suggestion: suggestionReducer
    },
})