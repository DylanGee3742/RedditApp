import { createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../../api/api";


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        LoadingComments: false,
        failedToLoad: false
    },
    reducers: {

    },
    extraReducers: {
        [getPostComments.pending]: (state, action) => {
            state.LoadingComments =  true;
            state.failedToLoad = false;

        },
        [getPostComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.LoadingComments = false;
            state.failedToLoad = false;
        },
        [getPostComments.rejected]: (state, action) => {
            state.LoadingComments = false;
            state.failedToLoad = true;
        }
    }
})


export const selectComments = state => state.comments.comments

export const selectPostComments = state => {
    return state.comments.comments.map(comment => comment.id)
};

export default commentsSlice.reducer;