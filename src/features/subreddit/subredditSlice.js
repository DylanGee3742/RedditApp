import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subbreddit/fetchSubreddit',
    async () => {
        const response = await fetch(`https://www.reddit.com/r/popular.json`)
        const json = await response.json()
        return json.data.children.map((element) => element.data)
    }
)

export const SubredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false,
        error: ''
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
            state.subreddits.push(action.payload)
        },
        [fetchSubreddits.rejected]: (state, action)  => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
            state.error = action.error.message
        }
    }

})


export const selectSubreddits = state  => state.subreddits.subreddits;

export default SubredditsSlice.reducer