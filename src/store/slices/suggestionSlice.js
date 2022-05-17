import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const initialSuggestion = createAsyncThunk(
    'suggestion/initialSuggestion',
    async () => {
        const response = await fetch("./data.json");
        const data = await response.json();
        return data.productRequests;
    }
)

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        productRequests: [
            {
                id: null,
                title: null,
                category: null,
                upvotes: null,
                upvoted: null,
                status: null,
                description: null,
                comments: [],
            }
        ],
        sortProductRequest: [],
    },
    reducers: {
        addSuggestion:(state, action) => {
            state.productRequests = [...state.productRequests, action.payload];
            state.sortProductRequest = [...state.productRequests];
        },
        removeSuggestion:(state, action) => {
            state.productRequests = state.productRequests.filter((item) => item.id !== action.payload.id)
            state.sortProductRequest = [...state.productRequests];
        },
        editSuggestion: (state, action) => {
            state.productRequests = state.productRequests.map((item) => item.id === action.payload.id ? action.payload : item)
            state.sortProductRequest = [...state.productRequests];
        },
        sortSuggestion: (state, action) => {
            state.sortProductRequest = [...state.productRequests.filter((item) => action.payload.category.includes(item.category))]
        },
        upvoteSuggestion: (state, action) => {
            state.sortProductRequest = state.sortProductRequest.map((item) => item.id === action.payload.id ? {...item,upvotes: item.upvoted ? item.upvotes - 2 : item.upvotes + 2, upvoted: !item.upvoted } : item)
        },
        ascUpvotesSuggestion: (state, action) => {
            state.sortProductRequest = state.sortProductRequest.sort((a,b) => b.upvotes - a.upvotes)
        },
        descUpvotesSuggestion: (state, action) => {
            state.sortProductRequest = state.sortProductRequest.sort((a,b) => a.upvotes - b.upvotes)
        },
        ascCommentSuggestion: (state, action) => {
            state.sortProductRequest = state.sortProductRequest.sort((a,b) => b.comments.length - a.comments.length)
        },
        desCommentSuggestion: (state, action) => {
            state.sortProductRequest = state.sortProductRequest.sort((a,b) =>  a.comments.length - b.comments.length)
        }
    },
    extraReducers: {
        [initialSuggestion.fulfilled]: (state, action) => {
            state.productRequests = [...action.payload];
            state.sortProductRequest = [...action.payload];
        }
    }
})

export default suggestionSlice.reducer;
export const {
    addSuggestion,
    removeSuggestion,
    editSuggestion,
    sortSuggestion,
    upvoteSuggestion,
    ascUpvotesSuggestion,
    descUpvotesSuggestion,
    ascCommentSuggestion,
    desCommentSuggestion,
} = suggestionSlice.actions;