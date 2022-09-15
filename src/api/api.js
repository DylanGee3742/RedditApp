import { createAsyncThunk } from "@reduxjs/toolkit";
import { isCompositeComponent } from "react-dom/test-utils";

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
    async (selected) => {
        const response = await fetch(`${ROOT_API}${selected}.json`)
        const json = await response.json()

        return json.data.children.map(post => post.data);
    }
)


// Fetch Comments
export const fetchComments = createAsyncThunk(
    'comments/fetchComments', 
    async (permalink) => {
        const response = await fetch(`${ROOT_API}${permalink}.json`)
        const json = await response.json()

        return json[1].data.data.children.map(subreddit => subreddit.data);
    }
)
