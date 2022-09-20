import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchPosts, getPostComments } from "../../api/api";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

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

export const selectPosts = state => state.posts.posts;


export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return posts;
    }
)


export default PostsSlice.reducer;