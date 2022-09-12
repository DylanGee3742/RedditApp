import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchSubreddits } from "../../api/api";

export const SubredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false,
    },
    reducers: {

    },
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
            state.subreddits = action.payload;
        },
        [fetchSubreddits.rejected]: (state, action)  => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
        }
    }

})

export const selectSubreddits = state => state.subreddits.subreddits;

export default SubredditsSlice.reducer