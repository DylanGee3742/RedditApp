import { createAsyncThunk } from "@reduxjs/toolkit";

export const ROOT_API = `https://www.reddit.com/`;

export const fetchSubreddits = createAsyncThunk(
    'subreddit/fetchSubreddit',
    async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json`)
        const json = await response.json()
        return json.data.children.map(subreddit => subreddit.data);
    }
)

