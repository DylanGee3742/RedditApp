import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../api/api";

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.failedToLoad = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.failedToLoad = false;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.failedToLoad = true;
        }
    }
})

export const selectComments = state => state.comments.comments

export default CommentsSlice.reducer;