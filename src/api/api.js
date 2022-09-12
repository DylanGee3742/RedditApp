import { createAsyncThunk } from "@reduxjs/toolkit";

export const ROOT_API = `https://www.reddit.com/`;

// Fetch Subreddits
export const fetchSubreddits = createAsyncThunk(
    'subreddit/fetchSubreddit',
    async () => {
        const response = await fetch(`${ROOT_API}subreddits.json`)
        const json = await response.json()
        return json.data.children.map(subreddit => subreddit.data);
    }
)

// Fetch Posts
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch(`${ROOT_API}r/AskReddit/.json`)
        const json = await response.json()
        return json.data.children.map(post => post.data);
    }
)


// Fetch Comments

