import { createSlice, createSelector } from "@reduxjs/toolkit";
import postsSlice from "../posts/postsSlice";
import { selectPosts } from "../posts/postsSlice";
import { fetchSearchTermPosts } from "../../api/api";

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        searchTermPosts: [],
        searchTerm: '',
        isLoading: false,
        failedToLoad: false,
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = '';
        }
    },
    extraReducers: {
        [fetchSearchTermPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.failedToLoad = false
        },
        [fetchSearchTermPosts.fulfilled]: (state, action) => {
            state.searchTermPosts = action.payload;
            state.isLoading = false;
            state.failedToLoad = false;
        },
        [fetchSearchTermPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.failedToLoad = true;

        }
    }
})

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export const selectSearchTerm = state => state.searchTerm.searchTerm;

export default searchTermSlice.reducer;