import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/api";

export const PostsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading =  true;
            state.failedToLoad = false;

        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.failedToLoad = false;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.failedToLoad = true;
        }
    }
})

export const selectPosts = state => state.posts.posts

export default PostsSlice.reducer;